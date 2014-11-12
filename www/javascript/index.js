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
/*global  $, utilities*/

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
        $(document).on("pagebeforehide", "#video", this.onPageHideVideo);
        $(document).on("pagecreate",this.addHeaderAndFooter);
        $(document).on('pageshow',function(){
            $('#main-content').height(app.getRealContentHeight());
        });
    },

    addHeaderAndFooter: function () {
        $(".header").load("header.html",function() {
            $("[data-role=header], [data-role=footer]").toolbar();
            $.mobile.resetActivePageHeight();
        });
    },

    /**
     * Bind events for the content list to the page.
     */
    onPageCreateMain: function () {
        $(".video").bind("vclick", function () {
//            console.log("file: " + $(this).attr('data-file'));

            utilities.checkAndDownload($(this).attr('data-file'), "video/",
                function (file, fileUrl) {
                    utilities.embedVideo(file, fileUrl);
                    $.mobile.pageContainer.pagecontainer("change", "#video");
                },
                function () {
                    $("#progress-dialog").on("popupafterclose", function () {
                        $("#cannotDownloadDialog").popup("open");
                    });
                    $("#progress-dialog").popup("close");
                });
        });

        $(".pdf").bind("vclick", function () {
//            console.log("file: " + $(this).attr('data-file'));
            $('pdf-object').attr('data', "pdf/" + $(this).attr('data-file'));

            $.mobile.pageContainer.pagecontainer("change", "#pdf");
        });
    },

    /**
     * Hide the video player on the video page
     */
    onPageHideVideo: function () {
        // There should be only 1 video player at a time...
        var video = $('.videoplayer')[0];
        video.pause();
    },

    getRealContentHeight: function () {
        var header = $("div[data-role='header']:visible");
        var footer = $("div[data-role='footer']:visible");
        var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
        var viewport_height = $(window).height();

        var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
        if(header.hasClass("ui-header-fixed")) {
            content_height += 1;
        }
        if(footer.hasClass("ui-footer-fixed")) {
           content_height += 1;
        }
        if((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
            content_height -= (content.outerHeight() - content.height());
        }
        return content_height;
    },

    /**
     * This url is used to download content from
     */
    serverUrl: "http://mac360.few.vu.nl/focas/download/"
};

app.initialize();
