(function(){
var app = angular.module('store', ['ngAnimate', 'ui.bootstrap']);

	app.controller('StoreController', function(){
		this.products = gems;
		});

	app.controller('ReviewController', function(){
		this.review = {};
		this.rate = 7;
		this.max = 10;

		this.hoveringOver = function(value){
			this.rate = value;
			console.log("hover " + value);
			// alert(value);
			this.percent = 100 * (value / this.max);
		};

		this.rateOnClick = function(){
			console.log("click " + this.rate)
			this.review.stars = this.rate;
		};

		this.addReview = function(product){
				product.reviews.push({author: this.review.author, stars: this.review.stars, body: this.review.body});
				this.review = {};
		};
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

	app.controller('RatingController', function(){
		this.rate = 7;
		this.max = 10;

		this.hoveringOver = function(value){
			this.overStar = value;
			this.percent = 100 * (value / this.max);
		};
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
				 name: 'Diamante',
				 price: 2,
				 description: 'Un diamante duro',
				 canPurchase: false,
				 soldOut: true,
				  images: [{
					 full: "http://www.shapur.com/wp-content/uploads/2015/08/round-cut-diamond.jpg",
					 thumb: "http://icons.iconarchive.com/icons/artdesigner/my-secret/128/diamond-icon.png"
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

			   }
			   ]
})();
