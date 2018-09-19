$(document).ready(function (){
  $.get('https://api.github.com/search/repositories?q=${searchTerms}', function(data) {
    const results = data.items.map(r => 
    `<div>
      <img class="avatar" src="${r.owner.avatar_url}" alt="${r.owner.login}'s Avatar Image">
        <div>
        <h2><a href="${r.html_url}">${r.name}</a></h2>
        <p>${r.description} | <a href="#" data-repository="${r.name}" data-owner="${r.owner.login}" onclick="showCommits(this)">Show Commits</a></p>
        <p><a href="${r.owner.html_url}">Owner: ${r.owner.login}</a></p>
        </div>
      </div><br></br>`).join("");
    
    $('#results').html(results);
  });
});


