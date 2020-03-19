import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
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
var AndroidUpdate = /** @class */ (function (_super) {
    __extends(AndroidUpdate, _super);
    function AndroidUpdate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AndroidUpdate.prototype.setConfig = function (config) { return cordova(this, "setConfig", {}, arguments); };
    AndroidUpdate.prototype.checkUpdate = function (downloadInfo) { return cordova(this, "checkUpdate", {}, arguments); };
    AndroidUpdate.pluginName = "AndroidUpdate";
    AndroidUpdate.plugin = "cordova-plugin-log2c-app-update";
    AndroidUpdate.pluginRef = "AndroidUpdate";
    AndroidUpdate.repo = "https://github.com/log2c/cordova-plugin-log2c-app-update";
    AndroidUpdate.platforms = ["Android"];
    AndroidUpdate = __decorate([
        Injectable()
    ], AndroidUpdate);
    return AndroidUpdate;
}(IonicNativePlugin));
export { AndroidUpdate };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2xvZzJjLWFwcC11cGRhdGUvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7QUFFeEUsTUFBTSxDQUFOLElBQVksVUE2Qlg7QUE3QkQsV0FBWSxVQUFVO0lBQ3BCOztPQUVHO0lBQ0gsZ0ZBQTJCLENBQUE7SUFDM0IsNEVBQXlCLENBQUE7SUFDekIsOEVBQTBCLENBQUE7SUFDMUI7O09BRUc7SUFDSCx3REFBZSxDQUFBO0lBQ2YsMERBQWdCLENBQUE7SUFDaEI7O09BRUc7SUFDSCwrREFBbUIsQ0FBQTtJQUNuQixtRUFBcUIsQ0FBQTtJQUNyQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtJQUNoQix5REFBZ0IsQ0FBQTtBQUNsQixDQUFDLEVBN0JXLFVBQVUsS0FBVixVQUFVLFFBNkJyQjs7SUFnRGtDLGlDQUFpQjs7OztJQUdsRCxpQ0FBUyxhQUFDLE1BQWM7SUFJeEIsbUNBQVcsYUFBQyxZQUEwQjs7Ozs7O0lBUDNCLGFBQWE7UUFEekIsVUFBVSxFQUFFO09BQ0EsYUFBYTt3QkFoRjFCO0VBZ0ZtQyxpQkFBaUI7U0FBdkMsYUFBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgZW51bSBUeXBlQ29uZmlnIHtcbiAgLyoqXG4gICAqIOabtOaWsOS/oeaBr+eahOadpea6kFxuICAgKi9cbiAgREFUQV9TT1VSQ0VfVFlQRV9NT0RFTCA9IDEwLCAvLyDosIPnlKjmlrnmj5Dkvpvkv6Hmga9tb2RlbFxuICBEQVRBX1NPVVJDRV9UWVBFX1VSTCA9IDExLCAvLyDpgJrov4fphY3nva7pk77mjqXkvptzZGvoh6rkuLvor7fmsYJcbiAgREFUQV9TT1VSQ0VfVFlQRV9KU09OID0gMTIsIC8vIOiwg+eUqOaWueaPkOS+m+S/oeaBr2pzb25cbiAgLyoqXG4gICAqIOivt+axguaWueW8j+exu+Wei1xuICAgKi9cbiAgTUVUSE9EX0dFVCA9IDIwLCAvLyBHRVTor7fmsYJcbiAgTUVUSE9EX1BPU1QgPSAyMSwgLy8gUE9TVOivt+axglxuICAvKipcbiAgICogVUnmoLflvI/nsbvlnotcbiAgICovXG4gIFVJX1RIRU1FX0FVVE8gPSAzMDAsIC8vIHNka+iHquS4u+WGs+Wumu+8jOmaj+acuuS7juWNgeWHoOenjeagt+W8j+S4remAieaLqeS4gOenje+8jOW5tuS/neivgeWQjOS4gOS4quiuvuWkh+mAieaLqeeahOWUr+S4gOeahFxuICBVSV9USEVNRV9DVVNUT00gPSAzOTksIC8vIOeUqOaIt+iHquWumuS5iVVJXG4gIFVJX1RIRU1FX0EgPSAzMDEsIC8vIOexu+Wei0HvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0IgPSAzMDIsIC8vIOexu+Wei0LvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0MgPSAzMDMsIC8vIOexu+Wei0PvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0QgPSAzMDQsIC8vIOexu+Wei0TvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0UgPSAzMDUsIC8vIOexu+Wei0XvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0YgPSAzMDYsIC8vIOexu+Wei0bvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0cgPSAzMDcsIC8vIOexu+Wei0fvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0ggPSAzMDgsIC8vIOexu+Wei0jvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0kgPSAzMDksIC8vIOexu+Wei0nvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0ogPSAzMTAsIC8vIOexu+Wei0rvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0sgPSAzMTEsIC8vIOexu+Wei0vvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG4gIFVJX1RIRU1FX0wgPSAzMTIsIC8vIOexu+Wei0vvvIzlhbfkvZPmoLflvI/mlYjmnpzor7flhbPms6hkZW1vXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnIHtcbiAgLy8g6K6+572u5L2/55Soc2Rr6K+35rGC55qE5pe25YCZ55qE6K+35rGC6ZO+5o6l5Zyw5Z2AXG4gIGJhc2VVcmw/OiBzdHJpbmc7XG4gIC8vIGJvb2xlYW7mmK/lkKbmmK9kZWJ1Z+eKtuaAgSDmiZPljbBsb2dcbiAgZGVidWc/OiBib29sZWFuO1xuICAvLyBpbnQg6K6+572u5qC35byP57G75Z6LIOm7mOiupOaYr+maj+aEj+S4gOS4quagt+W8j+exu+Wei1xuICB1aVRoZW1lVHlwZT86IFR5cGVDb25maWc7XG4gIC8vIGludOivt+axguaWueW8jyDpu5jorqRHRVTor7fmsYJcbiAgbWV0aG9kVHlwZT86IFR5cGVDb25maWc7XG4gIC8vIGludOabtOaWsOS/oeaBr+eahOaVsOaNruadpea6kOaWueW8jyDpu5jorqTnlKjmiLfoh6rlt7Hmj5Dkvpvmm7TmlrDkv6Hmga9cbiAgZGF0YVNvdXJjZVR5cGU/OiBUeXBlQ29uZmlnO1xuICAvLyBib29sZWFu5piv5ZCm5Zyo6YCa55+l5qCP5pi+56S66L+b5bqmIOm7mOiupOaYvuekuiDmmL7npLrnmoTlpb3lpITlnKjkuo4g5aaC5p6c5Zug5Li6572R57uc5Y6f5Zug5oiW6ICF5YW25LuW5Y6f5Zug5a+86Ie05LiL6L295aSx6LSl55qE5pe25YCZ77yM5Y+v5Lul54K55Ye76YCa55+l5qCP6YeN5paw5LiL6L29XG4gIHNob3dOb3RpZmljYXRpb24/OiBib29sZWFuO1xuICAvLyBpbnTpgJrnn6XmoI/kuIvovb3ov5vluqbmj5DphpLnmoRJY29u5Zu+5qCHIOm7mOiupOS4ujAg5bCx5pivYXBw55qEbG9nb1xuICAvLyBub3RpZmljYXRpb25JY29uUmVzLCAvLyDlvIPnlKgs6L2s5Li65L2/55SoIChpY29uUmVzICsgcmVzb3VyY2VOYW1lKSDnu4TlkIhcbiAgLy8g6K+35rGC5aS05L+h5oGvXG4gIHJlcXVlc3RIZWFkZXJzPzogeyBbcHJvcDogc3RyaW5nXTogc3RyaW5nIHwgbnVtYmVyOyB9O1xuICAvLyDor7fmsYLlj4LmlbDkv6Hmga9cbiAgcmVxdWVzdFBhcmFtcz86IHsgW3Byb3A6IHN0cmluZ106IHN0cmluZyB8IG51bWJlcjsgfTtcbiAgLy8gYm9vbGVhbuaYr+WQpumcgOimgei/m+ihjOaWh+S7tueahE1ENeagoemqjFxuICBpc05lZWRGaWxlTUQ1Q2hlY2s/OiBib29sZWFuO1xuICAvLyBib29sZWFu5piv5ZCm6Z2Z6buY5LiL6L29XG4gIGlzQXV0b0Rvd25sb2FkQmFja2dyb3VuZD86IGJvb2xlYW47XG4gIGljb25SZXM/OiBzdHJpbmc7XG4gIHJlc291cmNlTmFtZT86ICdtaXBtYXAnIHwgJ2RyYXdhYmxlJztcbn1cbmV4cG9ydCBpbnRlcmZhY2UgRG93bmxvYWRJbmZvIHtcbiAgYXBrVXJsOiBzdHJpbmc7XG4gIGFwa1NpemU6IG51bWJlcjtcbiAgbG9nczogc3RyaW5nOyAgICAvLyDmm7TmlrDml6Xlv5dcbiAgdmVyc2lvbkNvZGU6IG51bWJlcjtcbiAgdmVyc2lvbk5hbWU6IHN0cmluZztcbiAgZm9yY2VVcGRhdGU6IGJvb2xlYW47XG4gIGFmZmVjdENvZGVzOiBzdHJpbmc7IC8vIOW9seWTjeiMg+WbtFxuICBtZDU6IHN0cmluZzsgIC8vIEFQSyBNRDXkv6Hmga9cbn1cblxuXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0FuZHJvaWRVcGRhdGUnLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1sb2cyYy1hcHAtdXBkYXRlJyxcbiAgcGx1Z2luUmVmOiAnQW5kcm9pZFVwZGF0ZScsXG4gIHJlcG86ICdodHRwczovL2dpdGh1Yi5jb20vbG9nMmMvY29yZG92YS1wbHVnaW4tbG9nMmMtYXBwLXVwZGF0ZScsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQW5kcm9pZFVwZGF0ZSBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcblxuICBAQ29yZG92YSgpXG4gIHNldENvbmZpZyhjb25maWc6IENvbmZpZyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG4gIEBDb3Jkb3ZhKClcbiAgY2hlY2tVcGRhdGUoZG93bmxvYWRJbmZvOiBEb3dubG9hZEluZm8pOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxufVxuIl19