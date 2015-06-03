(function(angular){
    "use strict";
    angular.module("mfl.setup.facilities.controllers",[
        "mfl.setup.api"
    ])
    /**
        Facility OwnerTypes
    **/
    .controller("mfl.setup.controller.facilityOwnerType.list", ["$scope",
        function ($scope) {
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Owner Types"
                }
            ];
            $scope.action = [
                {
                    func : "onclick=window.history.back()",
                    class: "action-btn action-btn-primary action-btn-md",
                    color: "blue",
                    tipmsg: "Go back",
                    icon: "fa-arrow-left"
                }
            ];
        }]
    )
    .controller("mfl.setup.controller.facilityOwnerType.view", ["$scope","$state", "$stateParams",
                "adminApi","mfl.common.forms.changes",
        function($scope, $state, $stateParams, adminApi, formChanges){
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Owner Types"
                }
            ];
            if(!_.isUndefined($stateParams.id)){
                adminApi.facilityOwnerTypes.get($stateParams.id).success(function(data){
                    $scope.facilityOwnerTypes = data;
                }).error(function(error){
                    $scope.alert = error.error;
                });
            }

            $scope.updateFacilityOwnerTypes = function(id, frm){
                var changes= formChanges.whatChanged(frm);
                if(!_.isEmpty(changes)){
                    adminApi.facilityOwnerTypes.update(id, changes).success(function(){
                        $state.go("setup.facility_owner_types");
                    }).error(function(error){
                        $scope.alert = error.error;
                    });
                }
            };
            $scope.deleteFacilityOwnerTypes = function(id){
                adminApi.facilityOwnerTypes.remove(id).success(function(){
                    $state.go("setup.facility_owner_types");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };

            $scope.createFacilityOwnerTypes = function(ownerType){
                adminApi.facilityOwnerTypes.create(ownerType).success(function(){
                    $state.go("setup.facility_owner_types");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };
        }]
    )

    /**
        Facility Owners

    **/
    .controller("mfl.setup.controller.facilityOwner.list", ["$scope",
        function ($scope) {
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Owners"
                }
            ];
            $scope.action = [
                {
                    func : "onclick=window.history.back()",
                    class: "action-btn action-btn-primary action-btn-md",
                    color: "blue",
                    tipmsg: "Go back",
                    icon: "fa-arrow-left"
                }
            ];
        }]
    )

    .controller("mfl.setup.controller.facilityOwner.view", ["$scope","$state", "$stateParams",
                "adminApi","mfl.common.forms.changes",
        function($scope, $state, $stateParams, adminApi, formChanges){
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Owner"
                }
            ];
            adminApi.facilityOwnerTypes.list().success(function(ownerTypes){
                $scope.ownerTypes = ownerTypes.results;
                if(!_.isUndefined($stateParams.id)){
                    adminApi.facilityOwners.get($stateParams.id).success(function(data){
                        $scope.facilityOwners = data;
                        $scope.$watch("facilityOwners.owner_type", function(id){
                            $scope.ownerType = _.findWhere(
                                $scope.ownerTypes, {id: id}
                            );
                        });

                        $scope.edit = true;
                    }).error(function(error){
                        $scope.alert = error.error;
                    });
                }
            }).error(function(error){
                $scope.alert = error.error;
            });


            $scope.updateFacilityOwner = function(id, frm){
                var changes= formChanges.whatChanged(frm);
                if(!_.isEmpty(changes)){
                    adminApi.facilityOwners.update(id, changes).success(function(){
                        $state.go("setup.facility_owners");
                    }).error(function(error){
                        $scope.alert = error.error;
                    });
                }
            };
            $scope.deleteFacilityOwner = function(id){
                adminApi.facilityOwners.remove(id).success(function(){
                    $state.go("setup.facility_owners");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };

            $scope.createFacilityOwner = function(owner){
                adminApi.facilityOwners.create(owner).success(function(){
                    $state.go("setup.facility_owners");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };
        }]
    )

    /**
        Facility Job Title
    **/
    .controller("mfl.setup.controller.facilityJobTitle.list", ["$scope",
        function ($scope) {
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Job Titles"
                }
            ];
            $scope.action = [
                {
                    func : "onclick=window.history.back()",
                    class: "action-btn action-btn-primary action-btn-md",
                    color: "blue",
                    tipmsg: "Go back",
                    icon: "fa-arrow-left"
                }
            ];
        }]
    )

    .controller("mfl.setup.controller.facilityJobTitle.view", ["$scope","$state", "$stateParams",
                "adminApi","mfl.common.forms.changes",
        function($scope, $state, $stateParams, adminApi, formChanges){
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Job Title"
                }
            ];
            if(!_.isUndefined($stateParams.id)){
                adminApi.facilityJobTitles.get($stateParams.id).success(function(data){
                    $scope.facilityJobTitles = data;
                }).error(function(error){
                    $scope.alert = error.error;
                });
            }
            $scope.updateFacilityJobTitle = function(id, frm){
                var changes= formChanges.whatChanged(frm);
                if(!_.isEmpty(changes)){
                    adminApi.facilityJobTitles.update(id, changes).success(function(){
                        $state.go("setup.facility_job_titles");
                    }).error(function(error){
                        $scope.alert = error.error;
                    });
                }
            };
            $scope.deleteFacilityJobTitle = function(id){
                adminApi.facilityJobTitles.remove(id).success(function(){
                    $state.go("setup.facility_job_titles");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };

            $scope.createFacilityJobTitle = function(title){
                adminApi.facilityJobTitles.create(title).success(function(){
                    $state.go("setup.facility_job_titles");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };
        }]
    )

    /**
        Facility Regulatory Body

    **/
    .controller("mfl.setup.controller.facilityRegulatoryBody.list", ["$scope",
        function ($scope) {
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Regulatory Body"
                }
            ];
            $scope.action = [
                {
                    func : "onclick=window.history.back()",
                    class: "action-btn action-btn-primary action-btn-md",
                    color: "blue",
                    tipmsg: "Go back",
                    icon: "fa-arrow-left"
                }
            ];
        }]
    )
    .controller("mfl.setup.controller.facilityRegulatoryBody.view", ["$scope","$state",
                "$stateParams",
                "adminApi","mfl.common.forms.changes",
        function($scope, $state, $stateParams, adminApi, formChanges){
            $scope.title = [
                {
                    icon: "fa-phone",
                    name: "Manage Facility Regulatory Body"
                }
            ];
            if(!_.isUndefined($stateParams.id)){
                adminApi.facilityRegulatoryBodies.get($stateParams.id).success(function(data){
                    $scope.facilityRegulatoryBodies = data;
                    $scope.edit = true;
                }).error(function(error){
                    $scope.alert = error.error;
                });
            }

            $scope.updateFacilityRegulatoryBody = function(id, frm){
                var changes= formChanges.whatChanged(frm);
                if(!_.isEmpty(changes)){
                    adminApi.facilityRegulatoryBodies.update(id, changes).success(function(){
                        $state.go("setup.facility_regulatory_bodies");
                    }).error(function(error){
                        $scope.alert = error.error;
                    });
                }
            };
            $scope.deleteFacilityRegulatoryBody = function(id){
                adminApi.facilityRegulatoryBodies.remove(id).success(function(){
                    $state.go("setup.facility_regulatory_bodies");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };

            $scope.createFacilityRegulatoryBody = function(regulatoryBody){
                adminApi.facilityRegulatoryBodies.create(regulatoryBody).success(function(){
                    $state.go("setup.facility_regulatory_bodies");
                }).error(function(error){
                    $scope.alert = error.error;
                });
            };
        }]
    );

})(angular);
