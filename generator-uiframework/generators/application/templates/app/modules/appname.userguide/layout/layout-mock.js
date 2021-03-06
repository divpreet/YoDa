scope.mock = {
	'simple_string': { value: 'Hello world', mandatory: true },
	'simple_string_with_options' : { value: 'foo', mandatory: true, options: ['foo', 'bar'] },
	'simple_list' : { value: ['Yo:da', 'Component', 'Generator'], mandatory: true },
	'simple_object' : { value: {}, mandatory: true },
	'simple_boolean' : { value: true, mandatory: false },
	'type' : { value: 'success', mandatory: true, options: ['success', 'warning', 'danger'] },
	'closeButton': { value: true, mandatory: false },
	'isClosed' : { value: false, mandatory: false }
};
