// Generated by grunt: browserify-imports
(function moduleInit_yodaCatwalkComponents() {
	// Add require for other modules here
	// require('my.module.core');
	// require('../yoda.helpers.filters');

	require('../yoda.catwalk.helpers');

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
	var modules = ["yoda.catwalk.components.codeCoverage","yoda.catwalk.components.collapse","yoda.catwalk.components.componentCodeEditor","yoda.catwalk.components.componentHtmlReady","yoda.catwalk.components.componentParamsTable","yoda.catwalk.components.componentPlayground","yoda.catwalk.components.directivesStats","yoda.catwalk.components.menuIcon","yoda.catwalk.components.objectEditor"];
	// EndRequire

	// Add your angular module dependencies here
	modules.push('yoda.catwalk.helpers');


	angular.module('yoda.catwalk.components', modules);

})();