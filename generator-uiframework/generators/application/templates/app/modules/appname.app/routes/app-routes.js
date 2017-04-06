(function () {
	'use strict';

	angular.module('appname').config(StateConfig);
	StateConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

	/**
	* State Configuration. This is the base configuration. Each module should have its own configuration
	* @param $stateProvider
	* @constructor
	**/
	function StateConfig($stateProvider, $urlRouterProvider) {


		$stateProvider


		////////////////
		// Base state //
		////////////////


		.state('home', {
			name: 'home',
			'abstract': true,
			resolve: {
				data: ['kickstartFactory', function (kickstartFactory) {
					return kickstartFactory.getAppData();
				}]
			},
			views: {
				/** Find the views named in index.html and inject the named views**/
				'header': {
					template: '<appname-header></appname-header>'
				},
				'footer': {
					template: '<appname-footer brand="$root.brand"></appname-footer>'
				},
				'content': {
					template: '<div class="appname-app-layout__main" ui-view></div>'
				}
			}
		})

		//////////////////////////////
		// 0 - Preferences 		   //
		/////////////////////////////

		.state('home.preferences', {
				url: '/preferences',
				template: '<appname-preferences-layout></appname-preferences-layout>',
				data: {

				}
		})


		///////////////////
		// Welcone state //
		///////////////////


		.state('home.welcome', {
			url: '/welcome',
			template: '<appname-welcome-help class="appname-app-layout__main__center-main-panel"></appname-welcome-help>'
		})

		///////////////////
		// Project state //
		///////////////////


		.state('home.project', {
			url: '/project',
			template: '<appname-project-components class="appname-app-layout__main__center-main-panel"></appname-project-components>'
		})

		///////////////////
		// User guide state //
		///////////////////

		.state('home.userguide', {
			url: '/userguide',
			template: '<appname-layout class="appname-app-layout__main__center-main-panel"></appname-layout>'
		})



		///////////////////
		// myForm state //
		///////////////////


		.state('home.myform', {
			url: '/myform',
			template: '<appname-myform-layout class=""><h3 class="col-xs-6 col-xs-offset-3">This is for test</h3></appname-myform-layout>'
		})


		///////////////////
		// testForm state //
		///////////////////


		.state('home.testform', {
			url: '/testform',
			resolve: {
            testForm: ['baseRestangularFactory', function(baseRestangularFactory) {
							var userRest = baseRestangularFactory.fetchAll('testFormData');
							var resp = userRest.customGET("");
							return resp;
            }]
			},
			controller: ['$scope', 'testForm', function($scope, testForm){
						$scope.testForm = testForm.textField;
			}],
			template: '<appname-testform-layout form-data="testForm"></appname-testform-layout>'
		});

		//////////
		// Else //
		//////////


		$urlRouterProvider.when('/', '/welcome');
		$urlRouterProvider.when('', '/welcome');

	}
})();
