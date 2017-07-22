angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentvideo: '<'
  },

  controller: function() {
    console.log(this, 'yes');
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
