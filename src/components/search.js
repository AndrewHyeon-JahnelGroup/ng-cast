angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    onsearch: '<',
  
  },

  controller: function() {
    this.searchterm = '';
    this.handlesearch = () => {
      this.onsearch(this.searchterm);
    };
  },
  templateUrl: 'src/templates/search.html'
});
