function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/item.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/item.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/item.jade" });
buf.push("\n<div" + (jade.attr("id", item.id, true, false)) + (jade.attr("data-file", item.url, true, false)) + (jade.cls([item.type+' item ui-block-a'], [true])) + ">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "templates/client/item.jade" });
buf.push("\n  <h3>" + (jade.escape(null == (jade_interp = item.name) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(id=item.id, class=item.type+' item ui-block-a' data-file=item.url)\n    h3= item.name\n");
}
}