$(document).ready(function(){

//JSON request to Youtube
  var url;
  var ID;
  var params = {
    key: 'AIzaSyAFRBimlEH1PZiHUHVc40VOQMm9J8XqHD0',
    part: 'snippet',
    type: 'video',
    q: 'eggs'
  };
  url = 'https://www.googleapis.com/youtube/v3/search';

  $.getJSON(url, params, function(data){
    //showResults(data);
    url = data.items[0].snippet.thumbnails.medium.url;
    ID = data.items[0].id.videoId;
    $('#search-results').append("<a href='https://www.youtube.com/watch?v=" + ID + "'>" + "<img src='" + url + "'>" + "</a>");
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

