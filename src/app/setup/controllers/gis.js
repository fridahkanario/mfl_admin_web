(function (angular) {
    "use strict";

    angular.module("mfl.setup.gis.controllers", [
        "ui.router",
        "mfl.setup.api"
    ])

    .controller("mfl.setup.gis.controllers.geocode_methods_list", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "GeoCode Methods"
            }
        ];
        $scope.action = [
            {
                func : "ui-sref='setup.geocode_methods_create'",
                class: "action-btn action-btn-primary action-btn-md",
                color: "blue",
                tipmsg: "Add geocode method",
                icon: "fa-plus"
            }
        ];
    }])
    .controller("mfl.setup.gis.controllers.geocode_methods_create",
        ["$scope", "adminApi", "$log", "$state", function ($scope, adminApi, $log, $state) {
            $scope.title = [
                {
                    name: "Create GeoCode Method"
                }
            ];
            $scope.geocode_method = {
                name: "",
                description: ""
            };
            $scope.save = function () {
                adminApi.geocode_methods.create($scope.geocode_method)
                .success(function (data) {
                    $state.go("setup.geocode_methods_edit", {"method_id": data.id});
                })
                .error(function (data) {
                    $log.error(data);
                });
            };
        }]
    )
    .controller("mfl.setup.gis.controllers.geocode_methods_edit", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "Edit GeoCode Method"
            }
        ];
    }])
    .controller("mfl.setup.gis.controllers.geocode_methods_delete", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "Delete GeoCode Method"
            }
        ];
    }])

    .controller("mfl.setup.gis.controllers.geocode_sources_list", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "GeoCode Sources"
            }
        ];
        $scope.action = [
            {
                func : "ui-sref='setup.geocode_sources_create'",
                class: "action-btn action-btn-primary action-btn-md",
                color: "blue",
                tipmsg: "Add geocode sources",
                icon: "fa-plus"
            }
        ];
    }])
    .controller("mfl.setup.gis.controllers.geocode_sources_create",
        ["$scope", "adminApi", "$log", "$state", function ($scope, adminApi, $log, $state) {
            $scope.title = [
                {
                    name: "Create GeoCode Source"
                }
            ];
            $scope.geocode_source = {
                name: "",
                abbreviation: "",
                description: ""
            };
            $scope.save = function () {
                adminApi.geocode_sources.create($scope.geocode_source)
                .success(function (data) {
                    $state.go("setup.geocode_sources_edit", {"source_id": data.id});
                })
                .error(function (data) {
                    $log.error(data);
                });
            };
        }]
    )
    .controller("mfl.setup.gis.controllers.geocode_sources_edit", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "Edit GeoCode Source"
            }
        ];
    }])
    .controller("mfl.setup.gis.controllers.geocode_sources_delete", ["$scope", function ($scope) {
        $scope.title = [
            {
                name: "Delete GeoCode Source"
            }
        ];
    }])
    ;

})(angular);