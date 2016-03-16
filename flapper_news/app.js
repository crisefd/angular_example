
(function(){

	var app = angular.module('flapperNews', ['ui.router']);

	app.factory('posts', function(){
		return{
			  p : [{title:'Google', link:'www.google.com', upvotes: 0, comments:[]}]
			}
	});

	app.controller('MainCtrl', [
								'$scope',
								'posts',
								function($scope, posts){

								  $scope.posts = posts.p;

									$scope.addPost = function(){
										if(!$scope.title || $scope.title === '') { return; }
										$scope.posts.push({
															title: $scope.title,
															link: $scope.link,
															upvotes: 0,
															comments: [
																{author: 'Joe', body: 'Cool post!', upvotes: 0},
																{author: 'Bob', body: 'Great idea!', upvotes: 1},
															]
														});
										$scope.title = '';
										$scope.link = '';
										//alert($scope.posts.pop().title);
									};
									$scope.incrementUpvotesPost = function(post) {
									  post.upvotes += 1;
									};
								}
							]);

	app.controller('PostCtrl', [
								'$scope',
								'$stateParams',
								'posts',
								function($scope, $stateParams, posts){
									$scope.post = posts.p[$stateParams.id];
									//alert($scope.post.comments);
									$scope.addComment = function(){
										if($scope.body === ''){ return; }
										$scope.post.comments.push(
												{
													body: $scope.body,
													author: 'user',
													upvotes: 0
												});
										$scope.body = '';
									};
									$scope.incrementUpvotesComment = function(comment) {
									  comment.upvotes += 1;
									};
								}
							]);
	app.config(function($stateProvider, $urlRouterProvider) {
				  $stateProvider.state(
				  	'home',
				  	{
				     	url: '/home',
				     	templateUrl: '/home.html',
				     	controller: 'MainCtrl'
					});
				  $urlRouterProvider.otherwise('home');
				  $stateProvider.state(
				  	'posts',
				  	{
				  		url: '/posts/{id}',
				  		templateUrl: '/posts.html',
				  		controller: 'PostCtrl'
				    });
				});
	})();