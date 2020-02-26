<?php
  include __DIR__ . '/database.php'
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="dist/app.css">
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
      <?php foreach ($database as $album) {?>
      <div class="album-container">
          <img src="<?php echo $album['poster']; ?>" alt="<?php echo $album['title']; ?>">
          <ul>
            <li><h3><?php echo $album['title']; ?></h3></li>
            <li><?php echo $album['author']; ?></li>
            <li><?php echo $album['year']; ?></li>
          </ul>
      </div>
    <?php } ?>
    </main>
    <!-- /main -->
    <!-- footer -->
    <footer>

    </footer>
    <!-- /footer -->
  </body>
</html>
