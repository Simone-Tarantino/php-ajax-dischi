<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="dist/app.css">
    <script src="dist/app.js" charset="utf-8"></script>
    <title>php-ajax-dischi</title>
  </head>
  <body>
    <!-- header -->
    <header>
      <div class="header-container">
        <img src="img/spotify-sketch.svg" alt="logo spotify">
      </div>
    </header>
    <!-- /header -->
    <!-- main -->
    <main>

    </main>
    <!-- /main -->
    <!-- template -->
    <script id="entry-template" type="text/x-handlebars-template">
      <div class="album-container">
          <img src="{{poster}}" alt="{{title}}">
          <ul>
            <li><h3>{{title}}</h3></li>
            <li>{{author}}</li>
            <li>{{year}}</li>
          </ul>
      </div>
    </script>

  </body>
</html>
