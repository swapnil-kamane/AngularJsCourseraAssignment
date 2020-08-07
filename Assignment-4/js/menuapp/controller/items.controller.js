(function () {
	'use strict';
	
	angular.module('MenuApp').controller('ItemsController', ItemsController);
	
	ItemsController.$inject = ['items'];
	function ItemsController(items) {
		let vm = this;
		vm.items = items;
	}
	
})();
