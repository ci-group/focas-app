function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/navigation.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (categories, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/navigation.jade" });
buf.push("\n<div class=\"ui-column-right\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/client/navigation.jade" });
buf.push("\n  <ul data-role=\"listview\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
// iterate categories
;(function(){
  var $$obj = categories;
  if ('number' == typeof $$obj.length) {

    for (var index = 0, $$l = $$obj.length; index < $$l; index++) {
      var category = $$obj[index];

jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 4, filename: "templates/client/navigation.jade" });
buf.push("\n    <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "templates/client/navigation.jade" });
buf.push("<a" + (jade.attr("href", "#"+category.id, true, false)) + " data-role=\"link\"" + (jade.cls(["color-"+index], [true])) + ">" + (jade.escape(null == (jade_interp = category.name) ? "" : jade_interp)));
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
      $$l++;      var category = $$obj[index];

jade_debug.unshift({ lineno: 3, filename: "templates/client/navigation.jade" });
jade_debug.unshift({ lineno: 4, filename: "templates/client/navigation.jade" });
buf.push("\n    <li>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "templates/client/navigation.jade" });
buf.push("<a" + (jade.attr("href", "#"+category.id, true, false)) + " data-role=\"link\"" + (jade.cls(["color-"+index], [true])) + ">" + (jade.escape(null == (jade_interp = category.name) ? "" : jade_interp)));
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
jade_debug.shift();}.call(this,"categories" in locals_for_with?locals_for_with.categories:typeof categories!=="undefined"?categories:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div.ui-column-right\n    ul(data-role=\"listview\")\n        for category, index in categories\n            li\n                a(class=\"color-\"+index, href=\"#\"+category.id, data-role=\"link\")= category.name\n");
}
}