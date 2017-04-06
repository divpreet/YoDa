(function fullnameFactory() {
	'use strict';

	angular.module('prefix.moduleName.newFactory',[]).factory('fullname', newFactory);
	newFactory.$inject = [];

	function newFactory() {

		return newFactory;
	}

})();
