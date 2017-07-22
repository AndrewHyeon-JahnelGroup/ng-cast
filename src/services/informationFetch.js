angular.module('video-player')
.service('informationFetch', function($http) {
  this.results = {};
  this.getInfo = function(query, callback) {
    var result;
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        maxResults: '5',
        part: 'contentDetails, statistics',
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY,
        chart: 'mostPopular'
      }
    }).then((data) => {
      console.log(data);
      callback(data.data.items);
    }, () => {
      console.log('error');
    });
  
    // if (result) {return result};
  //   });
  };
});