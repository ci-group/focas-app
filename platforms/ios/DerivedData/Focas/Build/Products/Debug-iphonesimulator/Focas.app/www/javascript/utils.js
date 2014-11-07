var Utilities = function() {
    this.fileSystem;
    var downloadInProgress = false;
    
    this.UrlExists = function(url) {
        var response = $.ajax({
                              url: url,
                              type: 'HEAD',
                              async: false
                              }).status;
        return response!=404;
    };
    
    this.initialize = function() {
    };
//    
//    this.initFileSystem = function() {
//        if(typeof this.fileSystem == 'undefined') {
//            var dfd = new jQuery.Deferred();
//            var that = this;
//            
//            function onFileSystemSuccess (fileSystem) {
//                this.fileSystem = fileSystem;
//                dfd.resolveWith(fileSystem);
//            };
//            
//            function fail (evt) {
//                console.log(evt.target.error.code);
//                dfd.rejectWith(evt);
//            };
//            
//            function setfileSystemName(data) {
//                console.log("We got the file system!: " + data.root.name);
//                that.fileSystem = data;
//            };
//            
//            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
//            
//            $.when(dfd).then(setfileSystemName);
//        }
//    }
    
    this.embedVideo = function(file, fileUrl) {
        var text = "";
        text += "<video id='video-"+file+"' class='videoplayer' width='100%' controls autoplay>";
        text += "<source src='"+fileUrl+"' type='video/mp4'>";
        text += "<object data='"+fileUrl+"'>";
        text += "<embed src='"+fileUrl+"'>";
        text += "</object>";
        text += "</video>";
        
        $("#video-embed").html(text);
    };

    
    this.checkAndDownload = function (file, directory, onSuccess, onFailure) {
//        this.initFileSystem();
        if(downloadInProgress) {
            return false;
        }
        var fileUrl = cordova.file.dataDirectory+directory+file;
        if(!this.UrlExists(fileUrl)){
            downloadInProgress = true;
            
            var fileTransfer = new FileTransfer();
            var uri = encodeURI(app.serverUrl+file);
            
            $( "#progress-dialog" ).popup("open");
            if(typeof Utilities.progressCircle == 'undefined'){
                Utilities.progressCircle = $('#progress-dialog-popup #progress-bar').cprogress({
                        percent: 0, // starting position
                        img1: 'images/v1.png', // background
                        img2: 'images/v2.png', // foreground
                        speed: 120, // speed (timeout)
                        PIStep : 0.1, // every step foreground area is bigger about this val
                        limit: 100,
                        loop : false, //if true, no matter if limit is set, progressbar will be running
                        showPercent : true //show hide percent
                });
            }else{
                goToOptions = {
                    limit: 100
                };
                Utilities.progressCircle.reset();
            }

            Utilities.progressCircle.start();
            
           fileTransfer.onprogress = function(progressEvent) {
                if (progressEvent.lengthComputable) {
                    goToOptions = {
                        limit: Math.round((progressEvent.loaded / progressEvent.total) * 100)
                    };
                    Utilities.progressCircle.options(goToOptions);
                } else {
                    // indeterminate progress bar
                    goToOptions = {
                        loop: true,
                        limit: 100
                    };
                    
                    Utilities.progressCircle.options(goToOptions);
                }
            };
            
            fileTransfer.download(uri,
                fileUrl,
                function(entry) {
                    console.log("download complete: " + entry.fullPath);
                  Utilities.progressCircle.stop();
                  downloadInProgress = false;
                    onSuccess(file, entry.nativeURL);
                },
                function(error) {
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("download error code " + error.code);
                    console.log("download http code " + error.http_status);
                      Utilities.progressCircle.stop();
                      downloadInProgress = false;
                      onFailure();
                },
                true,
                {}
            );
        }else{
            onSuccess(file, fileUrl);
        }
    };
};

var utilities = new Utilities();
utilities.initialize();