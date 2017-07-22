angular.module('video-player')

.component('search', {
  // TODO
  bindings: {
    onsearch: '<',
    onkey: '<',
    onautoplay: '<'
  },

  controller: function() {
    this.searchterm = '';
    this.handlesearch = () => {
      this.onsearch(this.searchterm);
    };
    this.handlechange = _.debounce(() => {
      this.onkey(this.searchterm); 
    }, 500);
    this.handlekeypress = ($event) => {
      if ($event.keyCode === 13) {
        this.handlesearch();
      }
    };

  },
  templateUrl: 'src/templates/search.html'
});
