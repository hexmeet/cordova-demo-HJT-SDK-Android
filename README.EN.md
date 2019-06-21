# cordova-demo-HJT-SDK-Android
A demo that use [cordova-plugin-HJT-SDK-Android](https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android).

### Quick Start
- clone project then install platform and plugin

        npm install -g cordova
        git clone https://github.com/hexmeet/cordova-demo-HJT-SDK-Android.git
        cd cordova-demo-HJT-SDK-Android
        cordova platform add android
        cordova plugin add https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
- run on android

        cordova run android

### Usage Example
The plugin creates the object **cordova.plugins.HjtCordova** and is accessible after deviceready has been fired.

 `initView` is a method in [cordova-plugin-HJT-SDK-Android](https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android)

    cordova.plugins.HjtCordova.initView(
        result => {
            console.log('Success!');
        },
        error => {
            console.log('Error!');
        }
    );

### Other
You can install from your local disk:

    git clone https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
    cd cordova-demo-HJT-SDK-Android
    cordova plugin add ../cordova-plugin-HJT-SDK-Android
Update to the latest local version, remove it first with:

    cordova plugin remove HjtCordova


