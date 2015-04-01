"use strict";

angular.module("mfl.facilities.services", [])

    .service("mfl.facilities.services.facilities", ["mfl.common.providers.requests",
        function (requests) {
            var url = {
                    facilities : "api/v1/facilities"
                };

            this.getFacilitiesBackend = function () {
                return requests.callApi("GET", url.facilities);
            };

            this.getFacilities = function () {
                var facilities = {
                    results : [
                        {
                            code : "MFL001",
                            name : "Opongi's Xrays",
                            date : "31 March, 2013",
                            description : "Facilities specialized in offers xray &"+
                                            " radiology services",
                            status : "PENDING"
                        },
                        {
                            code : "MFL002",
                            name : "Tanny's Physicians",
                            date : "31 July, 2011",
                            description : "Facility has physiotherapy equipment as well as "+
                                            " scanners & X-ray facilities",
                            status : "DRAFT"
                        },
                        {
                            code : "MFL003",
                            name : "Kuzaa Facilities",
                            date : "31 December, 2012",
                            description : "Facilities specialized cat scans utlra-sounds and"+
                                            " the likes",
                            status : "APPROVED"
                        }
                    ]
                };
                return facilities;
            };
        }]);