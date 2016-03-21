
angular.module('flapperNews', ['ui.router', 'templates'])
.config(function($stateProvider, $urlRouterProvider) {
				  $stateProvider.state(
				  	'home',
				  	{
				     	url: '/home',
				     	templateUrl: 'home/_home.html',
				     	controller: 'MainCtrl',
							resolve: {
								postPromise: ['posts', function(posts){
									return posts.getAll();
								}]
							}
					});
				  $urlRouterProvider.otherwise('home');
				  $stateProvider.state(
				  	'posts',
				  	{
				  		url: '/posts/{id}',
				  		templateUrl: 'posts/_posts.html',
				  		controller: 'PostsCtrl'
				    });
				});
