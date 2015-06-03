(function () {
    "use strict";

    describe("Test api wrappers", function() {

        beforeEach(function(){
            module("mflAdminAppConfig");
            module("sil.api.wrapper");
            module("mfl.users.services");
        });

        it("should have wrappers defined", function() {
            inject(["mfl.users.wrappers",function(wrappers){
                expect(wrappers.groups.apiBaseUrl).toEqual("api/users/groups/");
                expect(wrappers.users.apiBaseUrl).toEqual("api/users/");
                expect(wrappers.permissions.apiBaseUrl).toEqual("api/users/permissions/");
                expect(wrappers.groups.apiBaseUrl).toEqual("api/users/groups/");
                expect(wrappers.contact_types.apiBaseUrl).toEqual("api/common/contact_types/");
                expect(wrappers.user_contacts.apiBaseUrl).toEqual("api/common/user_contacts/");
                expect(wrappers.contacts.apiBaseUrl).toEqual("api/common/contacts/");
            }]);

        });
    });
})();