import { IonicNativePlugin } from '@ionic-native/core';
export declare enum TypeConfig {
    /**
     * 更新信息的来源
     */
    DATA_SOURCE_TYPE_MODEL = 10,
    DATA_SOURCE_TYPE_URL = 11,
    DATA_SOURCE_TYPE_JSON = 12,
    /**
     * 请求方式类型
     */
    METHOD_GET = 20,
    METHOD_POST = 21,
    /**
     * UI样式类型
     */
    UI_THEME_AUTO = 300,
    UI_THEME_CUSTOM = 399,
    UI_THEME_A = 301,
    UI_THEME_B = 302,
    UI_THEME_C = 303,
    UI_THEME_D = 304,
    UI_THEME_E = 305,
    UI_THEME_F = 306,
    UI_THEME_G = 307,
    UI_THEME_H = 308,
    UI_THEME_I = 309,
    UI_THEME_J = 310,
    UI_THEME_K = 311,
    UI_THEME_L = 312
}
export interface Config {
    baseUrl?: string;
    debug?: boolean;
    uiThemeType?: TypeConfig;
    methodType?: TypeConfig;
    dataSourceType?: TypeConfig;
    showNotification?: boolean;
    requestHeaders?: {
        [prop: string]: string | number;
    };
    requestParams?: {
        [prop: string]: string | number;
    };
    isNeedFileMD5Check?: boolean;
    isAutoDownloadBackground?: boolean;
    iconRes?: string;
    resourceName?: 'mipmap' | 'drawable';
}
export interface DownloadInfo {
    apkUrl?: string;
    iOSUrl?: string;
    apkSize?: number;
    logs?: string;
    versionCode?: number;
    versionName?: string;
    forceUpdate?: boolean;
    affectCodes?: string;
    md5?: string;
}
export declare class AppUpdate extends IonicNativePlugin {
    /**
     * 配置
     * Android Only
     * @param config 配置信息
     */
    setConfig(config: Config): Promise<any>;
    checkUpdate(downloadInfo: DownloadInfo): Promise<any>;
}
