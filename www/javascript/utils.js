/*
 From: http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
 
 This is how you can use this function assuming the URL is,
 "http://dummy.com/?technology=jquery&blog=jquerybyexample".
 var tech = GetURLParameter('technology');
 var blog = GetURLParameter('blog');
 
 In above code variable "tech" will have "jquery" as value and "blog" variable's will be "jquerybyexample".
*/

var Utils = {
    embedVideo: function(file) {
        var text = "";
        text += "<video id='video-"+file+"' width='100%' controls autoplay>";
        text += "<source src='video/"+file+"' type='video/mp4'>";
        text += "<object data='video/"+file+"'>";
        text += "<embed src='video/"+file+"'>";
        text += "</object>";
        text += "</video>";

        $("#video-embed").html(text);
    }
}
