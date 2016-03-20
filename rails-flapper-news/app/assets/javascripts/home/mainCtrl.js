
  angular.module('flapperNews')
  .controller('MainCtrl', [
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
                  };
                  $scope.incrementUpvotesPost = function(post) {
                    post.upvotes += 1;
                  };
                }
              ]);
