// import { NgModule }         from '@angular/core';
// import { BrowserModule }    from '@angular/platform-browser';
// import { HttpClientModule } from '@angular/common/http';


angular.module('video-player')
  .component('app', {
    controller: function(youTube) {
      this.videos = window.exampleVideoData;
      this.youtubeSearchText = '';
      this.boxText = '';
      this.newData = function(data) {
        this.videos = data;
      }.bind(this);

      this.searchClick = function(query, callback) {
        youTube.search(query, callback);
      };


    },
    templateUrl:'./src/templates/app.html',
  });
