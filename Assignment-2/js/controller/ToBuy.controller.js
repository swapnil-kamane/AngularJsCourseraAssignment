(function () {
	'use strict';
	
	angular.module('ShoppingListCheckOff').controller('ToBuyController', ToBuyController);
	
	ToBuyController.$inject = ['ShoppingListCheckOffService'];
	
	function ToBuyController(ShoppingListCheckOffService) {
		let vm = this;
		vm.buy = function(index) {
			ShoppingListCheckOffService.buyItem(index);
		};
		
		vm.shopitems = ShoppingListCheckOffService.getToBuyItems();
	}

})();	