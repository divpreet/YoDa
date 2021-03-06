describe('yoda.catwalk.components', function() {
	var $compile,
	$rootScope;

	// Load the module, which contains Object-editor
	beforeEach(angular.mock.module('yoda.catwalk.components'));

	// Store references to $rootScope and $compile
	// so they are available to all tests in this describe block
	beforeEach(inject(function(_$compile_, _$rootScope_){
		// The injector unwraps the underscores (_) from around the parameter names when matching
		$compile = _$compile_;
		$rootScope = _$rootScope_;
	}));

	// example nested describe
	describe('display parameter myParam', function() {

		// test example
		// it('display "Hello world" when my-param="Hello world"', function() {
		// 	// Compile a piece of HTML containing Object-editor
		// 	var element = $compile('<yoda-object-editor my-param="Hello world"></yoda-object-editor>')($rootScope);
		//
		// 	$rootScope.$digest();
		//
		// 	expect(element.html()).toContain('Hello world');
		// });

	});

});
