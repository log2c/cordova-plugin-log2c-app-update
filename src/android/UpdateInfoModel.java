package com.log2c.cordova.plugin.appupdate;

import com.cretin.www.cretinautoupdatelibrary.model.LibraryUpdateEntity;

public class UpdateInfoModel implements LibraryUpdateEntity {
    private int versionCode;
    private boolean forceUpdate;
    private String versionName;
    private String apkUrl;
    private String logs;
    private long apkSize;
    private String affectCodes;
    private String md5;

    public int getVersionCode() {
        return versionCode;
    }

    public void setVersionCode(int versionCode) {
        this.versionCode = versionCode;
    }

    public boolean isForceUpdate() {
        return forceUpdate;
    }

    public void setForceUpdate(boolean forceUpdate) {
        this.forceUpdate = forceUpdate;
    }

    public String getVersionName() {
        return versionName;
    }

    public void setVersionName(String versionName) {
        this.versionName = versionName;
    }

    public String getApkUrl() {
        return apkUrl;
    }

    public void setApkUrl(String apkUrl) {
        this.apkUrl = apkUrl;
    }

    public String getLogs() {
        return logs;
    }

    public void setLogs(String logs) {
        this.logs = logs;
    }

    public long getApkSize() {
        return apkSize;
    }

    public void setApkSize(long apkSize) {
        this.apkSize = apkSize;
    }

    public String getAffectCodes() {
        return affectCodes;
    }

    public void setAffectCodes(String affectCodes) {
        this.affectCodes = affectCodes;
    }

    public String getMd5() {
        return md5;
    }

    public void setMd5(String md5) {
        this.md5 = md5;
    }

    @Override
    public int getAppVersionCode() {
        return getVersionCode();
    }

    //是否强制更新 0 不强制更新 1 hasAffectCodes拥有字段强制更新 2 所有版本强制更新
    @Override
    public int forceAppUpdateFlag() {
        return isForceUpdate() ? 2 : 0;
    }

    @Override
    public String getAppVersionName() {
        return getVersionName();
    }

    @Override
    public String getAppApkUrls() {
        return getApkUrl();
    }

    @Override
    public String getAppUpdateLog() {
        return getLogs();
    }

    @Override
    public String getAppApkSize() {
        return String.valueOf(getApkSize());
    }

    @Override
    public String getAppHasAffectCodes() {
        return getAffectCodes();
    }

    @Override
    public String getFileMd5Check() {
        return getMd5();
    }

    @Override
    public String toString() {
        return "UpdateInfoModel{" +
                "versionCode=" + versionCode +
                ", forceUpdate=" + forceUpdate +
                ", versionName='" + versionName + '\'' +
                ", apkUrl='" + apkUrl + '\'' +
                ", logs='" + logs + '\'' +
                ", apkSize=" + apkSize +
                ", affectCodes='" + affectCodes + '\'' +
                ", md5='" + md5 + '\'' +
                '}';
    }
}
