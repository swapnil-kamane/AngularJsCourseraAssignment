(function () {
	'use strict';
	
	angular.module('LunchCheck').controller('LunchCheckController', LunchCheckController);
	
	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope) {
		
		$scope.submitList = function (disheslist) {
			let dishcount = checkdish(disheslist);
			
			if (dishcount == 0) {
				$scope.message = 'Empty !!';
			}
			else if (dishcount <= 3) {
				$scope.message = 'Enjoy !!';
			} 
			else {
				$scope.message = 'Too much !!';
			}
			
		};
		
		function checkdish(disheslist) {
			let counter = 0;
			if (disheslist) {
				let dishesarray = disheslist.split(',');
				for (let i in dishesarray) {
					if (dishesarray[i].trim().length != 0) {
						counter++;
					}
				}
			}
			else{
				$scope.message = 'Empty !!';
			}
			
			return counter;
		}
	}
})();