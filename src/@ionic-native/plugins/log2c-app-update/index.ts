import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

export enum TypeConfig {
  /**
   * 更新信息的来源
   */
  DATA_SOURCE_TYPE_MODEL = 10, // 调用方提供信息model
  DATA_SOURCE_TYPE_URL = 11, // 通过配置链接供sdk自主请求
  DATA_SOURCE_TYPE_JSON = 12, // 调用方提供信息json
  /**
   * 请求方式类型
   */
  METHOD_GET = 20, // GET请求
  METHOD_POST = 21, // POST请求
  /**
   * UI样式类型
   */
  UI_THEME_AUTO = 300, // sdk自主决定，随机从十几种样式中选择一种，并保证同一个设备选择的唯一的
  UI_THEME_CUSTOM = 399, // 用户自定义UI
  UI_THEME_A = 301, // 类型A，具体样式效果请关注demo
  UI_THEME_B = 302, // 类型B，具体样式效果请关注demo
  UI_THEME_C = 303, // 类型C，具体样式效果请关注demo
  UI_THEME_D = 304, // 类型D，具体样式效果请关注demo
  UI_THEME_E = 305, // 类型E，具体样式效果请关注demo
  UI_THEME_F = 306, // 类型F，具体样式效果请关注demo
  UI_THEME_G = 307, // 类型G，具体样式效果请关注demo
  UI_THEME_H = 308, // 类型H，具体样式效果请关注demo
  UI_THEME_I = 309, // 类型I，具体样式效果请关注demo
  UI_THEME_J = 310, // 类型J，具体样式效果请关注demo
  UI_THEME_K = 311, // 类型K，具体样式效果请关注demo
  UI_THEME_L = 312, // 类型K，具体样式效果请关注demo
}

export interface Config {
  // 设置使用sdk请求的时候的请求链接地址
  baseUrl?: string;
  // boolean是否是debug状态 打印log
  debug?: boolean;
  // int 设置样式类型 默认是随意一个样式类型
  uiThemeType?: TypeConfig;
  // int请求方式 默认GET请求
  methodType?: TypeConfig;
  // int更新信息的数据来源方式 默认用户自己提供更新信息
  dataSourceType?: TypeConfig;
  // boolean是否在通知栏显示进度 默认显示 显示的好处在于 如果因为网络原因或者其他原因导致下载失败的时候，可以点击通知栏重新下载
  showNotification?: boolean;
  // int通知栏下载进度提醒的Icon图标 默认为0 就是app的logo
  // notificationIconRes, // 弃用,转为使用 (iconRes + resourceName) 组合
  // 请求头信息
  requestHeaders?: { [prop: string]: string | number; };
  // 请求参数信息
  requestParams?: { [prop: string]: string | number; };
  // boolean是否需要进行文件的MD5校验
  isNeedFileMD5Check?: boolean;
  // boolean是否静默下载
  isAutoDownloadBackground?: boolean;
  iconRes?: string;
  resourceName?: 'mipmap' | 'drawable';
}
export interface DownloadInfo {
  apkUrl?: string;  // Android Only, Android平台必需
  iOSUrl?: string;  // iOS Only, iOS平台必需
  apkSize?: number;
  logs?: string;    // 更新日志
  versionCode?: number;
  versionName?: string;
  forceUpdate?: boolean;
  affectCodes?: string; // 影响范围
  md5?: string;  // APK MD5信息
}


@Plugin({
  pluginName: 'AppUpdate',
  plugin: 'cordova-plugin-log2c-app-update',
  pluginRef: 'AppUpdate',
  repo: 'https://github.com/log2c/cordova-plugin-log2c-app-update',
  platforms: ['Android', 'ios']
})
@Injectable()
export class AppUpdate extends IonicNativePlugin {

  /**
   * 配置
   * Android Only
   * @param config 配置信息
   */
  @Cordova()
  setConfig(config: Config): Promise<any> {
    return;
  }
  @Cordova()
  checkUpdate(downloadInfo: DownloadInfo): Promise<any> {
    return;
  }
}
