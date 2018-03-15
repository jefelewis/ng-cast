angular.module('video-player')
  .service('youTube', function($http) {
    this.search = function (query, callback) {
      console.log('YOUTUBE IS FIRING');
      $http({
        method: 'GET',
        url: 'https://www.googleapis.com/youtube/v3/search',
        params: {
          key: window.YOUTUBE_API_KEY,
          type: 'video',
          maxResults: '5',
          q: query,
          part: 'snippet',
        }
      }).then( function (data) {
        console.log(callback);
        callback(data.data.items);


      },

      function(data) {console.log('failed', data); });

    };
  });