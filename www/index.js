var exec = require('cordova/exec');

var AndroidUpdate = {
    callNative: (name, args, successCallback, errorCallback) => {
        exec(successCallback, errorCallback, 'AndroidUpdate', name, args);
    },
}

module.exports = AndroidUpdate;
