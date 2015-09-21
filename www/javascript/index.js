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
/*global  $, utilities, template, Fuse, device, cordova, lunr */
var App = function () {
    // Application Constructor
    this.initialize = function () {
        App.prototype.content = [];
        App.prototype.items = null;
        App.prototype.serverUrl = "";

        /**
         * This url is used to download content from
         */
        this.serverUrl = "http://www.focas.eu/app/";

        var self = this;
        $.ajaxSetup({async : false});
        $.getJSON("content.json", function (data) {
            self.content = data;

            $.each(data.pages,function (id, page) {
                if (self.items === null) {
                    self.items = page.items;
                } else {
                    self.items = self.items.concat(page.items);
                }
            });

            // Initialise search index
            self.index = lunr(function () {
                this.field('title', {boost: 10});
                this.field('tags', {boost: 5});
                this.field('description');
                this.ref('id');
            });

            // Add all the items to the index
            $.each(app.items, function(idx, item) {
                var t = item;
                t.id = idx;
                self.index.add(t);
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
        $(document).on("pageshow", this.onPageShow);
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

        $(document).on("click", ".header-search-button", function() {
            if($(".ui-page-active .ui-header .ui-input-search").is(":visible")){
                $(".ui-page-active .ui-header .ui-input-search").fadeOut("slow");
            }else{
                $(".ui-page-active .ui-header .ui-input-search").css("display","inline-block").fadeIn("slow", function() {
                    $(".ui-page-active .ui-header .ui-input-search .search-field").focus();
                });
            }
        });

        $(document).on("click", ".item-switcher", function() {
            var id = $(this).attr("data-id");
            if ($("#description-"+id).is(":visible")){
                $(".ui-page-active .description-active").removeClass("description-active").hide();
                $(".ui-page-active .item-switcher.item-active").removeClass("item-active");
                $(".ui-page-active .page-description").show().addClass("description-active");
            } else {
                $(".ui-page-active .description-active").removeClass("description-active").hide();
                $(".ui-page-active .item-switcher.item-active").removeClass("item-active");
                $("#description-"+id).show().addClass("description-active");
                $("#button-"+id).addClass("item-active");
            }
        });

        $(".search").off().on("submit", function (event) {

            event.preventDefault();

            $(".ui-page-active .ui-header .ui-input-search").fadeOut();

            var searchTerm = this.search.value;
            var searchResults = app.index.search(searchTerm);

            var result = searchResults.map(function(item){
                return app.items[item.ref];
            });

            $.ajaxSetup({async : false});
            $.getScript("templates/searchResults.js", function () {
                var text = template({"items" : result});
                $("#search-overview div#results").html(text);
                $(".search input").each(function() {
                    this.value = searchTerm;
                });

                $.mobile.pageContainer.pagecontainer("change", "#search-page");
            });
            $.ajaxSetup({async : true});
        });
    };

    this.bindDownloadOnClick = function () {
        $(document).on("click", ".video-opener", function () {
            var type = $(this).attr('data-type');
            var poster = $(this).attr('data-poster');
            if(device.platform === "iOS"  && type === "local") {
                var file = $(this).attr('data-file');
                var fileUrl = "content/video/"+file;

                utilities.embedVideo(file, fileUrl, poster);
                $.mobile.pageContainer.pagecontainer("change", "#video");
            } else {
                utilities.checkAndDownload($(this).attr('data-file'), "video/",
                    function (file, fileUrl) {
                        utilities.embedVideo(file, fileUrl, poster);
                        $.mobile.pageContainer.pagecontainer("change", "#video");
                    },
                    function (error) {
                        utilities.showCouldNotDownloadDialog(error);
                    });
            }
        });

        $(document).on("click", ".youtube-opener", function () {
            var fileUrl = $(this).attr('data-file');
            utilities.embedYoutubeVideo(fileUrl);
            $.mobile.pageContainer.pagecontainer("change", "#video");
        });

        $(document).on("click", ".article-opener", function () {
            app.downloadFile($(this).attr('data-file'), "pdf/");
        });
        $(document).on("click", ".presentation-opener", function () {
            app.downloadFile($(this).attr('data-file'), "presentation/");
        });

        $(document).on("click", ".link-opener", function () {
            var url = $(this).attr('data-file');
            if(device.platform === "iOS") {
                window.open(url, '_system');
            }else if(device.platform === "Android") {
                window.plugins.fileOpener.open(url);
            }else if(device.platform === "browser") {
                window.open(url, '_blank');
            }
            $("#cannot-download-dialog").popup("close");
        });
    };

    this.downloadFile = function(file, remotedir) {
        utilities.checkAndDownload(file, remotedir,
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
    };

    this.getRealContentHeight = function () {
        var headers = $(".ui-page-active div[data-role='header']:visible");
        var footer = $(".ui-page-active div[data-role='footer']:visible");
        var content = $.mobile.activePage.find(".ui-page-active  div[data-role='content']:visible");
        var viewport_height = $(window).height();

        var headerHeights = 0;
        var extra_content_height = 0;
        $.each(headers, function(index, header) {
            headerHeights += $(header).outerHeight();
            if($(header).hasClass("ui-header-fixed")) {
                extra_content_height += 1;
            }
        });

        var content_height = viewport_height - headerHeights - footer.outerHeight();
        content_height += extra_content_height;
        if(footer.hasClass("ui-footer-fixed")) {
            content_height += 1;
        }
        if((content.outerHeight() - headerHeights - footer.outerHeight()) <= viewport_height) {
            content_height -= (content.outerHeight() - content.height());
        }
        return content_height;
    };


    /**
     * Hide the video player on the video page
     */
    this.onPageHideVideo = function () {
        // There should be only 1 video player at a time...
        var video = $('.videoplayer')[0];

        if(typeof(video) !== 'undefined'){
            video.pause();
        }

        $("#video-embed").html("");
    };

    this.onPageShow = function () {
        var activePageId = $.mobile.activePage.attr("id");
        var activePageMain = $("#"+activePageId+" .ui-main");
        if(!activePageMain.attr("style")) {
            activePageMain.height(app.getRealContentHeight());
        }
        if(activePageId === "main-page"){
            $.mobile.activePage.find(".ui-header a[data-rel='back']").css("display","none");
        }else{
            $.mobile.activePage.find(".ui-header a[data-rel='back']").css("display","inline-block");
        }
    };
};

var app = new App();
app.initialize();
