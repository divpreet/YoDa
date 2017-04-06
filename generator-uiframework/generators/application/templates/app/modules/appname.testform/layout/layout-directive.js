(function appnameLayoutDirective() {
    'use strict';
    angular.module('appname.testform.layout').directive('appnameTestformLayout', layout);

    layout.$inject = [];

    function layout() {
        var directive = {
            restrict: 'EA',
            template: require('./layout-template.html'),
            scope: {
              formData: '=',
              additionalBusinessValidationOnBlur: '='
            },
            link: linkFunc,
            controller: Controller,
            controllerAs: 'vm',
            bindToController: true
        };

        return directive;

        function linkFunc(scope, el, attr, ctrl) {
          scope.message = "Hi Arun!";
        }
    }

		Controller.$inject = [];

  	function Controller() {
      var vm = this;

      console.log(vm.formData);
      vm.submit = function () {
        if(vm.testForm.$valid){
          console.log("valid");
        } else {
          console.log("invalid");
          angular.forEach(vm.testForm.$error.required, function(field) {
            console.log(field);
            field.$setDirty();
          });
        }
      };
      vm.additionalBusinessValidationOnBlur = function (fieldName) {
          console.log(fieldName);
      };
      vm.isFieldInvalid = function (fieldName) {
          return (vm.testForm && vm.testForm[fieldName] && vm.testForm[fieldName].$invalid && ((vm.testForm.$submitted && vm.testForm[fieldName].$dirty) || vm.testForm[fieldName].$touched));
      };
      vm.onCommonValidateBlur = function () {
          vm.additionalBusinessValidationOnBlur = true;
      };
      vm.isIE = function () {
        var ua = navigator.userAgent.toLowerCase();
        var ie = /msie/.test(ua);
        var ie11 = /trident/.test(ua);
        var ie12 = /edge/.test(ua);
        return (ie || ie11 || ie12) ;
      };
    }
})();
