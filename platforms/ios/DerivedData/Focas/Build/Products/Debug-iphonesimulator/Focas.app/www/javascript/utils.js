/*
 From: http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
 
 This is how you can use this function assuming the URL is,
 "http://dummy.com/?technology=jquery&blog=jquerybyexample".
 var tech = GetURLParameter('technology');
 var blog = GetURLParameter('blog');
 
 In above code variable "tech" will have "jquery" as value and "blog" variable's will be "jquerybyexample".
*/

function getURLParameter(sParam, sString)
{
    var sPageURL = sString.split('?')[1];
//    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');
    for (var i = 0; i < sURLVariables.length; i++)
    {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam)
        {
            return sParameterName[1];
        }
    }
}


function embedVideo(file) {
    var text = "";
    text += "<video id='video-"+file+"' class='videoplayer' width='100%' controls autoplay>";
    text += "<source src='video/"+file+"' type='video/mp4'>";
    text += "<object data='video/"+file+"'>";
    text += "<embed src='video/"+file+"'>";
    text += "</object>";
    text += "</video>";
    
    $("#video-embed").html(text);
}

function UrlExists(url)
{
    var response = $.ajax({
          url: url,
          type: 'HEAD',
          async: false
    }).status;
    return response!=404;
}

var Utilities = function() {
    this.fileSystemName = "";
    
    this.initialize =  function() {
    };
    
    this.initFileSystem = function() {
        if(this.fileSystemName == "") {
            var dfd = new jQuery.Deferred();
            var that = this;
            
            function onFileSystemSuccess (fileSystem) {
                console.log(this.fileSystemName);
                
                dfd.notify(fileSystem);
            };
            
            function fail (evt) {
                console.log(evt.target.error.code);
                dfd.rejectWith(evt);
            };
            
            function setfileSystemName(data) {
                that.fileSystemName = data;
            };
            
            window.requestFileSystem(LocalFileSystem.PERSISTENT, 0, onFileSystemSuccess, fail);
            
            $.when(dfd).then(setfileSystemName);
        }
    }
    
    this.checkAndDownload = function (file, directory) {
        this.initFileSystem();
        if(!UrlExists(directory+file)){
            var fileTransfer = new FileTransfer();
            var uri = encodeURI(app.serverUrl+file);
            var fileURL = "cdvfile://localhost/persistent/"+directory+file;
            var success = false;
            
            fileTransfer.download(uri,
                fileURL,
                function(entry) {
                    console.log("download complete: " + entry.fullPath);
                    success = true;
                },
                function(error) {
                    console.log("download error source " + error.source);
                    console.log("download error target " + error.target);
                    console.log("download error code " + error.code);
                },
                true,
                {}
            );
            if(success){
                return fileURL;
            }else{
                return false;
            }
        }else{
            return true;
        }
    };
};

var utilities = new Utilities();
utilities.initialize();