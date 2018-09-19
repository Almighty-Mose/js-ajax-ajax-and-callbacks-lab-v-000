$(document).ready(function (){
  $.get('https://api.github.com/search/repositories?q=${searchTerms}', function(data) {
    const results = data.items.map(r => 
    `<img class="avatar" src="${r.owner.avatar_url}" alt="${r.owner.login}'s Avatar Image>
    <h2><a href=${r.html_url}>`
    )
    
  $('#results').html(results);
  });
});
