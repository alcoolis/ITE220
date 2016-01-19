(function()
{
	var app = angular.module('store', ['store-products']);
	
	app.controller('StoreController', ['$http', function($http)
	{
		var store=this;
		
		store.products = [];
		
		$http.get('data/products.json').success(function(data) {
			store.products=data;
		});
	}]);
	
	app.controller('ReviewController', function()
	{
		this.review =
		{};
		
		this.addReview = function(product)
		{
			this.review.createdOn = Date.now();
			product.reviews.push(this.review);
			this.review =
			{};
		};
	});
	/*

	var gems = [
	{
		name : 'Dodecaedron',
		price : 2.95,
		description : '...',
		specifications : 'mpla mpla',
		canPurchase : true,
		soldOut : false,
		images : [
		{
			full : 'img/gem-01-full.jpg',
		},
		{

		} ],
		reviews : [
		{
			stars : 1,
			body : "asff cffdcsaf csacasc",
			author : "johan@straus",
		},
		{
			stars : 5,
			body : "asff cferwerv  er re re ref csacasc",
			author : "johewr@werweraus",
		},
		{
			stars : 3,
			body : "asff cffd ererw were csaf csacasc",
			author : "jrfn@strewrewr",
		} ],
	},
	{
		name : 'Ecsaendros',
		price : 10.95,
		description : '...',
		specifications : 'mpla mpla',
		canPurchase : true,
		soldOut : false,
		images : [
		{
			full : 'img/gem-02-full.jpg',
		},
		{

		} ],
		reviews : [
		{
			stars : 3,
			body : "asff cffdcsaf csacasc",
			author : "johan@straus",
		},
		{
			stars : 3,
			body : "asff cferwerv  er re re ref csacasc",
			author : "johew@werweraus",
		},
		{
			stars : 3,
			body : "asff cffd ererw were csaf csacasc",
			author : "jrfn@strewrewr",
		} ],
	},
	{
		name : 'icosaedron',
		price : 32,
		description : '...',
		specifications : 'mpla mpla',
		canPurchase : false,
		soldOut : false,
		images : [
		{
			full : 'img/gem-03-full.jpg',
		},
		{

		} ],
		reviews : [
		{
			stars : 2,
			body : "asff cffdcsaf csacasc",
			author : "joha@raus",
		},
		{
			stars : 2,
			body : "asff cferwerv  er re re ref csacasc",
			author : "johewr@erweraus",
		},
		{
			stars : 2,
			body : "asff cffd ererw were csaf csacasc",
			author : "jrfn@trewrewr",
		} ],
	
	},
	{
		name : 'pentaedron',
		price : 1.95,
		description : '...',
		specifications : 'mpla mpla',
		canPurchase : false,
		soldOut : false,
		images : [
		{
			full : 'img/gem-04-full.jpg',
		},
		{

		} ],
		reviews : [
		{
			stars : 5,
			body : "asff cffdcsaf csacasc",
			author : "joha@traus",
		},
		{
			stars : 5,
			body : "asff cferwerv  er re re ref csacasc",
			author : "johewr@rweraus",
		},
		{
			stars : 5,
			body : "asff cffd ererw were csaf csacasc",
			author : "jrf@trewrewr",
		} ],
	
	} ]
	*/

})();
