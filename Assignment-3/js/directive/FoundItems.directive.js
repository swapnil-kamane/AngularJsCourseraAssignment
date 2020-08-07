(function () {
	'use strict'
	
	
	angular.module('NarrowItDownApp').directive('foundItems', FoundItemsDirective);
	
	function FoundItemsDirectiveController() {
		let foundCtrl = this;
		
		foundCtrl.isNothingFound = function() {
			if (foundCtrl.items.length == 0) {
				return true;
			}
			return false;
		};
	}
	
	function FoundItemsDirective() {
		var directive = {
			templateUrl: 'js/directive/foundItems.html',
			scope: {
				items: '<',
				onRemove: '&'
			},
			controller: FoundItemsDirectiveController,
			controllerAs: 'foundCtrl',
			bindToController: true
		};
		
		return directive;
	}
	
})();	