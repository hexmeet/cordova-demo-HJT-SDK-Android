
# swep-evsdk-android-cordova-plugin-demo
A sample demo that use swep evsdk android cordova plugin.

### Quick Start
- clone project then install platform and plugin

        npm install -g cordova
        git clone https://github.com/hexmeet/swep-evsdk-android-cordova-plugin-demo.git
        cd swep-evsdk-android-cordova-plugin-demo
        cordova platform add android
        cordova plugin add https://github.com/hexmeet/swep-evsdk-android-cordova-plugin.git
- configure **paltforms/android/app/build.gradle** according to **/plugin/HjtCordova/README.md**
- run on android

        cordova run android

### Usage Example
The plugin creates the object **cordova.plugins.HjtCordova** and is accessible after deviceready has been fired.

 `initView` is a method in swep-evsdk-android-cordova-plugin

    cordova.plugins.HjtCordova.initView(
        result => {
            console.log('Success!');
        },
        error => {
            console.log('Error!');
        }
    );


#### Other
You can install from your local disk:

    cordova plugin add "../swep-evsdk-android-cordova-plugin"
Update to the latest local version, remove it first with:

    cordova plugin remove HjtCordova