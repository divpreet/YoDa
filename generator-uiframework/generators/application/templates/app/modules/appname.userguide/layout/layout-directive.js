(function appnameLayoutDirective() {
	'use strict';
	angular.module('appname.userguide.layout').directive('appnameLayout', layout);

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


	Controller.$inject = ['$scope', '$state'];

	function Controller($scope, $state) {
			var vm = this;
		 function resetOuterTabs() {
				angular.element('#gettingStartedTab').removeClass('is-active');
				angular.element('#angularStandardsTab').removeClass('is-active');
				angular.element('#moreInfoTab').removeClass('is-active');
				angular.element('#componentTab').removeClass('is-active');
				angular.element('#yodaNodeModulesTab').removeClass('is-active');

				angular.element('#gettingStartedContent').removeClass('is-open');
				angular.element('#angularStandardsContent').removeClass('is-open');
				angular.element('#moreInfoContent').removeClass('is-open');
				angular.element('#componentContent').removeClass('is-open');
				angular.element('#yodaNodeModulesContent').removeClass('is-open');

			}

			function resetInnerTabs() {
				angular.element('#directiveTab').removeClass('is-active');
				angular.element('#unitTestTab').removeClass('is-active');
				angular.element('#mockTab').removeClass('is-active');
				angular.element('#htmlTemplateTab').removeClass('is-active');
				angular.element('#lessTab').removeClass('is-active');
				angular.element('#dashboardTab').removeClass('is-active');
				angular.element('#indexFileTab').removeClass('is-active');
				angular.element('#innerIntroTab').removeClass('is-active');

				angular.element('#directiveContent').removeClass('is-open');
				angular.element('#unitTestContent').removeClass('is-open');
				angular.element('#mockContent').removeClass('is-open');
				angular.element('#htmlTemplateContent').removeClass('is-open');
				angular.element('#lessContent').removeClass('is-open');
				angular.element('#dashboardContent').removeClass('is-open');
				angular.element('#indexFileContent').removeClass('is-open');
				angular.element('#innerIntroContent').removeClass('is-open');
			}

			vm.toggleOuterTabs = function(target, tabId) {
				console.log("Click");
				resetOuterTabs();
				angular.element('#' + tabId).addClass('is-open');
				angular.element('#' + target).addClass('is-active');
			};

			vm.toggleInnerTabs = function (target, tabId) {
				console.log("Click inner");
				resetInnerTabs();
				angular.element('#' + tabId).addClass('is-open');
				angular.element('#' + target).addClass('is-active');
			};

	}

})();
