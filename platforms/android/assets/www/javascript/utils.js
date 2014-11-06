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
    text += "<video id='video-"+file+"' width='100%' controls autoplay>";
    text += "<source src='video/"+file+"' type='video/mp4'>";
    text += "<object data='video/"+file+"'>";
    text += "<embed src='video/"+file+"'>";
    text += "</object>";
    text += "</video>";
    
    $("#video-embed").html(text);
    
    //$("video-"+file).bind('ended', function(){
    //    revertImage(number);
    //                       });
}

function revertImage(number){
    var text = "<img src='images/Robot_"+number+".jpg' width='320' height='240' onclick='embedVideo("+number+")'>";
    
    document.getElementById('robot'+number).innerHTML = text;
}
