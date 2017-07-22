angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    video: '<',
    onclicktitle: '<'
  },

  controller: function() {
    this.handleclick = function() {
      this.onclicktitle(this.video);
    };
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
