(function(){
	var app = angular.module('store', ['storeProducts','ngRoute','ngAnimate', 'ui.bootstrap']);
	app.controller('StoreController', ['$http',function($http){
		var store = this;
		store.products = [];
		$http.get('/~crisefd/angular_example/tutorial/data-products.json')
			.success(function(data){
				store.products = data;
			});
		}]);

	app.controller('ReviewController', function(){
		this.review = {};
		this.rate = 7;
		this.max = 10;

		this.hoveringOver = function(value){
			this.rate = value;
			this.percent = 100 * (value / this.max);
		};

		this.rateOnClick = function(){
			this.review.stars = this.rate;
		};

		this.addReview = function(product){
				product.reviews.push({author: this.review.author, stars: this.review.stars, body: this.review.body});
				this.review = {};
		};
		});

	var gems = [{
			    name: 'Ruby',
			    price: 3,
			    description: 'Lorem ipsum dolor sit amet, vitae eruditi sanctus ad mea. Ipsum placerat interpretaris per ut, ei unum legendos sed. Delectus accusata ut vel, per ut case necessitatibus. Eos at unum vero melius, mea eu modo duis tacimates, partiendo scribentur usu no. Alii nostro per ea, ut maluisset temporibus eam.',
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
				 name: 'Perl',
				 price: 2,
				 description: 'Lorem ipsum dolor sit amet, est maiorum honestatis ad. An duo ponderum iudicabit, mel et fugit inani, assum fuisset blandit ei mea. Nam tale mucius possit ad, ad praesent forensibus accommodare vim, vim solum nostro ei. Prompta praesent usu et, quo at harum fabellas hendrerit. Pro at oblique commune, vis dicit tempor philosophia an, quo zril appareat assueverit ei.',
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
				 name: 'Diamond',
				 price: 2,
				 description: 'Lorem ipsum dolor sit amet, mei ut porro vituperatoribus. Has ancillae dissentias accommodare ea, tota summo posidonium at sit. Vix agam nominati scriptorem no, et ridens causae constituam sit. Esse malis repudiandae usu ne, viderer moderatius in has. Ad sea facer iudico. Ullum prodesset vel at, ad mei purto impetus commune.',
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
