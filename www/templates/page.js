function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/page.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (pages, undefined, Search) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/page.jade" });
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var page = $$obj[$index];

jade_debug.unshift({ lineno: 1, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 2, filename: "templates/client/page.jade" });
buf.push("\n<div data-role=\"page\" data-theme=\"a\"" + (jade.attr("id", page.id, true, false)) + (jade.attr("data-title", page.name, true, false)) + (jade.cls(["background-"+page.color], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 0, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/header.jade" });
buf.push("\n  <div data-role=\"header\" data-id=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/includes/header.jade" });
buf.push("\n    <div data-role=\"controlgroup\" data-type=\"horizontal\" class=\"ui-mini ui-btn-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "templates/includes/header.jade" });
buf.push("<a href=\"\" data-role=\"button\" data-corners=\"false\" data-icon=\"back\" data-rel=\"back\" data-direction=\"reverse\" data-mini=\"true\" title=\"Back\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#main-page\" data-role=\"button\" data-corners=\"false\" data-icon=\"home\" title=\"Home\" data-mini=\"true\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Home");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#about\" data-role=\"button\" data-corners=\"false\" data-icon=\"info\" data-mini=\"true\" title=\"About\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("About");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#glossary\" data-role=\"button\" data-transition=\"slideup\" data-rel=\"popup\" data-corners=\"false\" data-icon=\"tag\" data-mini=\"true\" title=\"Glossary\" data-position-to=\".ui-page-active .ui-footer\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Glossary");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "templates/includes/header.jade" });
buf.push("<span class=\"ui-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "templates/includes/header.jade" });
buf.push("\n    <div data-role=\"controlgroup\" data-type=\"horizontal\" class=\"ui-mini ui-btn-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "templates/includes/header.jade" });
buf.push("\n      <form name=\"search-form\" method=\"get\" data-ajax=\"false\" class=\"search\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "templates/includes/header.jade" });
buf.push("\n        <input type=\"search\" name=\"search\" id=\"search-search\" value=\"\" placeholder=\"Search...\" data-wrapper-class=\"controlgroup-textinput ui-btn\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "templates/includes/header.jade" });
buf.push("<a href=\"\" data-corners=\"false\" data-role=\"button\" data-iconpos=\"notext\" data-icon=\"search\" title=\"Search\" class=\"ui-nodisc-icon header-search-button\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "templates/includes/header.jade" });
buf.push("<span class=\"ui-btn-text\">" + (jade.escape(null == (jade_interp = Search) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </form>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/client/page.jade" });
buf.push("\n  <div data-role=\"header\" role=\"banner\"" + (jade.cls(['header',page.id+" color-"+page.color], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "templates/client/page.jade" });
buf.push("\n    <h1>" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "templates/client/page.jade" });
buf.push("\n  <div data-role=\"content\" role=\"main\" class=\"ui-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "templates/client/page.jade" });
buf.push("\n    <div class=\"ui-grid-e\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "templates/client/page.jade" });
buf.push("\n      <div class=\"ui-block-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "templates/client/page.jade" });
buf.push("\n        <div class=\"ui-text ui-column-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "templates/client/page.jade" });
buf.push("\n          <div class=\"ui-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "templates/client/page.jade" });
buf.push("\n            <div class=\"page-description description-active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "templates/client/page.jade" });
buf.push(null == (jade_interp = page.description) ? "" : jade_interp);
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.attr("id", "description-"+item.name, true, false)) + " class=\"item-description\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/page.jade" });
buf.push("\n              <h2>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/page.jade" });
if ( item.image)
{
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
buf.push("\n              <div class=\"description-image\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "templates/client/page.jade" });
buf.push("<img" + (jade.attr("src", "content/images/"+item.image, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "templates/client/page.jade" });
buf.push("\n              <p>" + (jade.escape(null == (jade_interp = item.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "templates/client/page.jade" });
buf.push("\n              <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + (jade.cls(["item "+item.type+"-opener"], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "templates/client/page.jade" });
buf.push("\n                <h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Open");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n              </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.attr("id", "description-"+item.name, true, false)) + " class=\"item-description\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/page.jade" });
buf.push("\n              <h2>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/page.jade" });
if ( item.image)
{
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
buf.push("\n              <div class=\"description-image\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "templates/client/page.jade" });
buf.push("<img" + (jade.attr("src", "content/images/"+item.image, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "templates/client/page.jade" });
buf.push("\n              <p>" + (jade.escape(null == (jade_interp = item.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "templates/client/page.jade" });
buf.push("\n              <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + (jade.cls(["item "+item.type+"-opener"], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "templates/client/page.jade" });
buf.push("\n                <h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Open");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n              </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

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
jade_debug.unshift({ lineno: 23, filename: "templates/client/page.jade" });
buf.push("\n      <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "templates/client/page.jade" });
buf.push("\n        <div class=\"ui-grid-c\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 26, filename: "templates/client/page.jade" });
var featured = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "templates/client/page.jade" });
if ( item.featured)
{
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
featured = "featured"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "templates/client/page.jade" });
buf.push("\n          <div" + (jade.attr("data-id", item.name, true, false)) + (jade.attr("id", "button-"+item.name, true, false)) + (jade.cls(["item-container "+featured+" icon-right "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.cls(["item "+featured], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "templates/client/page.jade" });
buf.push("\n              <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "templates/client/page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
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

jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 26, filename: "templates/client/page.jade" });
var featured = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "templates/client/page.jade" });
if ( item.featured)
{
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
featured = "featured"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "templates/client/page.jade" });
buf.push("\n          <div" + (jade.attr("data-id", item.name, true, false)) + (jade.attr("id", "button-"+item.name, true, false)) + (jade.cls(["item-container "+featured+" icon-right "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.cls(["item "+featured], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "templates/client/page.jade" });
buf.push("\n              <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "templates/client/page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
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
jade_debug.unshift({ lineno: 0, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/footer.jade" });
buf.push("\n  <div data-role=\"footer\" data-id=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/includes/footer.jade" });
buf.push("\n    <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("FoCAS is a Future and Emerging Technologies Proactive Initiative, funded by the European Commission under FP7");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
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

jade_debug.unshift({ lineno: 1, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 2, filename: "templates/client/page.jade" });
buf.push("\n<div data-role=\"page\" data-theme=\"a\"" + (jade.attr("id", page.id, true, false)) + (jade.attr("data-title", page.name, true, false)) + (jade.cls(["background-"+page.color], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 0, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/header.jade" });
buf.push("\n  <div data-role=\"header\" data-id=\"header\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/includes/header.jade" });
buf.push("\n    <div data-role=\"controlgroup\" data-type=\"horizontal\" class=\"ui-mini ui-btn-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "templates/includes/header.jade" });
buf.push("<a href=\"\" data-role=\"button\" data-corners=\"false\" data-icon=\"back\" data-rel=\"back\" data-direction=\"reverse\" data-mini=\"true\" title=\"Back\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Back");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#main-page\" data-role=\"button\" data-corners=\"false\" data-icon=\"home\" title=\"Home\" data-mini=\"true\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: jade_debug[0].filename });
buf.push("Home");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#about\" data-role=\"button\" data-corners=\"false\" data-icon=\"info\" data-mini=\"true\" title=\"About\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("About");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "templates/includes/header.jade" });
buf.push("<a href=\"#glossary\" data-role=\"button\" data-transition=\"slideup\" data-rel=\"popup\" data-corners=\"false\" data-icon=\"tag\" data-mini=\"true\" title=\"Glossary\" data-position-to=\".ui-page-active .ui-footer\" class=\"ui-nodisc-icon\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("Glossary");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "templates/includes/header.jade" });
buf.push("<span class=\"ui-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "templates/includes/header.jade" });
buf.push("\n    <div data-role=\"controlgroup\" data-type=\"horizontal\" class=\"ui-mini ui-btn-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "templates/includes/header.jade" });
buf.push("\n      <form name=\"search-form\" method=\"get\" data-ajax=\"false\" class=\"search\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "templates/includes/header.jade" });
buf.push("\n        <input type=\"search\" name=\"search\" id=\"search-search\" value=\"\" placeholder=\"Search...\" data-wrapper-class=\"controlgroup-textinput ui-btn\"/>");
jade_debug.shift();
jade_debug.unshift({ lineno: 11, filename: "templates/includes/header.jade" });
buf.push("<a href=\"\" data-corners=\"false\" data-role=\"button\" data-iconpos=\"notext\" data-icon=\"search\" title=\"Search\" class=\"ui-nodisc-icon header-search-button\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "templates/includes/header.jade" });
buf.push("<span class=\"ui-btn-text\">" + (jade.escape(null == (jade_interp = Search) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n      </form>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/client/page.jade" });
buf.push("\n  <div data-role=\"header\" role=\"banner\"" + (jade.cls(['header',page.id+" color-"+page.color], [null,true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "templates/client/page.jade" });
buf.push("\n    <h1>" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "templates/client/page.jade" });
buf.push("\n  <div data-role=\"content\" role=\"main\" class=\"ui-main\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 8, filename: "templates/client/page.jade" });
buf.push("\n    <div class=\"ui-grid-e\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "templates/client/page.jade" });
buf.push("\n      <div class=\"ui-block-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 10, filename: "templates/client/page.jade" });
buf.push("\n        <div class=\"ui-text ui-column-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "templates/client/page.jade" });
buf.push("\n          <div class=\"ui-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 12, filename: "templates/client/page.jade" });
buf.push("\n            <div class=\"page-description description-active\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 13, filename: "templates/client/page.jade" });
buf.push(null == (jade_interp = page.description) ? "" : jade_interp);
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.attr("id", "description-"+item.name, true, false)) + " class=\"item-description\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/page.jade" });
buf.push("\n              <h2>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/page.jade" });
if ( item.image)
{
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
buf.push("\n              <div class=\"description-image\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "templates/client/page.jade" });
buf.push("<img" + (jade.attr("src", "content/images/"+item.image, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "templates/client/page.jade" });
buf.push("\n              <p>" + (jade.escape(null == (jade_interp = item.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "templates/client/page.jade" });
buf.push("\n              <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + (jade.cls(["item "+item.type+"-opener"], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "templates/client/page.jade" });
buf.push("\n                <h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Open");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n              </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 14, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 15, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.attr("id", "description-"+item.name, true, false)) + " class=\"item-description\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/page.jade" });
buf.push("\n              <h2>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/page.jade" });
if ( item.image)
{
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 18, filename: "templates/client/page.jade" });
buf.push("\n              <div class=\"description-image\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 19, filename: "templates/client/page.jade" });
buf.push("<img" + (jade.attr("src", "content/images/"+item.image, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 20, filename: "templates/client/page.jade" });
buf.push("\n              <p>" + (jade.escape(null == (jade_interp = item.description) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "templates/client/page.jade" });
buf.push("\n              <div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + (jade.cls(["item "+item.type+"-opener"], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: "templates/client/page.jade" });
buf.push("\n                <h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 22, filename: jade_debug[0].filename });
buf.push("Open");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n              </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

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
jade_debug.unshift({ lineno: 23, filename: "templates/client/page.jade" });
buf.push("\n      <div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 24, filename: "templates/client/page.jade" });
buf.push("\n        <div class=\"ui-grid-c\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
// iterate page.items
;(function(){
  var $$obj = page.items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 26, filename: "templates/client/page.jade" });
var featured = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "templates/client/page.jade" });
if ( item.featured)
{
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
featured = "featured"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "templates/client/page.jade" });
buf.push("\n          <div" + (jade.attr("data-id", item.name, true, false)) + (jade.attr("id", "button-"+item.name, true, false)) + (jade.cls(["item-container "+featured+" icon-right "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.cls(["item "+featured], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "templates/client/page.jade" });
buf.push("\n              <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "templates/client/page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
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

jade_debug.unshift({ lineno: 25, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 26, filename: "templates/client/page.jade" });
var featured = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "templates/client/page.jade" });
if ( item.featured)
{
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 28, filename: "templates/client/page.jade" });
featured = "featured"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 29, filename: "templates/client/page.jade" });
buf.push("\n          <div" + (jade.attr("data-id", item.name, true, false)) + (jade.attr("id", "button-"+item.name, true, false)) + (jade.cls(["item-container "+featured+" icon-right "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 30, filename: "templates/client/page.jade" });
buf.push("\n            <div" + (jade.cls(["item "+featured], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 31, filename: "templates/client/page.jade" });
buf.push("\n              <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 32, filename: "templates/client/page.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n            </div>");
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
jade_debug.unshift({ lineno: 0, filename: "templates/client/page.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/footer.jade" });
buf.push("\n  <div data-role=\"footer\" data-id=\"footer\" data-position=\"fixed\" data-tap-toggle=\"false\" data-theme=\"a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/includes/footer.jade" });
buf.push("\n    <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: jade_debug[0].filename });
buf.push("FoCAS is a Future and Emerging Technologies Proactive Initiative, funded by the European Commission under FP7");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();}.call(this,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"Search" in locals_for_with?locals_for_with.Search:typeof Search!=="undefined"?Search:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "for page in pages\n    div(class=\"background-\"+page.color data-role=\"page\", data-theme=\"a\", id=page.id, data-title=page.name)\n        include ../includes/header.jade\n\n        div.header(data-role=\"header\" role=\"banner\" class=page.id+\" color-\"+page.color)\n            h1= page.name\n        div(class=\"ui-main\" data-role=\"content\" role=\"main\")\n            div.ui-grid-e\n                div.ui-block-a\n                    div.ui-text.ui-column-left\n                        div.ui-body\n                            div.page-description.description-active\n                                !=page.description\n                            for item, index in page.items\n                                div(id=\"description-\"+item.name, class=\"item-description\")\n                                    h2= item.title\n                                    if item.image\n                                        div(class=\"description-image\")\n                                            img(src=\"content/images/\"+item.image)\n                                    p= item.description\n                                    div(class=\"item \"+item.type+\"-opener\", data-file=item.url data-id=item.name, data-poster=item.image)\n                                        h3 Open\n                div(class=\"ui-block-b\")\n                    div.ui-grid-c\n                        for item, index in page.items\n                            - var featured = \"\"\n                            if item.featured\n                                - featured = \"featured\"\n                            div(class=\"item-container \"+featured+\" icon-right \"+item.type, data-id=item.name, id=\"button-\"+item.name)\n                                div(class=\"item \"+featured)\n                                    h3= item.title\n                                    span= item.author + \" | \" + item.year\n        include ../includes/footer.jade\n");
}
}