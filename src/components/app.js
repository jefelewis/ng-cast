// import { NgModule }         from '@angular/core';
// import { BrowserModule }    from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';


angular.module('video-player')
  .component('app', {
    controller: function() {
      this.videos = window.exampleVideoData;
      this.youtubeSearchText = '';
      this.boxText = '';
      this.executeSearch = function(searchText, callback) {
        console.log('IM SEARCHING');
        $ctrl.youtubeSearchText = searchText;
        callback($ctrl.youtubeSearchText);
      };
    },
    templateUrl:'./src/templates/app.html',
  });
