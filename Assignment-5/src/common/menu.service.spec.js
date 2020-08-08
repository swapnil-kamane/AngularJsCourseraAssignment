describe('menuservice', function () {
	
	var menuservice;
	var $httpBackend;
	var ApiPath;
	
	beforeEach(function () {
		module('common');
		
		inject(function ($injector) {
			menuservice = $injector.get('MenuService');
			$httpBackend = $injector.get('$httpBackend');
			ApiPath = $injector.get('ApiPath');
		});
	});
	
	it('Get categories list', function() {
		$httpBackend.whenGET(ApiPath + '/categories.json').respond(['Lunch', 'Dinner Combo']);
		menuservice.getCategories().then(function(response) {
			expect(response).toEqual(['Lunch', 'Dinner Combo']);
		});
		$httpBackend.flush();
	});
	
	it('Get menu items for category L', function() {
		$httpBackend.whenGET(ApiPath + '/menu_items.json?category=L').respond(['Orange Chicken', 'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra']);
		menuservice.getMenuItems('L').then(function(response) {
			expect(response).toEqual(['Orange Chicken', 'chunks of chicken, breaded and deep-fried with sauce containing orange peels; white meat by request: for pint $1 extra, for large $2 extra']);
		});
		$httpBackend.flush();
	});
	
	
});
