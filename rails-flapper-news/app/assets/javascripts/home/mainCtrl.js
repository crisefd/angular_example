
  angular.module('flapperNews')
  .controller('MainCtrl', [
                '$scope',
                'posts',
                function($scope, posts){

                  $scope.posts = posts.posts; // Delete ?

                  $scope.addPost = function(){
                    if(!$scope.title || $scope.title === '') { return; }
                    posts.create({
                              title: $scope.title,
                              link: $scope.link
                            });
                    $scope.title = '';
                    $scope.link = '';
                  };
                  $scope.incrementUpvotesPost = function(post) {
                    posts.upvotePost(post);
                  };
                }
              ]);
