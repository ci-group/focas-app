function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/navigation.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, pages) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/navigation.jade" });
buf.push("\n<div class=\"ui-column-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/client/navigation.jade" });
buf.push("\n  <ul data-role=\"listview\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
// iterate pages
;(function(){
  var $$obj = pages;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var page = $$obj[index];

jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 4, filename: "templates/client/navigation.jade" });
buf.push("\n    <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "templates/client/navigation.jade" });
buf.push("<a" + (jade.attr("href", "#"+page.id, true, false)) + " data-role=\"link\"" + (jade.cls(["color-"+page.color], [true])) + ">" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  } else {
    var $$l = 0;
    for (var index in $$obj) {
      $$l++;      var page = $$obj[index];

jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 4, filename: "templates/client/navigation.jade" });
buf.push("\n    <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "templates/client/navigation.jade" });
buf.push("<a" + (jade.attr("href", "#"+page.id, true, false)) + " data-role=\"link\"" + (jade.cls(["color-"+page.color], [true])) + ">" + (jade.escape(null == (jade_interp = page.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</li>");
jade_debug.shift();
jade_debug.shift();
    }

  }
}).call(this);

jade_debug.shift();
jade_debug.shift();
buf.push("\n  </ul>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"pages" in locals_for_with?locals_for_with.pages:typeof pages!=="undefined"?pages:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div.ui-column-right\n    ul(data-role=\"listview\")\n        for page, index in pages\n            li\n                a(class=\"color-\"+page.color, href=\"#\"+page.id, data-role=\"link\")= page.name\n");
}
}