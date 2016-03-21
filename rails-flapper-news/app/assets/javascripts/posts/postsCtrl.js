
  angular.module('flapperNews')
  .controller('PostsCtrl', [
                '$scope',
                '$stateParams',
                'posts',
                function($scope, $stateParams, posts){
                  $scope.post = posts.post[$stateParams.id];
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
