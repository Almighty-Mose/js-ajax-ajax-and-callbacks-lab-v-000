$(document).ready(function (){
  $.get('https://api.github.com/search/repositories?q=${searchTerms}', function(data) {
    const results = data.items.map(r => )
    
  $('#results').html(results);
  });
});
