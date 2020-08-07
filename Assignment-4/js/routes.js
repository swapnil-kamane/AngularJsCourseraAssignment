(function () {
	'use strict';
	
	angular.module('MenuApp').config(RoutesConfig);
	
	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {
		
		$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'js/menuapp/templates/home.template.html'
		})
		.state('categoryList', {
			url: '/category-list',
			templateUrl: 'js/menuapp/templates/category-list.template.html',
			controller: 'CategoryListController as CategoryListCtrl',
			resolve: {
				items: ['MenuDataService', function (MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})
		.state('items', {
			url: '/items/{category}',
			templateUrl: 'js/menuapp/templates/items.template.html',
			controller: 'ItemsController as ItemsCtrl',
			resolve: {
				items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.category);
				}]
			}
		});
		
		$urlRouterProvider.otherwise('/');
		
	}
	
})();
