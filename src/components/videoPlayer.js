angular.module('video-player')

.component('videoPlayer', {
  bindings: {
    currentvideo: '<',
    autoplay: '<'
  },

  controller: function() {
  },
  templateUrl: 'src/templates/videoPlayer.html'
});
