(function () {
	'use strict';
	
	angular.module('MenuApp').component('items', {
		templateUrl: 'js/menuapp/templates/items.component.template.html',
		bindings: {
			items: '<'
		}
	});
	
})();
