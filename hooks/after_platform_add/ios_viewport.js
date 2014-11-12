#!/usr/bin/env node

console.log("Platform being added: " +process.env.CORDOVA_PLATFORMS);
if(process.env.CORDOVA_PLATFORMS == "ios") {
    console.log("Fixing ios viewport height");
    var codeInject = "\
    if ([[[UIDevice currentDevice] systemVersion] floatValue] >= 7) {\\n\
        CGRect viewBounds = [self.webView bounds];\\n\
        viewBounds.origin.y = 20;\\n\
        viewBounds.size.height = viewBounds.size.height - 20;\\n\
        self.webView.frame = viewBounds;\\n\
    }\\n\
    self.view.backgroundColor = [UIColor blackColor];\\n";

    var codeInject2 = "\
-(UIStatusBarStyle)preferredStatusBarStyle\\n\
{\\n\
    return UIStatusBarStyleLightContent;\\n\
}\\n";

    var sys = require('sys')
    var exec = require('child_process').exec;

    function puts(error, stdout, stderr) {
        sys.puts(stdout);
    }

    exec ('gsed -ie "/you can do so here/ a \\'+codeInject+'" platforms/ios/Focas/Classes/MainViewController.m',puts);

    exec ('gsed -ie "/- (void)viewDidLoad/ i \\'+codeInject2+'" platforms/ios/Focas/Classes/MainViewController.m',puts);
}
