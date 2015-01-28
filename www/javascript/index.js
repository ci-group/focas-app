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
/*global  $, utilities, template, Fuse*/
var App = function () {
    // Application Constructor
    this.initialize = function () {
        App.prototype.content = [];
        App.prototype.items = null;
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
        $(document).on("pagecreate", this.onPageCreate);
        $(document).on("pagecreate", this.activateHeaderAndFooter);
        $(document).on("pagebeforehide", "#video", this.onPageHideVideo);
        $(document).on('pageshow', function () {
            $('.ui-page-active').height(app.getRealContentHeight());
        });
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
        
        $("#search").off().on("submit", function (event) {
            
//            event.preventDefault();
            
            var options = {
                keys: ['author', 'title'],   // keys to search in
//                id: 'name'                   // return a list of identifiers only
            };
            
            
            var searchTerm = this.search.value;
            var f = new Fuse(app.items, options);
            var result = f.search(searchTerm);
            
            $.ajaxSetup({async : false});
            $.getScript("templates/searchResults.js", function () {
                var text = template({"items" : result});
                $("#search-overview div#results").html(text).enhanceWithin();
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
                        console.log("Error occured during download: " + error);
                        if ($("#progress-dialog").is(":visible")) {
                            $("#progress-dialog").on("popupafterclose", function () {
                                $("#cannot-download-dialog").popup("open");
                            });
                            $("#progress-dialog").popup("close");
                        } else {
                            $("#cannot-download-dialog").popup("open");
                        }
                    });
            });

        $(".article").off().on("click", function () {
            utilities.checkAndDownload($(this).attr('data-file'), "pdf/",
                function (file, fileUrl) {
                    $('pdf-object').attr('data', fileUrl);
                    $.mobile.pageContainer.pagecontainer("change", "#pdf");
                },
                function (error) {
                    console.log("Error occured during download: " + error);
                    $("#cannot-download-dialog").popup("open");
                    if ($("#progress-dialog").is(":visible")) {
                        $("#progress-dialog").on("popupafterclose", function () {
                            $("#cannot-download-dialog").popup("open");
                        });
                        $("#progress-dialog").popup("close");
                    } else {
                        $("#cannot-download-dialog").popup("open");
                    }
                });
        });
    };
    
    this.getRealContentHeight = function () {
        var header = $("div[data-role='header']:visible");
        var footer = $("div[data-role='footer']:visible");
        var content = $.mobile.activePage.find("div[data-role='content']:visible:visible");
        var viewport_height = $(window).height();

        var content_height = viewport_height - header.outerHeight() - footer.outerHeight();
        if (header.hasClass("ui-header-fixed")) {
            content_height += 1;
        }
        if (footer.hasClass("ui-footer-fixed")) {
            content_height += 1;
        }
        if ((content.outerHeight() - header.outerHeight() - footer.outerHeight()) <= viewport_height) {
            content_height -= (content.outerHeight() - content.height());
        }
        return content_height;
    };


    this.onPageCreate = function () {

    };

    /**
     * Hide the video player on the video page
     */
    this.onPageHideVideo = function () {
        // There should be only 1 video player at a time...
        var video = $('.videoplayer')[0];
        video.pause();
    };

    /**
     * This url is used to download content from
     */
    var serverUrl = "http://mac360.few.vu.nl/focas/download/";
};

var app = new App();
app.initialize();
