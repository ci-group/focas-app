/*jslint browser:true, vars:true, plusplus: true, nomen: true */
/*global  $, app, cordova, FileTransfer*/

var Utilities = function () {
    var downloadInProgress = false;

    this.initialize = function () {};

    /**
     * Check if a url exists
     */
    this.UrlExists = function (url) {
        var response = $.ajax({
            url: url,
            type: 'HEAD',
            async: false
        }).status;
        return response != 404;
    };

    /**
     * Embed a video tag into the video-embed div
     *
     * @file - Name of the file for the id of the video
     * @fileUrl - Url of the video
     */
    this.embedVideo = function (file, fileUrl) {
        var text = "";
        text += "<video id='video-" + file + "' class='videoplayer' width='100%' controls autoplay>";
        text += "<source src='" + fileUrl + "' type='video/mp4'>";
        text += "<object data='" + fileUrl + "'>";
        text += "<embed src='" + fileUrl + "'>";
        text += "</object>";
        text += "</video>";

        $("#video-embed").html(text);
    };

    /**
     * Show the progress dialog.
     * This assumes a jquery-mobile dialog in the page
     */
    this.showProgressDialog = function () {
        $("#progress-dialog").popup("open");
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
    };

    /**
     * Downloads a file from app.serverUrl to local fileUrl
     * Shows a progress dialog while downloading @see showProgressDialog.
     *
     *
     *
     * @param file - the Filename to pass on to onSuccess
     * @param fileUrl - local url to download to
     * @param onSuccess - Callback for success
     * @param onFailure - Callback for failure
     */
    this.downloadFile = function (file, fileUrl, onSuccess, onFailure) {
        var fileTransfer = new FileTransfer();
        var uri = encodeURI(app.serverUrl + file);

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
            fileUrl,
            function (entry) {
                console.log("download complete: " + entry.fullPath);
                Utilities.progressCircle.stop();
                downloadInProgress = false;

                onSuccess(file, entry.nativeURL);
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
        var fileUrl = cordova.file.dataDirectory + directory + file;
        if (!this.UrlExists(fileUrl)) {
            downloadInProgress = true;

            this.downloadFile(file, fileUrl, onSuccess, onFailure);
        } else {
            onSuccess(file, fileUrl);
        }
    };
};

var utilities = new Utilities();
utilities.initialize();
