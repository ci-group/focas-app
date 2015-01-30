#!/usr/bin/env node

var sys = require('sys')
var exec = require('child_process').exec;

var rootdir = process.argv[2];

console.log("Building jade templates from root dir: "+rootdir);

console.log("Running templating engine");

var child = exec ('jade --pretty templates/fixed/*.jade');
child.stdout.pipe(process.stdout)
child.stderr.pipe(process.stderr)
child.on('exit', function() {
    console.log("Copying results");
    exec ('cp -Rf templates/fixed/*.html www/');
});

child2 = exec ('jade --pretty --client templates/client/*.jade');
child2.stdout.pipe(process.stdout)
child2.stderr.pipe(process.stderr)
child2.on('exit', function() {
    console.log("Copying results");
    exec ('cp -Rf templates/client/*.js www/templates/');
});
