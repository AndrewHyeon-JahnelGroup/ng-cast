angular.module('video-player')
.service('youTube', function($http) {
  this.results = {};
  this.getVideos = function(query, callback) {
    var result;
    $http.get('https://www.googleapis.com/youtube/v3/search', {
      params: {
        q: query,
        maxResults: '5',
        part: 'snippet',
        type: 'video',
        videoEmbeddable: 'true',
        key: window.YOUTUBE_API_KEY,
        chart: 'mostPopular'
      }
    }).then((data) => {
      console.log('1click');
      callback(data.data.items);
    }, () => {
      console.log('error');
    });
  
    // if (result) {return result};
  //   });
  };
});
// $scope.getYoutubeData = function(searchText){
//         $http.get('https://www.googleapis.com/youtube/v3/search', {
//             params: {
//                 key: "API_KEY",
//                 type: 'video',
//                 maxResults: '12',
//                 pageToken: $scope.nextPage ? $scope.nextPage : '',
//                 part: 'id,snippet',
//                 fields: 'items/id,items/snippet/title,items/snippet/description,items/snippet/thumbnails/default,items/snippet/channelTitle,nextPageToken,prevPageToken',
//                 q: searchText
//             }
//         }).success( function (data) {
//             if (data.items.length === 0) {
//                 $scope.youtubeData = 'No results were found!';
//             }
//             $scope.youtubeSearchText = searchText;
//             $scope.youtubeData = data.items;
//             $scope.nextPageToken = data.nextPageToken;
//             $scope.prevPageToken = data.prevPageToken;
//         });
//     };
