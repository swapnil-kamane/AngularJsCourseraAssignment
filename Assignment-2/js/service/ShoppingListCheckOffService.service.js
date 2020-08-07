(function () {
	'use strict';
	
	angular.module('ShoppingListCheckOff').service('ShoppingListCheckOffService', ShoppingListCheckOffService);
	
	function ShoppingListCheckOffService() {
		let vm = this;
		vm.toBuyItems = [
			{ name: "Cookies", quantity: 10 },
			{ name: "Tea Powder", quantity: 3 },
			{ name: "Milk", quantity: 2 },
			{ name: "Coffee", quantity: 4 },
			{ name: "Chips", quantity: 8 }
		];
		
		vm.boughtItems = [];
		
		vm.buyItem = function(index) {			
			vm.boughtItems.push(vm.toBuyItems[index]);
			vm.toBuyItems.splice(index, 1);
		};
		
		vm.getToBuyItems = function () {
			return vm.toBuyItems;
		};
		
		vm.getBoughtItems = function () {
			return vm.boughtItems;
		};
	}

})();	