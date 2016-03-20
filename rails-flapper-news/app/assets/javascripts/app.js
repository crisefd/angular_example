
(function(){

	var app = angular.module('flapperNews', ['ui.router', 'templates']);


	app.config(function($stateProvider, $urlRouterProvider) {
				  $stateProvider.state(
				  	'home',
				  	{
				     	url: '/home',
				     	templateUrl: 'home/_home.html',
				     	controller: 'MainCtrl'
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
	})();
