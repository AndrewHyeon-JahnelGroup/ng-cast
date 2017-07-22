angular.module('video-player')

.component('app', {
  controller: function(youTube) {
    this.videos = window.exampleVideoData;
    this.currentvideo = window.exampleVideoData[0];
    // console.log(this.videos);
    // console.log(this);
    this.onclicktitle = (selectedvideo) => {
      this.currentvideo = selectedvideo;
    };
    this.onsearch = (query) => {
      youTube.getVideos(query, this.updatevideos);
    };
    this.updatevideos = (newvideos) => {
      this.videos = newvideos;
      this.currentvideo = newvideos[0];
    };
  },

  templateUrl: 'src/templates/app.html'
});
