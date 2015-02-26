/*jslint browser:true, vars:true, plusplus: true, nomen: true */
/*global  $, app, cordova, FileTransfer, template, device */

var Utilities = function () {
    var downloadInProgress = false;

    this.initialize = function () {

    };

    /**
     * Check if a url exists
     */
    this.UrlExists = function (url, callbackFound, callbackNotFound) {
        window.resolveLocalFileSystemURL(url, callbackFound, callbackNotFound);
    };

    /**
     * Embed a video tag into the video-embed div
     *
     * @file - Name of the file for the id of the video
     * @fileUrl - Url of the video
     */
    this.embedVideo = function (file, fileUrl, poster) {
        $.getScript("templates/video.js", function () {
            var posterUrl = 'content/images/'+poster;
            var text = template({
                "item": {
                    "name": file,
                    "url": fileUrl,
                    "id": file,
                    "poster": posterUrl
                }
            });

            $("#video-embed").html(text);
        });
    };

    this.showCouldNotDownloadDialog = function (error) {
        console.log("Error occured during download: " + error);
        if ($("#progress-dialog").is(":visible")) {
            $("#progress-dialog").on("popupafterclose", function () {
                $("#cannot-download-dialog").popup("open");
            });
            $("#progress-dialog").popup("close");
        } else {
            $("#cannot-download-dialog").popup("open");
        }
    };

    /**
     * Show the progress dialog.
     * This assumes a jquery-mobile dialog in the page
     */
    this.showProgressDialog = function () {
        var popup = $("#progress-dialog").popup("open");
        if (typeof Utilities.progressCircle === 'undefined') {
            Utilities.progressCircle = $('#progress-dialog-popup #progress-bar').cprogress({
                percent: 0, // starting position
                img1: 'images/v1.png', // background
                img2: 'images/v2.png', // foreground
                speed: 120, // speed (timeout)
                PIStep: 0.1, // every step foreground area is bigger about this val
                limit: 0,
                loop: false, //if true, no matter if limit is set, progressbar will be running
                showPercent: true //show hide percent
            });
        } else {
            var goToOptions = {
                limit: 0
            };
            Utilities.progressCircle.options(goToOptions);
            Utilities.progressCircle.reset();
        }

        Utilities.progressCircle.start();

        return popup;
    };

    /**
     * Downloads a file from app.serverUrl to local fileUrl
     * Shows a progress dialog while downloading @see showProgressDialog.
     *
     * @param file - the Filename to pass on to onSuccess
     * @param fileUrl - local url to download to
     * @param onSuccess - Callback for success
     * @param onFailure - Callback for failure
     */
    this.downloadFile = function (fileName, fileDirectory, parentDirectory, onSuccess, onFailure) {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(app.serverUrl + fileDirectory + fileName);
        var tempDirectory;
        if(device.platform === "iOS") {
            tempDirectory = cordova.file.tempDirectory;
        }else if(device.platform === "Android") {
            tempDirectory = cordova.file.cacheDirectory;
        }
        var tempFileUri = encodeURI(tempDirectory + fileName);

        this.showProgressDialog();

        // On progress update the progress dialog
        fileTransfer.onprogress = function (progressEvent) {
            var goToOptions;

            if (progressEvent.lengthComputable) {
                goToOptions = {
                    limit: Math.round((progressEvent.loaded / progressEvent.total) * 100)
                };

                Utilities.progressCircle.options(goToOptions);
            } else {
                // Show an indeterminate progress bar
                goToOptions = {
                    loop: true
                };

                Utilities.progressCircle.options(goToOptions);
            }
        };

        // Download the file using the cordova FileTransfer plugin
        fileTransfer.download(uri,
            tempFileUri,
            function (entry) {
                console.log("download complete: " + entry.toURL());

                Utilities.progressCircle.stop();
                downloadInProgress = false;

                window.resolveLocalFileSystemURL(parentDirectory, function (parentDirEntry) {
                    parentDirEntry.getDirectory(fileDirectory, {create: true}, function (dirEntry) {
                        entry.moveTo(dirEntry, fileName, function (fileEntry) {
                            onSuccess(fileName, fileEntry.toURL());
                        }, onFailure);
                    }, onFailure);
                },
                function (error) {
                    console.log("ResolveLocalFileSystemURL error: " +error);
                });
            },
            function (error) {
                console.error("download error source " + error.source);
                console.error("download error target " + error.target);
                console.error("download error code " + error.code);
                console.error("download http code " + error.http_status);
                Utilities.progressCircle.stop();
                downloadInProgress = false;

                onFailure();
            },
            true, {});

    };

    /**
     * Check if the file exists locally, if not download it.
     * @see downloadFile
     * @see showProgressDialog
     *
     * @param file - the Filename to pass on to onSuccess
     * @param fileUrl - local url to download to
     * @param onSuccess - Callback for success
     * @param onFailure - Callback for failure
     */
    this.checkAndDownload = function (file, directory, onSuccess, onFailure) {
        if (downloadInProgress) {
            // Try to prevent multiple clicks resulting in multiple downloads
            // I realise that this is not really thread safe and does not
            // prevent all instances of double downloads
            return;
        }
        var parentDirectory;
        if(device.platform === "iOS") {
            // cordova.file.dataDirectory points to permanent storage
            // that does not get synced with the cloud on iOS
            parentDirectory= cordova.file.dataDirectory;
        }else if(device.platform === "Android") {
            // cordova.file.externalDataDirectory points to
            // permanent storage on the SD-card or large internal memory
            // that is accessible for other applications (needed to read
            // pdf's on android
            parentDirectory = cordova.file.externalDataDirectory;
        }

        var fileUrl = parentDirectory + directory + file;
        this.UrlExists(
            fileUrl,
            function() {
                onSuccess(file, fileUrl);
            },
            function () {
                downloadInProgress = true;

                utilities.downloadFile(file, directory, parentDirectory, onSuccess, onFailure);
            });
    };
};

var utilities = new Utilities();
