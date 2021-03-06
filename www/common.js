var exec = require("cordova/exec");

/**
 * LIVE UPDATE API
 *
 * The plugin API for the live updates feature.
 */
var IonicDeploy = {
  init: function(config, success, failure) {
    if (typeof config !== "string") {
      config = JSON.stringify(config);
    }
    exec(success, failure, "IonicDeploy", "initialize", [config]);
  },
  check: function(success, failure) {
    exec(success, failure, "IonicDeploy", "check");
  },
  download: function(success, failure) {
    exec(success, failure, "IonicDeploy", "download");
  },
  extract: function(success, failure) {
    exec(success, failure, "IonicDeploy", "extract");
  },
  redirect: function(success, failure) {
    exec(success, failure, "IonicDeploy", "redirect");
  },
  info: function(success, failure) {
    exec(success, failure, "IonicDeploy", "info");
  },
  getVersions: function(success, failure) {
    exec(success, failure, "IonicDeploy", "getVersions");
  },
  deleteVersion: function(version, success, failure) {
    exec(success, failure, "IonicDeploy", "deleteVersion", [version]);
  },
  parseUpdate: function(jsonResponse, success, failure) {
    if (typeof jsonReponse !== "string") {
      jsonResponse = JSON.stringify(jsonResponse);
    }
    exec(success, failure, "IonicDeploy", "parseUpdate", [jsonResponse]);
  }
};

var IonicPinned = {
  startLockTask: function(successCallback, errorCallback, adminClassName) {
    if (adminClassName == null) {
      adminClassName = "";
    }
    cordova.exec(
      successCallback,
      errorCallback,
      "IonicPinned",
      "startLockTask",
      [adminClassName]
    );
  },
  stopLockTask: function(successCallback, errorCallback) {
    cordova.exec(
      successCallback,
      errorCallback,
      "IonicPinned",
      "stopLockTask",
      []
    );
  }
};

/**
 * BASE API
 *
 * All features of the Ionic Cordova plugin are registered here, along with some low level error tracking features used
 * by the monitoring service.
 */
var IonicCordova = {
  enableCrashLogging: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "enableCrashLogging");
  },
  checkForPendingCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "checkForPendingCrash");
  },
  loadPendingCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "loadPendingCrash");
  },
  forceCrash: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "forceCrash");
  },
  getAppInfo: function(success, fail) {
    exec(success, fail, "IonicCordovaCommon", "getAppInfo");
  },
  get: function(key, success, fail) {
    exec(success, fail, "IonicPreference", "get", [key]);
  },
  set: function(key, value, success, fail) {
    exec(success, fail, "IonicPreference", "set", [key, value]);
  },
  deploy: IonicDeploy,
  pinned: IonicPinned
};

module.exports = IonicCordova;
