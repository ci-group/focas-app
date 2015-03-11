function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/searchResults.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (index, undefined, items) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/includes/mixins/description.jade" });
jade_mixins["description"] = function(item, search){
var block = (this && this.block), attributes = (this && this.attributes) || {};
jade_debug.unshift({ lineno: 2, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 2, filename: "templates/includes/mixins/description.jade" });
var active = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "templates/includes/mixins/description.jade" });
var style = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "templates/includes/mixins/description.jade" });
var searchPrefix = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/includes/mixins/description.jade" });
if ( search)
{
jade_debug.unshift({ lineno: 6, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 6, filename: "templates/includes/mixins/description.jade" });
searchPrefix = "search-"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "templates/includes/mixins/description.jade" });
if ( search && index === 0)
{
jade_debug.unshift({ lineno: 8, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 8, filename: "templates/includes/mixins/description.jade" });
active = "description-active"
jade_debug.shift();
jade_debug.unshift({ lineno: 9, filename: "templates/includes/mixins/description.jade" });
style = "display: block;"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "templates/includes/mixins/description.jade" });
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.attr("id", "description-"+searchPrefix+item.name, true, false)) + (jade.attr("style", style, true, false)) + (jade.cls(["item-description "+active], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 11, filename: "templates/includes/mixins/description.jade" });
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<h2>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "templates/includes/mixins/description.jade" });
if ( item.image)
{
jade_debug.unshift({ lineno: 13, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 13, filename: "templates/includes/mixins/description.jade" });
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div class=\"description-image\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 14, filename: "templates/includes/mixins/description.jade" });
buf.push("<img" + (jade.attr("src", "content/images/"+item.image, true, false)) + "/>");
jade_debug.shift();
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 15, filename: "templates/includes/mixins/description.jade" });
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<p>" + (null == (jade_interp = item.description) ? "" : jade_interp));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.unshift({ lineno: 16, filename: "templates/includes/mixins/description.jade" });
var text = "Open"
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/includes/mixins/description.jade" });
var file = item.file
jade_debug.shift();
jade_debug.unshift({ lineno: 18, filename: "templates/includes/mixins/description.jade" });
if ( item.type === "article" || item.type === "presentation")
{
jade_debug.unshift({ lineno: 19, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 19, filename: "templates/includes/mixins/description.jade" });
if ( item.preview)
{
jade_debug.unshift({ lineno: 20, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 20, filename: "templates/includes/mixins/description.jade" });
text = "Preview"
jade_debug.shift();
jade_debug.unshift({ lineno: 21, filename: "templates/includes/mixins/description.jade" });
file = item.preview
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
}
else if ( item.type === "video")
{
jade_debug.unshift({ lineno: 23, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 23, filename: "templates/includes/mixins/description.jade" });
text = "View"
jade_debug.shift();
jade_debug.shift();
}
else if ( item.type === "link")
{
jade_debug.unshift({ lineno: 25, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 25, filename: "templates/includes/mixins/description.jade" });
text = "Open link"
jade_debug.shift();
jade_debug.unshift({ lineno: 26, filename: "templates/includes/mixins/description.jade" });
file = item.url
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 27, filename: "templates/includes/mixins/description.jade" });
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.attr("data-id", searchPrefix+item.name, true, false)) + (jade.cls(["item-container description-item icon-right "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 28, filename: "templates/includes/mixins/description.jade" });
buf.push("\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.attr("data-file", file, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + (jade.cls(["item "+item.type+"-opener"], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 29, filename: "templates/includes/mixins/description.jade" });
buf.push("\n      ");
buf.push.apply(buf, jade_indent);
buf.push("<h3>" + (jade.escape(null == (jade_interp = text) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    ");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 30, filename: "templates/includes/mixins/description.jade" });
if ( item.type === "article" && item.url)
{
jade_debug.unshift({ lineno: 31, filename: "templates/includes/mixins/description.jade" });
jade_debug.unshift({ lineno: 31, filename: "templates/includes/mixins/description.jade" });
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.attr("data-id", searchPrefix+item.name, true, false)) + " class=\"item-container description-item icon-right link\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 32, filename: "templates/includes/mixins/description.jade" });
buf.push("\n    ");
buf.push.apply(buf, jade_indent);
buf.push("<div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.name, true, false)) + (jade.attr("data-poster", item.image, true, false)) + " class=\"item link-opener\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: "templates/includes/mixins/description.jade" });
buf.push("\n      ");
buf.push.apply(buf, jade_indent);
buf.push("<h3>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 33, filename: jade_debug[0].filename });
buf.push("Open Link");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    ");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  ");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.shift();
buf.push("\n");
buf.push.apply(buf, jade_indent);
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
};
jade_debug.shift();
jade_debug.shift();
jade_debug.unshift({ lineno: 3, filename: "templates/client/searchResults.jade" });
buf.push("\n<div class=\"ui-block-a\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "templates/client/searchResults.jade" });
buf.push("\n  <div class=\"ui-text ui-column-left\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "templates/client/searchResults.jade" });
buf.push("\n    <div class=\"ui-body\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: "templates/client/searchResults.jade" });
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 6, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 7, filename: "templates/client/searchResults.jade" });
jade_indent.push('      ');
jade_mixins["description"](item,"-search");
jade_indent.pop();
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 6, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 7, filename: "templates/client/searchResults.jade" });
jade_indent.push('      ');
jade_mixins["description"](item,"-search");
jade_indent.pop();
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 8, filename: "templates/client/searchResults.jade" });
buf.push("\n<div class=\"ui-block-b\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 9, filename: "templates/client/searchResults.jade" });
buf.push("\n  <div class=\"ui-grid-c\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 10, filename: "templates/client/searchResults.jade" });
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 10, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 11, filename: "templates/client/searchResults.jade" });
var active = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "templates/client/searchResults.jade" });
if ( index === 0)
{
jade_debug.unshift({ lineno: 13, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 13, filename: "templates/client/searchResults.jade" });
active = "item-active"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "templates/client/searchResults.jade" });
buf.push("\n  <div" + (jade.attr("data-id", "search-"+item.name, true, false)) + (jade.attr("id", "button-search-"+item.name, true, false)) + (jade.cls(["item-container item-switcher icon-right "+item.type+" "+active], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "templates/client/searchResults.jade" });
buf.push("\n    <div class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/searchResults.jade" });
buf.push("\n      <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/searchResults.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 10, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 11, filename: "templates/client/searchResults.jade" });
var active = ""
jade_debug.shift();
jade_debug.unshift({ lineno: 12, filename: "templates/client/searchResults.jade" });
if ( index === 0)
{
jade_debug.unshift({ lineno: 13, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 13, filename: "templates/client/searchResults.jade" });
active = "item-active"
jade_debug.shift();
jade_debug.shift();
}
jade_debug.shift();
jade_debug.unshift({ lineno: 14, filename: "templates/client/searchResults.jade" });
buf.push("\n  <div" + (jade.attr("data-id", "search-"+item.name, true, false)) + (jade.attr("id", "button-search-"+item.name, true, false)) + (jade.cls(["item-container item-switcher icon-right "+item.type+" "+active], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 15, filename: "templates/client/searchResults.jade" });
buf.push("\n    <div class=\"item\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 16, filename: "templates/client/searchResults.jade" });
buf.push("\n      <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 17, filename: "templates/client/searchResults.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n    </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"index" in locals_for_with?locals_for_with.index:typeof index!=="undefined"?index:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "include ../includes/mixins/description.jade\n\ndiv.ui-block-a\n    div.ui-text.ui-column-left\n        div.ui-body\n            for item, index in items\n                +description(item,\"-search\")\ndiv(class=\"ui-block-b\")\n    div.ui-grid-c\n    for item, index in items\n        - var active = \"\"\n        if index === 0\n            - active = \"item-active\"\n        div(class=\"item-container item-switcher icon-right \"+item.type+\" \"+active, data-id=\"search-\"+item.name, id=\"button-search-\"+item.name)\n            div(class=\"item\")\n                h3= item.title\n                span= item.author + \" | \" + item.year\n");
}
}