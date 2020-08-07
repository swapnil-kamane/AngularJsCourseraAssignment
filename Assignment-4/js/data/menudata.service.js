(function () {
	'use strict';
	
	angular.module('data').service('MenuDataService', MenuDataService);
	
	MenuDataService.$inject = ['$http', 'ApiBasePath'];
	
	function MenuDataService($http, ApiBasePath) {
		let vm = this;
		
		vm.getAllCategories = function() {
			return $http({
				method: "GET",
				url: (ApiBasePath + "/categories.json")
				}).then(function (response) {
				return response.data;
			});
		};
		
		vm.getItemsForCategory = function(categoryShortName) {
			return $http({
				method: "GET",
				url: (ApiBasePath + "/menu_items.json?category="+categoryShortName)
				
				}).then(function (response) {
				return response.data;
			});
		};
	}
	
})();
