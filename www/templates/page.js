function template(locals) {
var jade_debug = [{ lineno: 1, filename: "www/templates//page.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (pages, undefined, Home) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 1, filename: "www/templates//page.jade" });
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var page = $$obj[$index];

jade_debug.unshift({ lineno: 1, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 2, filename: "www/templates//page.jade" });
buf.push("\n<div data-role=\"page\" data-theme=\"a\"" + (jade.attr("id", page.id, true, false)) + (jade.attr("data-title", page.name, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"header\" data-id=\"header\" data-position=\"fixed\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "www/templates//page.jade" });
buf.push("<a href=\"#main-page\" data-role=\"button\" data-corners=\"false\" data-iconpos=\"notext\" data-theme=\"a\" data-inline=\"true\" data-icon=\"home\" title=\"Home\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "www/templates//page.jade" });
buf.push("<span class=\"ui-btn-text\">" + (jade.escape(null == (jade_interp = Home) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "www/templates//page.jade" });
buf.push("<span class=\"ui-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "www/templates//page.jade" });
buf.push("<a href=\"#about\" data-role=\"link\" class=\"ui-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("About");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"header\" role=\"banner\"" + (jade.cls(['header',page.id], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "www/templates//page.jade" });
buf.push("\n    <h1>" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"content\" role=\"main\" class=\"main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-grid-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "www/templates//page.jade" });
buf.push("\n        <div class=\"ui-text ui-column-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "www/templates//page.jade" });
buf.push("\n          <div class=\"ui-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "www/templates//page.jade" });
buf.push(null == (jade_interp = page.description) ? "" : jade_interp);
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "www/templates//page.jade" });
buf.push("\n        <div class=\"ui-grid-c\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 19, filename: "www/templates//page.jade" });
buf.push("\n          <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "www/templates//page.jade" });
buf.push("\n            <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "www/templates//page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 19, filename: "www/templates//page.jade" });
buf.push("\n          <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "www/templates//page.jade" });
buf.push("\n            <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "www/templates//page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"footer\" data-id=\"footer\" data-position=\"fixed\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-grid-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-a ui-alt-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "www/templates//page.jade" });
buf.push("\n        <input type=\"search\" name=\"search\" id=\"search-basic\" value=\"\" placeholder=\"Search...\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var page = $$obj[$index];

jade_debug.unshift({ lineno: 1, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 2, filename: "www/templates//page.jade" });
buf.push("\n<div data-role=\"page\" data-theme=\"a\"" + (jade.attr("id", page.id, true, false)) + (jade.attr("data-title", page.name, true, false)) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"header\" data-id=\"header\" data-position=\"fixed\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "www/templates//page.jade" });
buf.push("<a href=\"#main-page\" data-role=\"button\" data-corners=\"false\" data-iconpos=\"notext\" data-theme=\"a\" data-inline=\"true\" data-icon=\"home\" title=\"Home\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "www/templates//page.jade" });
buf.push("<span class=\"ui-btn-text\">" + (jade.escape(null == (jade_interp = Home) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "www/templates//page.jade" });
buf.push("<span class=\"ui-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "www/templates//page.jade" });
buf.push("<a href=\"#about\" data-role=\"link\" class=\"ui-link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 7, filename: jade_debug[0].filename });
buf.push("About");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"header\" role=\"banner\"" + (jade.cls(['header',page.id], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "www/templates//page.jade" });
buf.push("\n    <h1>" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"content\" role=\"main\" class=\"main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-grid-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "www/templates//page.jade" });
buf.push("\n        <div class=\"ui-text ui-column-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "www/templates//page.jade" });
buf.push("\n          <div class=\"ui-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "www/templates//page.jade" });
buf.push(null == (jade_interp = page.description) ? "" : jade_interp);
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 17, filename: "www/templates//page.jade" });
buf.push("\n        <div class=\"ui-grid-c\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 19, filename: "www/templates//page.jade" });
buf.push("\n          <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "www/templates//page.jade" });
buf.push("\n            <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "www/templates//page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 18, filename: "www/templates//page.jade" });
jade_debug.unshift({ lineno: 19, filename: "www/templates//page.jade" });
buf.push("\n          <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 20, filename: "www/templates//page.jade" });
buf.push("\n            <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "www/templates//page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n          </div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n        </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 22, filename: "www/templates//page.jade" });
buf.push("\n  <div data-role=\"footer\" data-id=\"footer\" data-position=\"fixed\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 23, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-grid-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "www/templates//page.jade" });
buf.push("\n      <div class=\"ui-block-a ui-alt-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "www/templates//page.jade" });
buf.push("\n        <input type=\"search\" name=\"search\" id=\"search-basic\" value=\"\" placeholder=\"Search...\"/>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "www/templates//page.jade" });
buf.push("\n    <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();}.call(this,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"Home" in locals_for_with?locals_for_with.Home:typeof Home!=="undefined"?Home:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "for page in pages\n    div(data-role=\"page\", data-theme=\"a\", id=page.id, data-title=page.name)\n        div(data-role=\"header\", data-id=\"header\",data-position=\"fixed\", data-theme=\"a\")\n            a(href=\"#main-page\", data-role=\"button\", data-corners=\"false\", data-iconpos=\"notext\", data-theme=\"a\", data-inline=\"true\", data-icon=\"home\", title=\"Home\", class=\"ui-nodisc-icon\")\n                span.ui-btn-text= Home\n            span.ui-title\n            a(href=\"#about\", data-role=\"link\", class=\"ui-link\") About\n        div.header(data-role=\"header\" role=\"banner\" class=page.id)\n            h1= page.name\n        div.main(data-role=\"content\" role=\"main\")\n            div.ui-grid-a\n                div.ui-block-a\n                    div.ui-text.ui-column-left\n                        div.ui-body\n                            !=page.description\n                div.ui-block-b\n                    div.ui-grid-c\n                        for item, index in page.items\n                            div(class=\"item \"+item.type, data-file=item.url data-id=item.id)\n                                h3= item.title\n                                span= item.author + \" | \" + item.year\n        div(data-role=\"footer\", data-id=\"footer\", data-position=\"fixed\", data-theme=\"a\")\n            div.ui-grid-a\n                div(class=\"ui-block-a ui-alt-icon\")\n                    input(type=\"search\", name=\"search\", id=\"search-basic\", value=\"\", placeholder=\"Search...\")\n            div.ui-block-b\n");
}
}