(function () {
	"use strict";
	
	angular.module('public')
	.controller('SignupController', SignupController);
	
	SignupController.$inject = ['MenuService', 'SignupService', 'menuItems'];
	
	function SignupController(MenuService, SignupService, menuItems) {
		let vm = this;
		
		vm.submit = function() {
			MenuService.getMenuItemCustom(vm.user.favourite).then(function(result) {
				vm.invalidDish = false;
				vm.user.favouriteMenuItem = result;
				SignupService.setUserPref(vm.user);
				vm.saved = true;
			},
			function(error) {
				vm.invalidDish = true;
				vm.saved = false;
			});
		};
	}
	
})();
