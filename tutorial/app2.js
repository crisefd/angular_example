(function(){
var app = angular.module('store', []);

	app.controller('controller', function(){
	this.products = gems;
		});
		
	var gems = [{
			    name: 'Ruby', 
			    price: 3,
			    description: 'un ruby',
			    canPurchase: true,
			    soldOut: false
			   },
			   {
				 name: 'Perla',
				 price: 2,
				 description: 'una perla',
				 canPurchase: true,
				 soldOut: false
			   },
			   {
				 name: 'Diamante',
				 price: 2,
				 description: 'un diamante',
				 canPurchase: false,
				 soldOut: true
			   }
			   ]
})();
