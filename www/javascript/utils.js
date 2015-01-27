/*jslint browser:true, vars:true, plusplus: true, nomen: true */
/*global  $, app, cordova, FileTransfer, template, LocalFileSystem */

var Utilities = function () {
    var downloadInProgress = false;

    this.initialize = function () {

    };

    /**
     * Check if a url exists
     */
    this.UrlExists = function (url, callbackNotFound, callbackFound) {
        this.fileSystem.root.getFile(url, { create: false }, callbackFound, callbackNotFound);
    };

    /**
     * Embed a video tag into the video-embed div
     *
     * @file - Name of the file for the id of the video
     * @fileUrl - Url of the video
     */
    this.embedVideo = function (file, fileUrl) {
        $.getScript("templates/video.js",function() {
            var text = template({
                "item": {
                    "type": "video",
                    "name": file,
                    "url": fileUrl,
                    "id": file
                }
            });

            $("#video-embed").html(text);
        });
    };

    /**
     * Show the progress dialog.
     * This assumes a jquery-mobile dialog in the page
     */
    this.showProgressDialog = function () {
        this.insertDownloadDialog();
        var popup = $("#progress-dialog").popup("open", {
            "positionTo": "window"
        });
        if (typeof Utilities.progressCircle == 'undefined') {
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

    this.insertDownloadDialog = function(){
        if($("#progress-dialog").length === 0) {
            var page = $("body").pagecontainer( "getActivePage" );
            $.ajaxSetup({async:false});
            $.get("inserts/downloadDialog.html", function (data) {
                    $(page).append(data).enhanceWithin();
                    $("#progress-dialog").popup();
            });
            $.ajaxSetup({async:true});
        } else {
            $("#progress-dialog").popup();
        }
    };

    this.insertCouldNotDownloadDialog = function(){
        if($("#cannot-download-dialog").length === 0) {
            var page = $("body"); //.pagecontainer( "getActivePage" );
            $.ajaxSetup({async:false});
            $.get("inserts/couldNotDownloadDialog.html", function (data) {
                $(page).append(data).enhanceWithin();
                $("#cannot-download-dialog").popup();
            });
            $.ajaxSetup({async:true});
        } else {
            $("#cannot-download-dialog").popup();
        }
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
    this.downloadFile = function (fileName, fileDirectory, onSuccess, onFailure) {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(app.serverUrl + fileDirectory + fileName);
        var tempFileUri = encodeURI(cordova.file.tempDirectory+fileName);
        var progressDialog = this.showProgressDialog();

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

        progressDialog.popup("reposition",{
            "positionTo": "window"
        });

        // Download the file using the cordova FileTransfer plugin
        fileTransfer.download(uri,
            tempFileUri,
            function (entry) {
                console.log("download complete: " + entry.fullPath);

                Utilities.progressCircle.stop();
                downloadInProgress = false;

                // cordova.file.dataDirectory points to permanent storage
                // that does not get synced with the cloud on iOS
                var parentDir = cordova.file.dataDirectory;
                window.resolveLocalFileSystemURL(parentDir, function(parentDirEntry) {
                    parentDirEntry.getDirectory(fileDirectory,{create: true}, function (dirEntry) {
                        entry.moveTo(dirEntry, fileName, function (fileEntry) {
                            onSuccess(fileName, fileEntry.nativeURL);
                        }, onFailure);
                    }, onFailure);
                },
                function(error){
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
        // cordova.file.dataDirectory points to permanent storage
        // that does not get synced with the cloud on iOS
        var fileDirectory = cordova.file.dataDirectory + directory;
        var fileUrl = fileDirectory + file;
        this.UrlExists(
            fileUrl,
            function () {
                downloadInProgress = true;

                utilities.downloadFile(file, directory, onSuccess, onFailure);
            },
            function() {
                onSuccess(file, fileUrl);
            });
    };
};

var utilities = new Utilities();

$(document).on("deviceready",  function() {
    window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, function(fileSystem) {
        Utilities.prototype.fileSystem = null;
        utilities.fileSystem = fileSystem;
    });
});
