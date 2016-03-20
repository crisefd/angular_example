
  angular.module('flapperNews')
  .factory('posts', function(){
    return{
        p : [{title:'Google', link:'www.google.com', upvotes: 0, comments:[]}]
      }
  });
