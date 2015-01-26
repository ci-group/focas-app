function template(locals) {
var jade_debug = [{ lineno: 1, filename: "www/templates//couldNotDownloadDialog.jade" }];
try {
var buf = [];
var jade_mixins = {};
var jade_interp;
;var locals_for_with = (locals || {});(function (undefined, Ok) {
var jade_indent = [];
jade_debug.unshift({ lineno: 0, filename: "www/templates//couldNotDownloadDialog.jade" });
jade_debug.unshift({ lineno: 1, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n<div data-role=\"popup\" id=\"cannotDownloadDialog\" data-overlay-theme=\"e\" data-theme=\"e\" data-dismissible=\"false\" class=\"progress-bar ui-corner-all\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 2, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n  <div data-role=\"header\" data-theme=\"e\" class=\"ui-corner-top\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n    <h1>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 3, filename: jade_debug[0].filename });
buf.push("Could not download file.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h1>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.unshift({ lineno: 4, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n  <div data-role=\"content\" data-theme=\"e\" class=\"ui-corner-bottom\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n    <h3 class=\"ui-title\">");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 5, filename: jade_debug[0].filename });
buf.push("Could not download file.");
jade_debug.shift();
jade_debug.shift();
buf.push("</h3>");
jade_debug.shift();
jade_debug.unshift({ lineno: 6, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("\n    <p>");
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.unshift({ lineno: 6, filename: jade_debug[0].filename });
buf.push("This file cannot be downloaded from the server. Please try again later.");
jade_debug.shift();
jade_debug.unshift({ lineno: 7, filename: "www/templates//couldNotDownloadDialog.jade" });
buf.push("<a href=\"#\" data-role=\"button\" data-inline=\"true\" data-rel=\"back\" data-theme=\"e\">" + (jade.escape(null == (jade_interp = Ok) ? "" : jade_interp)));
jade_debug.unshift({ lineno: undefined, filename: jade_debug[0].filename });
jade_debug.shift();
buf.push("</a>");
jade_debug.shift();
jade_debug.shift();
buf.push("</p>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n  </div>");
jade_debug.shift();
jade_debug.shift();
buf.push("\n</div>");
jade_debug.shift();
jade_debug.shift();}.call(this,"undefined" in locals_for_with?locals_for_with.undefined:typeof undefined!=="undefined"?undefined:undefined,"Ok" in locals_for_with?locals_for_with.Ok:typeof Ok!=="undefined"?Ok:undefined));;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade_debug[0].filename, jade_debug[0].lineno, "div(data-role=\"popup\", id=\"cannotDownloadDialog\", data-overlay-theme=\"e\", data-theme=\"e\", data-dismissible=\"false\", class=\"progress-bar ui-corner-all\")\n    div(data-role=\"header\", data-theme=\"e\", class=\"ui-corner-top\")\n        h1 Could not download file.\n    div(data-role=\"content\", data-theme=\"e\", class=\"ui-corner-bottom\")\n        h3.ui-title Could not download file.\n        p This file cannot be downloaded from the server. Please try again later.\n            a(href=\"#\", data-role=\"button\", data-inline=\"true\", data-rel=\"back\", data-theme=\"e\")=Ok\n");
}
}