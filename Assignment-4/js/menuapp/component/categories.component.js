(function () {
	'use strict';
	
	angular.module('MenuApp').component('categories', {
		templateUrl: 'js/menuapp/templates/categories.component.template.html',
		bindings: {
			items: '<'
		}
	});
	
})();
