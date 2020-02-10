# What is this?
ZotBins mobile app for the user. Developed with React Native / Expo.  
# How do I emulate an Android device on my computer?  
Before doing anything, make sure Android Studio is installed and you have an Android Virtual Device created and installed.  
1. Open Android Studio.  
2. Open the Android Virtual Device Manager.  
3. Start a Virtual Device and leave it on.  
4. Navigate to the project directory.  
5. Open cmd and run "expo start"  
6. At this point, Expo should've opened a page in your default browser. Navigate to this page.  
7. Click "Run an Android device/emulator" and it should connect with your Virtual Device.  
# Notes  
The workflow is a bit tedious, since you have to wait for the app to update on your Virtual Device to see the changes you've made. If the app isn't updating automatically, close the app on your Virtual Device and go back to Step 6.  
If there are any other issues, close your terminal and go back to Step 4.
**The original name of this repo was "zotbins-mobile-app-android".**
# Common Errors  
1. **I installed a new dependency and didn't change anything else. Now the app won't run...**
Try deleting "node-modules" and "package-lock.json".
Execute "expo install", then execute "expo start -c".
*Running these commands will reinstall your dependencies.*