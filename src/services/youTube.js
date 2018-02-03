angular.module('video-player')
  .service('youTube', function(){
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        key: "YOUTUBE_API_KEY",
        type: 'video',
        maxResults: '5',
        q: searchText
      }
    }).success( function (data) {
      if (data.items.length === 0) {
        $scope.youtubeData = 'No results were found!';
      }
      $ctrl.youtubeSearchText = searchText;
      $ctrl.videos = data.items;
    });
  });