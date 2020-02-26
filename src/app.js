const $ = require('jquery');
const handlebars = require('handlebars');

$(document).ready(function(){
  $.ajax({
    "url" : "http://localhost/php-ajax-dischi/server.php",
    "method" : "GET",
    success: function(data) {

    },
    error: function() {
      alert("C'è stato un'errore");
    }
  });
});
