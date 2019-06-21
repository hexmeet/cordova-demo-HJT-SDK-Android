# cordova-demo-HJT-SDK-Android
使用 [cordova-plugin-HJT-SDK-Android](https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android) 的示例

### 快速开始
- 获取项目并安装平台和插件

        npm install -g cordova
        git clone https://github.com/hexmeet/cordova-demo-HJT-SDK-Android.git
        cd cordova-demo-HJT-SDK-Android
        cordova platform add android
        cordova plugin add https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
- 运行项目

        cordova run android

### 示例
插件创建对象 **cordova.plugins.HjtCordova** 中的方法，必须在deviceready事件触发之后使用

 `initView` 是 [cordova-plugin-HJT-SDK-Android](https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android) 的一个方法

    cordova.plugins.HjtCordova.initView(
        result => {
            console.log('Success!');
        },
        error => {
            console.log('Error!');
        }
    );

### 其他
可以通过本地安装:

    git clone https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
    cd cordova-demo-HJT-SDK-Android
    cordova plugin add ../cordova-plugin-HJT-SDK-Android
更新版本之前需要先卸载:

    cordova plugin remove HjtCordova


> Last Updated: Fri Jun 21 15:18:05 CST 2019 (6a212ec0009f2dffd2093de06aa60b9527b8371e)
