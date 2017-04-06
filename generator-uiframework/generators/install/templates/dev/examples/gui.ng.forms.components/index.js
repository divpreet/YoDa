// Generated by grunt: browserify-imports
(function moduleInit_guiNgFormsComponents() {

	// Add require for other modules here
	// require('my.module.core');

	// Grunt browserify-imports require all components with an index.js here
	// StartRequire
	require('./email-input');
	require('./radio-input');
	require('./text-input');
	var modules = ["gui.ng.forms.components.emailInput","gui.ng.forms.components.radioInput","gui.ng.forms.components.textInput"];
	// EndRequire

	// Add your angular module dependencies here
	// modules.push('other.module');
	angular.module('gui.ng.forms.components', modules);

})();