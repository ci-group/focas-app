function template(locals) {
var jade_debug = [{ lineno: 1, filename: "www/templates//downloadDialog.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, Downloading) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "www/templates//downloadDialog.jade" });
jade_debug.unshift({ lineno: 1, filename: "www/templates//downloadDialog.jade" });
buf.push("\n<div data-role=\"popup\" id=\"progress-dialog\" data-overlay-theme=\"a\" data-theme=\"a\" data-dismissible=\"false\" class=\"dialog-popup ui-corner-all\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "www/templates//downloadDialog.jade" });
buf.push("\n  <div data-role=\"header\" data-theme=\"a\" class=\"ui-corner-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "www/templates//downloadDialog.jade" });
buf.push("\n    <h1>" + (jade.escape(null == (jade_interp = Downloading) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "www/templates//downloadDialog.jade" });
buf.push("\n  <div data-role=\"content\" data-theme=\"a\" id=\"progress-bar\" class=\"ui-corner-bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"Downloading" in locals_for_with?locals_for_with.Downloading:typeof Downloading!=="undefined"?Downloading:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(data-role=\"popup\", id=\"progress-dialog\", data-overlay-theme=\"a\", data-theme=\"a\", data-dismissible=\"false\", class=\"dialog-popup ui-corner-all\")\n    div(data-role=\"header\", data-theme=\"a\", class=\"ui-corner-top\")\n        h1=Downloading\n    div(data-role=\"content\", data-theme=\"a\", id=\"progress-bar\", class=\"ui-corner-bottom\")\n");
}
}