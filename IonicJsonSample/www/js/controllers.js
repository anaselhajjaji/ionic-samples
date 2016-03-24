angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('SongsCtrl', function($scope, $http) {
    
    $scope.elementsSize = 0;
    $scope.songs = [];
    
    // Fetch songs  
    $http.get('https://raw.githubusercontent.com/anaselhajjaji/xamarin-samples/master/TestData/songs.json')
        .then(function(resp) {
            $scope.songs = resp.data;
            $scope.loadMore();
        }, function(err) {
            // err.status will contain the status code
            console.error('ERR', err);
    });
  
    // Load more for inifinite scrolling
    $scope.loadMore = function() {
        var nextSize = $scope.elementsSize;
        nextSize += 20;
        
        if (nextSize > $scope.songs.length) {
            nextSize = $scope.songs.length;
        }
        
        $scope.elementsSize = nextSize;    
        
        if (nextSize != 0) {
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    }
})

.controller('SongCtrl', function($scope, $stateParams) {
});
