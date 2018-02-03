angular.module('video-player')
  .component('videoListEntry', {
    bindings: {
      videos: '=',
      video: '=',
    },

    templateUrl: './src/templates/videoListEntry.html',
  });
