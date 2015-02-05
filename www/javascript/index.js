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
/*global  $, utilities, template, Fuse, device */
var App = function () {
    // Application Constructor
    this.initialize = function () {
        App.prototype.content = [];
        App.prototype.items = null;
        App.prototype.serverUrl = "";

        /**
         * This url is used to download content from
         */
        this.serverUrl = "http://mac360.few.vu.nl/focas/download/";

        var self = this;
        $.ajaxSetup({async : false});
        $.getJSON("content.json", function (data) {
            self.content = data;

            $.each(data.pages,function (id, page) {
                if (self.items === null) {
                    self.items = page.items;
                } else {
                    self.items.concat(page.items);
                }
            });
        });
        $.ajaxSetup({async : true});

        this.bindEvents();
    };

    /**
     * Bind Event Listeners
     *
     * Bind any events that are required on startup. Common events are:
     * 'load', 'deviceready', 'offline', and 'online'.
     */
    this.bindEvents = function () {
        $(document).on("pagecreate", "#main-page", this.onPageCreateMain);
        $(document).on("pagebeforehide", "#video", this.onPageHideVideo);
    };

    /**
     * Bind events for the content list to the page.
     */
    this.onPageCreateMain = function () {
        $.ajaxSetup({async : false});
        $.getScript("templates/navigation.js", function () {
            var text = template(app.content);
            $("#navigation").html(text).enhanceWithin();
            $("#navigation ul.ui-listview li a").removeClass("ui-btn-icon-right").removeClass("ui-icon-carat-r");
            $("#navigation ul.ui-listview li a").addClass("ui-btn-icon-left").addClass("ui-icon-carat-l");
        });
        $.getScript("templates/page.js", function () {
            var text = template(app.content);
            $("body").append(text).enhanceWithin();
        });
        $.ajaxSetup({async : true});

        app.bindDownloadOnClick();

        $(".search").off().on("submit", function (event) {

            event.preventDefault();

            var options = {
                keys: ['author', 'title', 'year'],   // keys to search in
            };


            var searchTerm = this.search.value;
            var f = new Fuse(app.items, options);
            var result = f.search(searchTerm);

            $.ajaxSetup({async : false});
            $.getScript("templates/searchResults.js", function () {
                var text = template({"items" : result});
                $("#search-overview div#results").html(text).enhanceWithin();
                $(".search input").each(function() {
                    $(this).attr("value", searchTerm);
                });

                app.bindDownloadOnClick();

                $.mobile.pageContainer.pagecontainer("change", "#search-page");
            });
            $.ajaxSetup({async : true});
        });
    };

    this.bindDownloadOnClick = function () {
        $(".video").off().on("click",
            function () {
                utilities.checkAndDownload($(this).attr('data-file'), "video/",
                    function (file, fileUrl) {
                        utilities.embedVideo(file, fileUrl);
                        $.mobile.pageContainer.pagecontainer("change", "#video");
                    },
                    function (error) {
                        utilities.showCouldNotDownloadDialog(error);
                    });
            });

        $(".article").off().on("click", function () {
            utilities.checkAndDownload($(this).attr('data-file'), "pdf/",
                function (file, fileUrl) {
                    if ($("#progress-dialog").is(":visible")) {
                        $("#progress-dialog").popup("close");
                    }
                    if(device.platform === "iOS") {
                        window.open(fileUrl, '_blank', 'toolbarposition=top,location=no,closebuttoncaption=Close');
                    }else if(device.platform === "Android") {
                        window.plugins.fileOpener.open(fileUrl);
                    }
                },
                function (error) {
                   utilities.showCouldNotDownloadDialog(error);
                });
        });
    };

    /**
     * Hide the video player on the video page
     */
    this.onPageHideVideo = function () {
        // There should be only 1 video player at a time...
        var video = $('.videoplayer')[0];
        video.pause();
    };
};

var app = new App();
app.initialize();
