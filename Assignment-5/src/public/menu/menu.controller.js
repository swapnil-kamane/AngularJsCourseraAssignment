(function () {
	"use strict";
	
	angular.module('public')
	.controller('MenuController', MenuController);
	
	MenuController.$inject = ['menuCategories'];
	function MenuController(menuCategories) {
		let vm = this;
		vm.menuCategories = menuCategories;
	}
	
	
})();
