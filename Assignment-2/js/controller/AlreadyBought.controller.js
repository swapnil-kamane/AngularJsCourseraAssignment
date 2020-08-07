(function () {
	'use strict';
	
	angular.module('ShoppingListCheckOff').controller('AlreadyBoughtController', AlreadyBoughtController);	
	
	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
	
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		let vm = this;
		vm.shopitems = ShoppingListCheckOffService.getBoughtItems();
		
	}
})();