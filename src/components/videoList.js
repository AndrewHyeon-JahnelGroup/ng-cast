angular.module('video-player')
.component('videoList', {
  bindings: {
    toshowvideos: '<',
    onclicktitle: '<',
    onpagination: '<',
  },
  controller: function() {
    this.pagearray = _.range(1, 6);
  },
  templateUrl: 'src/templates/videoList.html'
});
