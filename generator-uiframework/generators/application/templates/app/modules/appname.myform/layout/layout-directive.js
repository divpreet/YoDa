(function appnameLayoutDirective() {
    'use strict';
    angular.module('appname.myform.layout').directive('appnameMyformLayout', layout);

    layout.$inject = [];

    function layout() {
        var directive = {
            restrict: 'EA',
            template: require('./layout-template.html'),
            scope: {
                myParam: '@'
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
            scope.message = 'Welcome';
        }
    }

		Controller.$inject = ['$scope', '$state', 'demoFactory','Restangular','$http', 'idvFactory', 'Logger'];

	function Controller($scope, $state, demoFactory,Restangular,$http, idvFactory, logger) {
        var vm = this;
        vm.comboModel = "";
        vm.typeaheadModel = "";
        vm.blockModel = "";
        vm.address = {};
        vm.address.qasAddress = "";
        vm.address.mailingName1 = "";
        vm.address.mailingName2 = "";
        vm.address.mailingName3 = "";
        vm.address.overseasState = "";
        vm.address.state = {
            "code": "",
            "value": ""
        };
        vm.address.city = "";
        vm.address.addcity = "";
        vm.address.pocode = "";
        vm.address.addr2 = "";
        vm.address.addr1 = "";
        vm.address.postCode = "";
        vm.address.showAddressFields = "N";
        vm.addressList = [];
        vm.formattedAddress = {};
        vm.states = [];
        vm.countryList = [];
        vm.smallList = [{
            code: 'CHS',
            value: 'CHS'
        }, {
            code: 'GHS',
            value: 'GHS'
        }];
        vm.tilesModel = "";
        vm.multiInputModel = [];
        vm.multiInput = {
            country: '',
            tin: '',
            tinNotApplicable: false,
            reason: ''
        };

        vm.testForm = {};
        // get the username from the userFactory
        // We are getting the user data during the resolve of the base route
        // so the user factory is already populated

        //vm.firstName = userFactory.current.userName;

        vm.onCommonValidateBlur = function () {
            console.log('Common Validate Blur ');
        };

        vm.onCommonValidateChange = function (fieldName, model, isFieldValid, isKeyPressed) {
            console.log('Common Validate Change' + isKeyPressed);
        };

        vm.isFieldInvalid = function (fieldName) {
            return (vm.testForm && vm.testForm[fieldName] && vm.testForm[fieldName].$invalid && ((vm.testForm.$submitted && vm.testForm[fieldName].$dirty) || vm.testForm[fieldName].$touched));
        };


				logger.log("idvFactory", idvFactory);
						vm.idv = idvFactory.evDocDetails;
        demoFactory.fetchDemoList().then(function () {

                vm.user = demoFactory.demoList;
                vm.busClass = demoFactory.demoBusClassList;
                vm.firstName = vm.user.userName;
                vm.states = demoFactory.states;
                vm.countryList = demoFactory.countryList;
                console.log(vm.firstName);
                var isLocal = true;
                var promise;
                /**
                 * get address component from unique Id and set it into scope variable
                 * @param idValue
                 */
                $scope.getAddress = function (idValue) {
                    if (isLocal) {
                        promise = $http.get('formattedAddress.json');
                        promise.then(function (response) {
                            vm.formattedAddress = response.data;
                        }, function () {
                            vm.formattedAddress = {};
                        });
                    } else {
                        var a = Restangular.one('qas/1.0/address/components/' + idValue);
                        promise = a.get();
                        promise.then(function (response) {
                            vm.formattedAddress = response.data;
                        }, function () {
                            vm.formattedAddress = {};
                        });
                    }
                };
                /**
                 * Get list of matching suggestions from QAS and set it into scope variable
                 * @param addressValue
                 */
                $scope.getAddressList = function (addressValue) {
                    if (isLocal) {
                        promise = $http.get('response.json');
                        promise.then(function (response) {
                            var responseData = response.data;
                            if (responseData !== null) {
                                var data = responseData.Items;
                                vm.addressList = data;
                            } else {
                                vm.addressList = [];
                            }
                        }, function () {
                            vm.addressList = [];
                        });
                    } else {
                        var a = Restangular.one("qas/1.0/addresses/?addrVal=" + addressValue);
                        promise = a.get();
                        promise.then(function (response) {
                            var responseData = response.data;
                            if (responseData !== null) {
                                var data = responseData.Items;
                                vm.addressList = data;
                            } else {
                                vm.addressList = [];
                            }
                        }, function () {
                            vm.addressList = [];
                        });
                    }
                };

            },
            function () {
                console.log("error");
            });


    }
})();
