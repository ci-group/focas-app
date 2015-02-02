function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/searchResults.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, items) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/searchResults.jade" });
buf.push("\n<h2>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 1, filename: jade_debug[0].filename });
buf.push("Results");
jade_debug.shift();
jade_debug.shift();
buf.push("</h2>");
jade_debug.shift();
jade_debug.unshift({ lineno: 2, filename: "templates/client/searchResults.jade" });
// iterate items
;(function(){
  var $$obj = items;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var item = $$obj[index];

jade_debug.unshift({ lineno: 2, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 3, filename: "templates/client/searchResults.jade" });
buf.push("\n<div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "templates/client/searchResults.jade" });
buf.push("\n  <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/client/searchResults.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var item = $$obj[index];

jade_debug.unshift({ lineno: 2, filename: "templates/client/searchResults.jade" });
jade_debug.unshift({ lineno: 3, filename: "templates/client/searchResults.jade" });
buf.push("\n<div" + (jade.attr("data-file", item.url, true, false)) + (jade.attr("data-id", item.id, true, false)) + (jade.cls(["item "+item.type], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 4, filename: "templates/client/searchResults.jade" });
buf.push("\n  <h3>" + (jade.escape(null == (jade_interp = item.title) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 5, filename: "templates/client/searchResults.jade" });
buf.push("<span>" + (jade.escape(null == (jade_interp = item.author + " | " + item.year) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</span>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"items" in locals_for_with?locals_for_with.items:typeof items!=="undefined"?items:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "h2 Results\nfor item, index in items\n    div(class=\"item \"+item.type, data-file=item.url data-id=item.id)\n        h3= item.title\n        span= item.author + \" | \" + item.year\n");
}
}