(function appnameProjectComponentsDirective() {
	'use strict';
	angular.module('appname.project.projectComponents').directive('appnameProjectComponents', projectComponents);

	projectComponents.$inject = [];

	function projectComponents() {
		var directive = {
			restrict: 'EA',
			template: require('./project-components-template.html'),
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

	Controller.$inject = ['$scope', '$state', 'projectFactory'];

	function Controller($scope, $state, projectFactory) {
		var vm = this;
		projectFactory.fetchProjectList().then(function() {
			vm.projects = projectFactory.projectList;
      vm.something = vm.projects.name;
			//  vm.user = projectFactory.projectList;
			//  vm.firstName = vm.user.userName;
	 },

	 function(){
			 console.log("error");
	 });
 }
})();
