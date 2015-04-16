#!/usr/bin/env node

console.log("Adding plugins to platform");

var pluginlist = [
    "org.apache.cordova.file",
    "org.apache.cordova.file-transfer",
    "com.phonegap.plugins.fileopener",
    "org.apache.cordova.device",
    "org.apache.cordova.inappbrowser",
    "org.apache.cordova.statusbar"
];

// no need to configure below
var fs = require('fs');
var path = require('path');
var sys = require('sys')
var exec = require('child_process').exec;

function puts(error, stdout, stderr) {
    sys.puts(stdout);
}

pluginlist.forEach(function(plug) {
    console.log("Adding plugin: "+plug);
    exec("cordova plugin add " + plug, puts);
});
