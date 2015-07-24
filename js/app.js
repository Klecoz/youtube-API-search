$(document).ready(function(){

//JSON request to Youtube
  var thumbnailUrl; //Holds image url for medium thumbnail
  var ID; //Holds ID of video for linking
  var videos; //Number of videos in search array.

  var url = 'https://www.googleapis.com/youtube/v3/search';
  var params = {
    key: 'AIzaSyAFRBimlEH1PZiHUHVc40VOQMm9J8XqHD0',
    part: 'snippet',
    type: 'video',
    q: '',
    maxResults: 6
  };

function getData() {
  $.getJSON(url, params, function(data){
    console.log(data);
    videos = data.items.length;

    //Gets the url and ID from the search request and prints each in #search-results.
    for (var i = 0; i <= videos; i++) {
    thumbnailUrl = data.items[i].snippet.thumbnails.medium.url;
    ID = data.items[i].id.videoId;
    $('#search-results').append("<a href='https://www.youtube.com/watch?v=" + ID + "'>" + "<img src='" + thumbnailUrl + "'>" + "</a>");
    }
  });

}



$('#button').on('click', function(event) {
  event.preventDefault();
  params.q = $('#query').val();
  $('#search-results').empty();
  getData();






});



/*function showResults(results){
  var html = "";
  $.each(results, function(index,value){
    html += '<p>' + value.Title + '</p>';
    console.log(value.Title);
  });
  $('#search-results').html(html);
}


$(function(){
  $('#search-term').submit(function(event){
    event.preventDefault();
    var searchTerm = $('#query').val();
    getRequest(searchTerm);
  });
});


*/
});

