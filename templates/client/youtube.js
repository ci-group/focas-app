function template(locals) {
var jade_debug = [{ lineno: 1, filename: "templates/client/youtube.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (item, undefined) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "templates/client/youtube.jade" });
jade_debug.unshift({ lineno: 1, filename: "templates/client/youtube.jade" });
buf.push("\n<iframe id=\"ytplayer\" type=\"text/html\"" + (jade.attr("src", item.url+"?autoplay=1", true, false)) + " frameborder=\"0\" allowfullscreen=\"allowfullscreen\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</iframe>");
jade_debug.shift();
jade_debug.shift();}.call(this,"item" in locals_for_with?locals_for_with.item:typeof item!=="undefined"?item:undefined,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "iframe(id=\"ytplayer\", type=\"text/html\", src=item.url+\"?autoplay=1\", frameborder=\"0\", allowfullscreen)\n");
}
}