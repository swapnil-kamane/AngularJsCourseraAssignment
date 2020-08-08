(function () {
	"use strict";
	
	angular.module('public')
	.controller('MenuItemsController', MenuItemsController);
	
	MenuItemsController.$inject = ['menuItems'];
	function MenuItemsController(menuItems) {
		let vm = this;
		vm.menuItems = menuItems;
	}
	
})();
