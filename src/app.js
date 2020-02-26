const $ = require('jquery');
const Handlebars = require('handlebars');

$(document).ready(function(){
  getCdFromServer();
  $(document).on("keyup", "#search", function(){
    cleanAll();
    var searchValue = $(this).val();
    getSearchedCd(searchValue);
  });

  function cleanAll(){
    $("main").html("");
  }

  function getSearchedCd(searchValue) {
    $.ajax({
      "url" : "http://localhost/php-ajax-dischi/server.php",
      "method" : "GET",
      success: function(data) {
        var source = $("#entry-template").html();
        var template = Handlebars.compile(source);
        for(var i = 0; i < data.length; i++) {
          var singleCd = data[i];
          var singleCdAuthor = data[i].author;
          if (singleCdAuthor.toLowerCase().includes(searchValue)){
            var html = template(singleCd);
            $("main").append(html);
          }
        }
      },
      error: function() {
        alert("C'è stato un'errore");
      }
    });
  }

  function getCdFromServer() {
    $.ajax({
      "url" : "http://localhost/php-ajax-dischi/server.php",
      "method" : "GET",
      success: function(data) {
        printCd(data);
      },
      error: function() {
        alert("C'è stato un'errore");
      }
    });
  }

  function printCd(cdsList){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < cdsList.length; i++) {
      var singleCd = cdsList[i];
      var html = template(singleCd);
      $("main").append(html);
    }
  }


});
