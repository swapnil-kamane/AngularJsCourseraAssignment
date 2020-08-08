(function () {
	"use strict";
	
	angular.module('public')
	.service('SignupService', SignupService);
	
	function SignupService() {
		let vm = this;
		let userPref;
		
		vm.setUserPref = function(userPref) {
			vm.userPref = userPref;
		}
		
		vm.getUserPref = function() {
			return vm.userPref;
		}
		
	}
	
})();
