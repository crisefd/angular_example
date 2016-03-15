
(function(){
	var app = angular.module('flapperNews', []);
	app.factory('posts', function(){
		return{
			  p : [{title:'Google', link:'www.google.com', upvotes: 0}]
			}
	});

	 app.controller('MainCtrl', 
			function($scope, posts){
			  $scope.posts = posts.p;
				$scope.addPost = function(){
					if(!$scope.title || $scope.title === '') { return; }
					$scope.posts.push({
										title: $scope.title,
										link: $scope.link,
										upvotes: 0,
									});
	 				//alert($scope.posts[0].title)
					$scope.title = '';
					$scope.link = '';
				};
				$scope.incrementUpvotes = function(post) {
				  post.upvotes += 1;
				};
	});
})();