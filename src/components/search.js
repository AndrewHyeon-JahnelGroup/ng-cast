angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    onsearch: '<',
    onkey: '<'
  },

  controller: function() {
    this.searchterm = '';
    this.handlesearch = () => {
      this.onsearch(this.searchterm);
    };
    this.handlechange = _.debounce(() => {
      this.onkey(this.searchterm); 
    }, 500);

  },
  templateUrl: 'src/templates/search.html'
});
