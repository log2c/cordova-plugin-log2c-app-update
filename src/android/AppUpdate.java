package com.log2c.cordova.plugin.appupdate;

import android.content.Context;
import android.support.annotation.IdRes;
import android.text.TextUtils;
import android.util.Log;

import com.cretin.www.cretinautoupdatelibrary.interfaces.AppDownloadListener;
import com.cretin.www.cretinautoupdatelibrary.interfaces.MD5CheckListener;
import com.cretin.www.cretinautoupdatelibrary.utils.AppUpdateUtils;
import com.google.gson.Gson;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class AppUpdate extends CordovaPlugin implements MD5CheckListener, AppDownloadListener {
    private static final String TAG = AppUpdate.class.getSimpleName();
    private CallbackContext mDownloadCallback = null;

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        if ("checkUpdate".equalsIgnoreCase(action)) {
            String jsonData = args.getString(0);
            this.checkUpdate(jsonData, callbackContext);
            return true;
        } else if ("setConfig".equalsIgnoreCase(action)) {
            String jsonData = args.getString(0);
            AdvanceUpdateConfig config = new Gson().fromJson(jsonData, AdvanceUpdateConfig.class);
            setConfig(config,callbackContext);
            Log.d(TAG, "config: " + config.toString());
            return true;
        }
        return false;
    }

    private void setConfig(AdvanceUpdateConfig updateConfig, CallbackContext callbackContext) {
        if (!TextUtils.isEmpty(updateConfig.getIconRes()) && !TextUtils.isEmpty(updateConfig.getResourceName())) {
            int iconResId = getResourceId(cordova.getContext(), updateConfig.getIconRes(), updateConfig.getResourceName(), cordova.getContext().getPackageName());
            if (iconResId != -1) {
                updateConfig.setNotificationIconRes(iconResId);
            } else {
                Log.e(TAG, "Resource not found: " + updateConfig.getIconRes());
            }
        } else {
            if (!TextUtils.isEmpty(updateConfig.getIconRes()) || !TextUtils.isEmpty(updateConfig.getResourceName())) {
                if (TextUtils.isEmpty(updateConfig.getIconRes())) {
                    Log.e(TAG, "Missing set iconRes!");
                } else {
                    Log.e(TAG, "Missing set resourcesName('mipmap | drawable...').!");
                }
            }
        }
        updateConfig.setModelClass(new UpdateInfoModel());
        AppUpdateUtils.init(cordova.getActivity().getApplication(), updateConfig);
        callbackContext.success();
    }

    private void checkUpdate(String jsonData, CallbackContext callbackContext) {
        mDownloadCallback = callbackContext;
        AppUpdateUtils.getInstance()
                .addMd5CheckListener(this)//添加MD5检查更新
                .addAppDownloadListener(this)//添加文件下载监听
                .checkUpdate(jsonData);
    }

    @Override
    public void fileMd5CheckFail(String originMD5, String localMD5) {
        postErrorToCordova(-1, String.format("MD5 check fail. originMD5: %1$s, localMD5: %2$s", originMD5, localMD5));
    }

    @Override
    public void fileMd5CheckSuccess() {
        postSuccessToCordova();
    }

    @Override
    public void downloading(int progress) {

    }

    @Override
    public void downloadFail(String msg) {
        postErrorToCordova(-1, String.format("Download fail: %1$s", msg));
    }

    @Override
    public void downloadComplete(String path) {

    }

    @Override
    public void downloadStart() {

    }

    @Override
    public void reDownload() {

    }

    @Override
    public void pause() {

    }

    private void postSuccessToCordova() {
        if (mDownloadCallback != null) {
            mDownloadCallback.success();
            mDownloadCallback = null;
        }
    }

    private void postErrorToCordova(int code, String msg) {
        if (mDownloadCallback == null) {
            return;
        }
        JSONObject jsonObject = new JSONObject();
        try {
            jsonObject.put("code", code);
            jsonObject.put("msg", msg);
        } catch (JSONException e) {
            e.printStackTrace();
        }
        mDownloadCallback.error(jsonObject);
        mDownloadCallback = null;
    }

    /**
     * 获取资源 ID
     *
     * @param context       Context
     * @param pVariableName 资源名称
     * @param pResourceName 类型 "drawable || mipmap || string"
     * @param pPackageName  包名
     * @return ResID
     */
    @IdRes
    public static int getResourceId(Context context, String pVariableName, String pResourceName, String pPackageName) {
        try {
            return context.getResources().getIdentifier(pVariableName, pResourceName, pPackageName);
        } catch (Exception e) {
            e.printStackTrace();
            return -1;
        }
    }
}
