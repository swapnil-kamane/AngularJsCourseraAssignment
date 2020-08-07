(function () {
	'use strict'
	
	angular.module('NarrowItDownApp').controller('NarrowItDownController', NarrowItDownController);
	
	
	NarrowItDownController.$inject = ['MenuSearchService'];
	function NarrowItDownController(MenuSearchService) {
		let vm = this;
		
		vm.searchMenuItems = function (searchTerm) {
			if (searchTerm == "") {
				MenuSearchService.clear();
				} else {
				MenuSearchService.getMatchedMenuItems(searchTerm)
				.then(function(result) {
					vm.found = result;
				});
			}
		}
		vm.found = MenuSearchService.getItems();
		
		vm.removeItem = function(itemIndex) {
			MenuSearchService.removeItem(itemIndex);
		};
	}

})();	