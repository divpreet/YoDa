// Generated by grunt: browserify-imports
(function moduleInit_appnameCommon() {
	'use strict';

	// Add require for other modules here
	// require('../my.other.module');

	// Grunt browserify-imports require all components with an index.js here
	// StartRequire
	require('./address-component');
	require('./back-button');
	require('./block-buttons');
	require('./combobox');
	require('./date-input');
	require('./dropdown');
	require('./footer');
	require('./header');
	require('./idv');
	require('./lower-case-onblur');
	require('./modal');
	require('./multi-input');
	require('./multicomponent');
	require('./popover');
	require('./progress-bar');
	require('./sortable-table-accordion');
	require('./tabs');
	require('./tiles');
	require('./typeahead');
	require('./text-field');
	require('./validate');
	var modules = ["appname.common.textField", "appname.common.validate", "appname.common.addressComponent","appname.common.backButton","appname.common.blockButtons","appname.common.combobox","appname.common.dateInput","appname.common.dropdown","appname.common.footer","appname.common.header","appname.common.idv","appname.common.lowerCaseOnblur","appname.common.modal","appname.common.multiInput","appname.common.multicomponent","appname.common.popover","appname.common.progressBar","appname.common.sortableTableAccordion","appname.common.tabs","appname.common.tiles","appname.common.typeahead"];
	// EndRequire

	// Add your angular module dependencies here
	// modules.push('my.other.module');

	angular.module('appname.common', modules);
})();