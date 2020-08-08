(function () {
	"use strict";
	
	angular.module('public')
	.controller('MyinfoController', MyinfoController);
	
	MyinfoController.$inject = ['SignupService', 'ApiPath'];
	
	function MyinfoController(SignupService, ApiPath) {
		let vm = this;
		vm.userPref = SignupService.getUserPref();
		vm.basePath = ApiPath;
	}
	
})();