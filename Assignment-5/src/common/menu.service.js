(function () {
	"use strict";
	
	angular.module('common')
	.service('MenuService', MenuService);
	
	
	MenuService.$inject = ['$http', 'ApiPath'];
	function MenuService($http, ApiPath) {
		let vm = this;
		
		vm.getCategories = function () {
			return $http.get(ApiPath + '/categories.json').then(function (response) {
				return response.data;
			});
		};
		
		
		vm.getMenuItems = function (category) {
			let config = {};
			if (category) {
				config.params = {'category': category};
			}
			
			return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
				return response.data;
			});
		};
		
		vm.getMenuItemCustom = function (shortName) {
			if (shortName) {
				return $http.get(ApiPath + "/menu_items.json?category=" + shortName).then(function (response) {
					return response.data;
				});
			}
		}
		
	}
	
	
	
})();
