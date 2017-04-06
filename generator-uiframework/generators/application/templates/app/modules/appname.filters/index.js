// Generated by grunt: browserify-imports
(function moduleInit_appnameFilters() {
    'use strict';

    // Add require for other modules here
    // require('./casing/casing-filter.js');

    // Grunt browserify-imports require all components with an index.js here
    // StartRequire
	require('./casing');
	require('./trusthtml');
	var modules = ["appname.filters.casing","appname.filters.trusthtml"];
	// EndRequire

    // Add your angular module dependencies here
    // modules.push('appname.filters.casing');

    angular.module('appname.filters', modules);
})();