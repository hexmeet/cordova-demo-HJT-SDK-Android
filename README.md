
# cordova-demo-HJT-SDK-Android
使用cordova-plugin-HJT-SDK-Android的示例

### 快速开始
- 获取项目并安装平台和插件
        
        ```shell
        npm install -g cordova
        git clone https://github.com/hexmeet/cordova-demo-HJT-SDK-Android.git
        cd cordova-demo-HJT-SDK-Android
        cordova platform add android
        cordova plugin add  https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
        ```
- 配置文件，根据 **/plugin/HjtCordova/README.md** 配置 **paltforms/android/app/build.gradle**
- 运行项目

        cordova run android

### 示例
插件创建对象 **cordova.plugins.HjtCordova** 中的方法，必须在deviceready事件触发之后使用

 `initView` 是[cordova-plugin-HJT-SDK-Android](https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android)的一个方法

    cordova.plugins.HjtCordova.initView(
        result => {
            console.log('Success!');
        },
        error => {
            console.log('Error!');
        }
    );


#### 其他
可以通过本地安装:

    git clone https://github.com/hexmeet/cordova-plugin-HJT-SDK-Android.git
    cd cordova-demo-HJT-SDK-Android
    cordova plugin add "../cordova-plugin-HJT-SDK-Android"
更新版本之前需要先卸载:

    cordova plugin remove HjtCordova
    
> Last Updated: Mon May 27 11:44:10 CST 2019 (85e9905ad71b9eb3636a2ad7724d740962b4e75b)
