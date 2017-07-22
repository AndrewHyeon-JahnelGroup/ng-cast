angular.module('video-player')
.component('videoList', {
  bindings: {
    videos: '<',
    onclicktitle: '<'
  },
  controller: function() {
    // console.log(this, this.videos, 'this');
    // console.log(this.videos, 'video');
    // console.log(this.data, 'data');
  },
  templateUrl: 'src/templates/videoList.html'
});
