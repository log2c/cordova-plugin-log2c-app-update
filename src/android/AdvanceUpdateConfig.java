package com.log2c.cordova.plugin.appupdate;

import com.cretin.www.cretinautoupdatelibrary.model.UpdateConfig;

public class AdvanceUpdateConfig extends UpdateConfig {
    private String iconRes;
    private String resourceName;//类型 "drawable || mipmap || string"

    public String getIconRes() {
        return iconRes;
    }

    public void setIconRes(String iconRes) {
        this.iconRes = iconRes;
    }

    public String getResourceName() {
        return resourceName;
    }

    public void setResourceName(String resourceName) {
        this.resourceName = resourceName;
    }
}
