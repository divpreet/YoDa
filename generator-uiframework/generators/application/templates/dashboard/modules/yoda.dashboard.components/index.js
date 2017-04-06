// Generated by grunt: browserify-imports
(function moduleInit_yodaDashboardComponents() {
	// Add require for other modules here
	// require('my.module.core');
	// require('../yoda.helpers.filters');

	require('../yoda.dashboard.helpers');

	// Grunt browserify-imports require all components with an index.js here
	// StartRequire
	require('./code-coverage');
	require('./collapse');
	require('./component-code-editor');
	require('./component-html-ready');
	require('./component-params-table');
	require('./component-playground');
	require('./directives-stats');
	require('./menu-icon');
	require('./object-editor');
	var angularModuleDependencies = ["yoda.dashboard.components.codeCoverage","yoda.dashboard.components.collapse","yoda.dashboard.components.componentCodeEditor","yoda.dashboard.components.componentHtmlReady","yoda.dashboard.components.componentParamsTable","yoda.dashboard.components.componentPlayground","yoda.dashboard.components.directivesStats","yoda.dashboard.components.menuIcon","yoda.dashboard.components.objectEditor"];
	// EndRequire

	// Add your angular module dependencies here
	angularModuleDependencies.push('yoda.dashboard.helpers');


	angular.module('yoda.dashboard.components', angularModuleDependencies);

})();
