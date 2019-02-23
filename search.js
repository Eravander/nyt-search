// var searchTerm = $("#searchTerm").val();
// var startYear = $("#startYear").val();
// var endYear = $("#endYear").val();
var searchTerm = "Nixon"
var startYear = 1975;
var endYear = 1980;
var apiKey = "x30Fgg73mgd1jJQy1TcFWaR0vXkqMaJo";
var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + searchTerm + "&begin_year=" + startYear + "&end_year=" + endYear + "&api-key=" + apiKey;

function articleSearch(){
$.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(object) {
      var results = object.response.docs;
      console.log(results)
      for (var i = 0; i < results.length; i++) {
      var articleDiv = $("<div>")
      var headline = $("<h2>").text(results[i].headline.main);
      var author = $("<h3>").text(results[i].byline.original);
      var snippet = $("<p>").text(results[i].snippet);

      $("#articles").append(articleDiv);
      articleDiv.append(headline);
      articleDiv.append(author);
      articleDiv.append(snippet);

      }
    });
  }
  articleSearch()