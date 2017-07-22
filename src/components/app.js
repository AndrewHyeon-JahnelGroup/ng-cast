angular.module('video-player')

.component('app', {
  controller: function(youTube, informationFetch) {
    this.videos = [];
    this.toshowvideos = new Array(5);
    this.currentvideo = null;
    this.numberonpage = 5;
    this.totalvideos = JSON.stringify(this.numberonpage * 5);
    this.autoplay = 0;
    this.videolengthoptions = [5, 10, 15, 25];
    this.onclicktitle = (selectedvideo) => {
      this.currentvideo = selectedvideo;
    };

    this.onsearch = (query) => {
      youTube.getVideos(query, this.updatevideos, this.totalvideos);
    };

    this.updatevideos = (newvideos) => {
      this.videos = [];
      var container = [];
      for (var i = 0; i < newvideos.length; i++) {
        container.push(newvideos[i]);
        if (container.length === this.numberonpage) {
          this.videos.push(container);
          container = [];
        }
      }
      this.currentvideo = newvideos[0];
      this.toshowvideos = this.videos[0];
    };

    this.onpagination = (pagenumber) => {
      this.toshowvideos = this.videos[pagenumber - 1];
    };

    this.updateonchange = (query) => {
      this.onsearch(query);
    };

    this.onautoplay = () => {
      this.autoplay = this.autoplay ? 0 : 1;
    };

    this.handlelistlengthclick = () => {
      console.log('this');
    };

    this.onsearch(''); 
  },

  templateUrl: 'src/templates/app.html'
});
