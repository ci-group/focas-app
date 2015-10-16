#!/usr/bin/env bash
path="platforms/android/ant-build/Focas-release.apk"
file=$(basename $path)

export ANDROID_HOME=/opt/android-bundle/sdk/

echo "Building android"
cordova build android --release

echo "moving $file to dist folder"
mv $path ./dist/

echo "You should now be able to upload the apk tot google play."
