(function(){
var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
		});
	
	app.controller('PanelController', function(){
		this.tab = 1;
		this.selectTab = function(setTab){
			this.tab = setTab;
		}
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		}
		});
		
	var gems = [{
			    name: 'Ruby', 
			    price: 3,
			    description: 'Un ruby de color rojo',
			    canPurchase: true,
			    soldOut: false,
			    images: [{
					 full: "https://rossta.net/assets/images/icon-ruby-2f9d22cf.png",
					 thumb: "http://www.phidgets.com/wiki/images/thumb/b/ba/Icon-Ruby.png/64px-Icon-Ruby.png"
					}],
				reviews:[
						{
						 stars: 5,
						 body: "I love this product",
						 author: "Some guy"
						},
						{
						 stars: 4,
						 body: "Great product",
						 author: "Another guy"
							}
				]
			   },
			   {
				 name: 'Perla',
				 price: 2,
				 description: 'Una perla redonda',
				 canPurchase: true,
				 soldOut: false,
				  images: [{
					 full: "http://lemerg.com/data/wallpapers/36/671128.jpg",
					 thumb: "http://vignette4.wikia.nocookie.net/paradise-bay/images/7/73/Pearl.png/revision/latest?cb=20150909220203"
					}]
			   },
			   {
				 name: 'Diamante',
				 price: 2,
				 description: 'Un diamante duro',
				 canPurchase: false,
				 soldOut: true,
				  images: [{
					 full: "http://www.shapur.com/wp-content/uploads/2015/08/round-cut-diamond.jpg",
					 thumb: "http://icons.iconarchive.com/icons/artdesigner/my-secret/128/diamond-icon.png"
					}]
			   }
			   ]
})();
