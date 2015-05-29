(function (angular) {
    "use strict";

    angular.module("mflAdminApp", [
        "templates-app",
        "templates-common",

        "sil.common.logging",
        "mflAdminAppConfig",
        "mfl.common",
        "mfl.auth",
        "mfl.service_mgmt"
    ]);

})(angular);
