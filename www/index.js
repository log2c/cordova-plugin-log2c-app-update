var exec = require('cordova/exec');

var typeConfig = {
    /**
     * 更新信息的来源
     */
    DATA_SOURCE_TYPE_MODEL: 10,//调用方提供信息model
    DATA_SOURCE_TYPE_URL: 11,//通过配置链接供sdk自主请求
    DATA_SOURCE_TYPE_JSON: 12,//调用方提供信息json

    /**
     * 请求方式类型
     */
    METHOD_GET: 20, //GET请求
    METHOD_POST: 21, //POST请求

    /**
     * UI样式类型
     */
    UI_THEME_AUTO: 300,//sdk自主决定，随机从十几种样式中选择一种，并保证同一个设备选择的唯一的
    UI_THEME_CUSTOM: 399,//用户自定义UI
    UI_THEME_A: 301,//类型A，具体样式效果请关注demo
    UI_THEME_B: 302,//类型B，具体样式效果请关注demo
    UI_THEME_C: 303,//类型C，具体样式效果请关注demo
    UI_THEME_D: 304,//类型D，具体样式效果请关注demo
    UI_THEME_E: 305,//类型E，具体样式效果请关注demo
    UI_THEME_F: 306,//类型F，具体样式效果请关注demo
    UI_THEME_G: 307,//类型G，具体样式效果请关注demo
    UI_THEME_H: 308,//类型H，具体样式效果请关注demo
    UI_THEME_I: 309,//类型I，具体样式效果请关注demo
    UI_THEME_J: 310,//类型J，具体样式效果请关注demo
    UI_THEME_K: 311,//类型K，具体样式效果请关注demo
    UI_THEME_L: 312,//类型K，具体样式效果请关注demo
};

var defaultConfig = {
    //设置使用sdk请求的时候的请求链接地址
    baseUrl: '',
    //boolean是否是debug状态 打印log
    debug: false,

    //int设置样式类型 默认是随意一个样式类型
    uiThemeType: typeConfig.UI_THEME_AUTO,
    //int请求方式 默认GET请求
    methodType: typeConfig.METHOD_GET,
    //int更新信息的数据来源方式 默认用户自己提供更新信息
    dataSourceType: typeConfig.DATA_SOURCE_TYPE_JSON,
    //boolean是否在通知栏显示进度 默认显示 显示的好处在于 如果因为网络原因或者其他原因导致下载失败的时候，可以点击通知栏重新下载
    showNotification: true,
    //int通知栏下载进度提醒的Icon图标 默认为0 就是app的logo
    // notificationIconRes, // 弃用,转为使用 (iconRes + resourceName) 组合
    //Map<String, Object> 请求头信息
    requestHeaders: {},
    //Map<String, Object> 请求参数信息
    requestParams: {},
    //boolean是否需要进行文件的MD5校验
    isNeedFileMD5Check: false,
    //boolean是否静默下载
    isAutoDownloadBackground: false,
    iconRes: 'ic_launcher',
    resourceName: 'mipmap'
};

// var downloadInfo = {
//     apkUrl,
//     apkSize,
//     logs,    // 更新日志
//     versionCode,
//     versionName,
//     forceUpdate,
//     affectCodes,// 影响范围
//     md5,  // APK MD5信息
//     iOSUrl   // iOS跳转下载App的地址
// };


module.exports = {
    callNative: function (name, args, successCallback, errorCallback) {
        cordova.exec(successCallback, errorCallback, 'AppUpdate', name, args);
    },
    /**
     * 设置配置规则
     */
    setConfig: function (config, successCallback, errorCallback) {
        this.callNative('setConfig', [Object.assign(defaultConfig, config)], successCallback, errorCallback);
    },

    /**
     * 开始检查更新
     */
    checkUpdate: function (downloadInfo, successCallback, errorCallback) {
        this.callNative('checkUpdate', [downloadInfo], successCallback, errorCallback)
    },
}