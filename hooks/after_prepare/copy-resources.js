#!/usr/bin/env node

var filestocopy = [
    {
        "content/video/focas-promo-film.mp4":
        "platforms/ios/www/content/video/focas-promo-film.mp4"
    }
];

var fs = require('fs');
var path = require('path');

// no need to configure below
var rootdir = process.argv[2];


filestocopy.forEach(function(obj) {
    Object.keys(obj).forEach(function(key) {
        var val = obj[key];
        var srcfile = path.join(rootdir, key);
        var destfile = path.join(rootdir, val);
        console.log("copying "+srcfile+" to "+destfile);
        var destdir = path.dirname(destfile);
        if (fs.existsSync(srcfile) && fs.existsSync(destdir)) {
            fs.createReadStream(srcfile).pipe(
            fs.createWriteStream(destfile));
        }
    });
});
