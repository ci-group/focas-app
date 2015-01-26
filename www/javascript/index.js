/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

/*jslint browser:true */
/*global  $, utilities, template*/

var app = {
    // Application Constructor
    initialize: function () {
        this.bindEvents();
    },

    /**
     * Bind Event Listeners
     *
     * Bind any events that are required on startup. Common events are:
     * 'load', 'deviceready', 'offline', and 'online'.
     */
    bindEvents: function () {
        $(document).on("pagecreate", "#main-page", this.onPageCreateMain);
        $(document).on("pagecreate", this.onPageCreate);
        $(document).on("pagecreate", this.activateHeaderAndFooter);
        $(document).on("pagebeforehide", "#video", this.onPageHideVideo);
    },

    /**
     * Bind events for the content list to the page.
     */
    onPageCreateMain: function () {
        var self = this;
        $.ajaxSetup({async:false});
        $.getJSON("content.json",function(data) {
            self.content = data;
            $.getScript("templates/navigation.js",function(){
                var text = template(self.content);
                $("#navigation").html(text).enhanceWithin();
                $("#navigation ul.ui-listview li a").removeClass("ui-btn-icon-right").removeClass("ui-icon-carat-r");
                $("#navigation ul.ui-listview li a").addClass("ui-btn-icon-left").addClass("ui-icon-carat-l");
            });
            $.getScript("templates/page.js",function(){
                var text = template(self.content);
                $("body").append(text).enhanceWithin();
            });
        });
        $.ajaxSetup({async:true});

        $(".video").bind("vclick",
            function () {
                utilities.checkAndDownload($(this).attr('data-file'), "video/",
                function (file, fileUrl) {
                    utilities.embedVideo(file, fileUrl);
                    $.mobile.pageContainer.pagecontainer("change", "#video");
                },
                function (error) {
                    console.log("Error occured during download: " + error);
                    utilities.insertCouldNotDownloadDialog();
                    if($("#progress-dialog").is(":visible")) {
                        $("#progress-dialog").on("popupafterclose", function () {
                            $("#cannot-download-dialog").popup("open", {
                                "positionTo": "window"
                            });
                        });
                        $("#progress-dialog").popup("close");
                    }else{
                        $("#cannot-download-dialog").popup("open", {
                            "positionTo": "window"
                        });
                    }
                });
            });

        $(".article").bind("vclick", function () {
            utilities.insertCouldNotDownloadDialog();
            $("#cannot-download-dialog").popup("open", {
                "positionTo": "window"
            });

/*
            utilities.checkAndDownload($(this).attr('data-file'), "pdf/",
            function (file, fileUrl) {
                $('pdf-object').attr('data', fileUrl);
                $.mobile.pageContainer.pagecontainer("change", "#pdf");
            },
            function (error) {
                console.log("Error occured during download: " + error);
                utilities.insertCouldNotDownloadDialog();
                $("#cannot-download-dialog").popup("open");
//                if($("#progress-dialog").is(":visible")) {
                    $("#progress-dialog").on("popupafterclose", function () {
                        $("#cannot-download-dialog").popup("open", {
                            "positionTo": "window"
                        });
                    });
                    $("#progress-dialog").popup("close");
//                }else{
//                    $("#cannot-download-dialog").popup("open", {
//                        "positionTo": "window"
//                    });
//                }
            });
*/
        });
    },

    onPageCreate: function () {

    },

    /**
     * Hide the video player on the video page
     */
    onPageHideVideo: function () {
        // There should be only 1 video player at a time...
        var video = $('.videoplayer')[0];
        video.pause();
    },

    /**
     * This url is used to download content from
     */
    serverUrl: "http://mac360.few.vu.nl/focas/download/"
};

app.initialize();
