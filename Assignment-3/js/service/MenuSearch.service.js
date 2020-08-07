(function () {
	'use strict'
	
	angular.module('NarrowItDownApp').service('MenuSearchService', MenuSearchService);
	
	MenuSearchService.$inject = ['$http', 'ApiBasePath'];
	function MenuSearchService($http, ApiBasePath) {
		let vm = this;
		let foundItems = [];	
		
		vm.getMatchedMenuItems = function(searchTerm) {
		
			foundItems.splice(0, foundItems.length);
			if (searchTerm == "") {
				return foundItems;
			}
			return $http({
				method: "GET",
				url: (ApiBasePath)
				}).then(function(resp) {
				//console.log(resp.data.menu_items);
			
				let menu_items = resp.data.menu_items;
				foundItems.splice(0, foundItems.length);
				
				for (var i = 0; i < menu_items.length; i++) {
					
					if (searchTerm.includes(menu_items[i].description) == true) {					
						foundItems.push(menu_items[i]);
					}
				}				
				return foundItems;
			});
		};
		
		vm.clear = function() {
			foundItems.splice(0, foundItems.length);
		}
		
		vm.removeItem = function(itemIndex) {
			foundItems.splice(itemIndex, 1);
		};
		
		vm.getItems = function() {		
			return foundItems;
		};
	}
	
	
})();	