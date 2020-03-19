var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { IonicNativePlugin, cordova } from '@ionic-native/core';
export var TypeConfig;
(function (TypeConfig) {
    /**
     * 更新信息的来源
     */
    TypeConfig[TypeConfig["DATA_SOURCE_TYPE_MODEL"] = 10] = "DATA_SOURCE_TYPE_MODEL";
    TypeConfig[TypeConfig["DATA_SOURCE_TYPE_URL"] = 11] = "DATA_SOURCE_TYPE_URL";
    TypeConfig[TypeConfig["DATA_SOURCE_TYPE_JSON"] = 12] = "DATA_SOURCE_TYPE_JSON";
    /**
     * 请求方式类型
     */
    TypeConfig[TypeConfig["METHOD_GET"] = 20] = "METHOD_GET";
    TypeConfig[TypeConfig["METHOD_POST"] = 21] = "METHOD_POST";
    /**
     * UI样式类型
     */
    TypeConfig[TypeConfig["UI_THEME_AUTO"] = 300] = "UI_THEME_AUTO";
    TypeConfig[TypeConfig["UI_THEME_CUSTOM"] = 399] = "UI_THEME_CUSTOM";
    TypeConfig[TypeConfig["UI_THEME_A"] = 301] = "UI_THEME_A";
    TypeConfig[TypeConfig["UI_THEME_B"] = 302] = "UI_THEME_B";
    TypeConfig[TypeConfig["UI_THEME_C"] = 303] = "UI_THEME_C";
    TypeConfig[TypeConfig["UI_THEME_D"] = 304] = "UI_THEME_D";
    TypeConfig[TypeConfig["UI_THEME_E"] = 305] = "UI_THEME_E";
    TypeConfig[TypeConfig["UI_THEME_F"] = 306] = "UI_THEME_F";
    TypeConfig[TypeConfig["UI_THEME_G"] = 307] = "UI_THEME_G";
    TypeConfig[TypeConfig["UI_THEME_H"] = 308] = "UI_THEME_H";
    TypeConfig[TypeConfig["UI_THEME_I"] = 309] = "UI_THEME_I";
    TypeConfig[TypeConfig["UI_THEME_J"] = 310] = "UI_THEME_J";
    TypeConfig[TypeConfig["UI_THEME_K"] = 311] = "UI_THEME_K";
    TypeConfig[TypeConfig["UI_THEME_L"] = 312] = "UI_THEME_L";
})(TypeConfig || (TypeConfig = {}));
var AndroidUpdateOriginal = /** @class */ (function (_super) {
    __extends(AndroidUpdateOriginal, _super);
    function AndroidUpdateOriginal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidUpdateOriginal.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    AndroidUpdateOriginal.prototype.checkUpdate = function (downloadInfo) { return cordova(this, "checkUpdate", {}, arguments); };
    AndroidUpdateOriginal.pluginName = "AndroidUpdate";
    AndroidUpdateOriginal.plugin = "cordova-plugin-log2c-app-update";
    AndroidUpdateOriginal.pluginRef = "AndroidUpdate";
    AndroidUpdateOriginal.repo = "https://github.com/log2c/cordova-plugin-log2c-app-update";
    AndroidUpdateOriginal.platforms = ["Android"];
    return AndroidUpdateOriginal;
}(IonicNativePlugin));
var AndroidUpdate = new AndroidUpdateOriginal();
export { AndroidUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvZzJjLWFwcC11cGRhdGUvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUNBLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksVUE2Qlg7QUE3QkQsV0FBWSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsZ0ZBQTJCLENBQUE7SUFDM0IsNEVBQXlCLENBQUE7SUFDekIsOEVBQTBCLENBQUE7SUFDMUI7O09BRUc7SUFDSCx3REFBZSxDQUFBO0lBQ2YsMERBQWdCLENBQUE7SUFDaEI7O09BRUc7SUFDSCwrREFBbUIsQ0FBQTtJQUNuQixtRUFBcUIsQ0FBQTtJQUNyQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBN0JXLFVBQVUsS0FBVixVQUFVLFFBNkJyQjs7SUFnRGtDLGlDQUFpQjs7OztJQUdsRCxpQ0FBUyxhQUFDLE1BQWM7SUFJeEIsbUNBQVcsYUFBQyxZQUEwQjs7Ozs7O3dCQXZGeEM7RUFnRm1DLGlCQUFpQjtTQUF2QyxhQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29yZG92YSwgSW9uaWNOYXRpdmVQbHVnaW4sIFBsdWdpbiB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvY29yZSc7XG5cbmV4cG9ydCBlbnVtIFR5cGVDb25maWcge1xuICAvKipcbiAgICog5pu05paw5L+h5oGv55qE5p2l5rqQXG4gICAqL1xuICBEQVRBX1NPVVJDRV9UWVBFX01PREVMID0gMTAsIC8vIOiwg+eUqOaWueaPkOS+m+S/oeaBr21vZGVsXG4gIERBVEFfU09VUkNFX1RZUEVfVVJMID0gMTEsIC8vIOmAmui/h+mFjee9rumTvuaOpeS+m3Nka+iHquS4u+ivt+axglxuICBEQVRBX1NPVVJDRV9UWVBFX0pTT04gPSAxMiwgLy8g6LCD55So5pa55o+Q5L6b5L+h5oGvanNvblxuICAvKipcbiAgICog6K+35rGC5pa55byP57G75Z6LXG4gICAqL1xuICBNRVRIT0RfR0VUID0gMjAsIC8vIEdFVOivt+axglxuICBNRVRIT0RfUE9TVCA9IDIxLCAvLyBQT1NU6K+35rGCXG4gIC8qKlxuICAgKiBVSeagt+W8j+exu+Wei1xuICAgKi9cbiAgVUlfVEhFTUVfQVVUTyA9IDMwMCwgLy8gc2Rr6Ieq5Li75Yaz5a6a77yM6ZqP5py65LuO5Y2B5Yeg56eN5qC35byP5Lit6YCJ5oup5LiA56eN77yM5bm25L+d6K+B5ZCM5LiA5Liq6K6+5aSH6YCJ5oup55qE5ZSv5LiA55qEXG4gIFVJX1RIRU1FX0NVU1RPTSA9IDM5OSwgLy8g55So5oi36Ieq5a6a5LmJVUlcbiAgVUlfVEhFTUVfQSA9IDMwMSwgLy8g57G75Z6LQe+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfQiA9IDMwMiwgLy8g57G75Z6LQu+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfQyA9IDMwMywgLy8g57G75Z6LQ++8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfRCA9IDMwNCwgLy8g57G75Z6LRO+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfRSA9IDMwNSwgLy8g57G75Z6LRe+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfRiA9IDMwNiwgLy8g57G75Z6LRu+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfRyA9IDMwNywgLy8g57G75Z6LR++8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfSCA9IDMwOCwgLy8g57G75Z6LSO+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfSSA9IDMwOSwgLy8g57G75Z6LSe+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfSiA9IDMxMCwgLy8g57G75Z6LSu+8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfSyA9IDMxMSwgLy8g57G75Z6LS++8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbiAgVUlfVEhFTUVfTCA9IDMxMiwgLy8g57G75Z6LS++8jOWFt+S9k+agt+W8j+aViOaenOivt+WFs+azqGRlbW9cbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWcge1xuICAvLyDorr7nva7kvb/nlKhzZGvor7fmsYLnmoTml7blgJnnmoTor7fmsYLpk77mjqXlnLDlnYBcbiAgYmFzZVVybD86IHN0cmluZztcbiAgLy8gYm9vbGVhbuaYr+WQpuaYr2RlYnVn54q25oCBIOaJk+WNsGxvZ1xuICBkZWJ1Zz86IGJvb2xlYW47XG4gIC8vIGludCDorr7nva7moLflvI/nsbvlnosg6buY6K6k5piv6ZqP5oSP5LiA5Liq5qC35byP57G75Z6LXG4gIHVpVGhlbWVUeXBlPzogVHlwZUNvbmZpZztcbiAgLy8gaW506K+35rGC5pa55byPIOm7mOiupEdFVOivt+axglxuICBtZXRob2RUeXBlPzogVHlwZUNvbmZpZztcbiAgLy8gaW505pu05paw5L+h5oGv55qE5pWw5o2u5p2l5rqQ5pa55byPIOm7mOiupOeUqOaIt+iHquW3seaPkOS+m+abtOaWsOS/oeaBr1xuICBkYXRhU291cmNlVHlwZT86IFR5cGVDb25maWc7XG4gIC8vIGJvb2xlYW7mmK/lkKblnKjpgJrnn6XmoI/mmL7npLrov5vluqYg6buY6K6k5pi+56S6IOaYvuekuueahOWlveWkhOWcqOS6jiDlpoLmnpzlm6DkuLrnvZHnu5zljp/lm6DmiJbogIXlhbbku5bljp/lm6Dlr7zoh7TkuIvovb3lpLHotKXnmoTml7blgJnvvIzlj6/ku6Xngrnlh7vpgJrnn6XmoI/ph43mlrDkuIvovb1cbiAgc2hvd05vdGlmaWNhdGlvbj86IGJvb2xlYW47XG4gIC8vIGludOmAmuefpeagj+S4i+i9vei/m+W6puaPkOmGkueahEljb27lm77moIcg6buY6K6k5Li6MCDlsLHmmK9hcHDnmoRsb2dvXG4gIC8vIG5vdGlmaWNhdGlvbkljb25SZXMsIC8vIOW8g+eUqCzovazkuLrkvb/nlKggKGljb25SZXMgKyByZXNvdXJjZU5hbWUpIOe7hOWQiFxuICAvLyDor7fmsYLlpLTkv6Hmga9cbiAgcmVxdWVzdEhlYWRlcnM/OiB7IFtwcm9wOiBzdHJpbmddOiBzdHJpbmcgfCBudW1iZXI7IH07XG4gIC8vIOivt+axguWPguaVsOS/oeaBr1xuICByZXF1ZXN0UGFyYW1zPzogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyOyB9O1xuICAvLyBib29sZWFu5piv5ZCm6ZyA6KaB6L+b6KGM5paH5Lu255qETUQ15qCh6aqMXG4gIGlzTmVlZEZpbGVNRDVDaGVjaz86IGJvb2xlYW47XG4gIC8vIGJvb2xlYW7mmK/lkKbpnZnpu5jkuIvovb1cbiAgaXNBdXRvRG93bmxvYWRCYWNrZ3JvdW5kPzogYm9vbGVhbjtcbiAgaWNvblJlcz86IHN0cmluZztcbiAgcmVzb3VyY2VOYW1lPzogJ21pcG1hcCcgfCAnZHJhd2FibGUnO1xufVxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZEluZm8ge1xuICBhcGtVcmw6IHN0cmluZztcbiAgYXBrU2l6ZTogbnVtYmVyO1xuICBsb2dzOiBzdHJpbmc7ICAgIC8vIOabtOaWsOaXpeW/l1xuICB2ZXJzaW9uQ29kZTogbnVtYmVyO1xuICB2ZXJzaW9uTmFtZTogc3RyaW5nO1xuICBmb3JjZVVwZGF0ZTogYm9vbGVhbjtcbiAgYWZmZWN0Q29kZXM6IHN0cmluZzsgLy8g5b2x5ZON6IyD5Zu0XG4gIG1kNTogc3RyaW5nOyAgLy8gQVBLIE1ENeS/oeaBr1xufVxuXG5cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQW5kcm9pZFVwZGF0ZScsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWxvZzJjLWFwcC11cGRhdGUnLFxuICBwbHVnaW5SZWY6ICdBbmRyb2lkVXBkYXRlJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9sb2cyYy9jb3Jkb3ZhLXBsdWdpbi1sb2cyYy1hcHAtdXBkYXRlJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBbmRyb2lkVXBkYXRlIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuXG4gIEBDb3Jkb3ZhKClcbiAgc2V0Q29uZmlnKGNvbmZpZzogQ29uZmlnKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbiAgQENvcmRvdmEoKVxuICBjaGVja1VwZGF0ZShkb3dubG9hZEluZm86IERvd25sb2FkSW5mbyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG59XG4iXX0=