const $ = require('jquery');
const Handlebars = require('handlebars');

$(document).ready(function(){
  $.ajax({
    "url" : "http://localhost/php-ajax-dischi/server.php",
    "method" : "GET",
    success: function(data) {
      getAndPrintCd(data);
    },
    error: function() {
      alert("C'è stato un'errore");
    }
  });

  function getAndPrintCd(cdsList){
    var source = $("#entry-template").html();
    var template = Handlebars.compile(source);
    for (var i = 0; i < cdsList.length; i++) {
      var singleCd = cdsList[i];
      console.log(singleCd);
      var html = template(singleCd);
      $("main").append(html);
    }
  }
});
