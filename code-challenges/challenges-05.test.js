<!DOCTYPE html>
<html>
  <head>
    <title>The Gallery of Horns</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/css/reset.css">
    <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet">
    <link rel="stylesheet" href="/css/base.css">
    <link rel="stylesheet" href="/css/layout.css">
    <link rel="stylesheet" href="/css/modules.css">

    <script id="photo-template" type="text/x-handlebars-template">
      <section id="image-template" class="{{keyword}} horn-{{horns}}">
        <h2>{{title}}</h2>
        <img src={{image_url}}>
        <p>{{description}}</p>
        </script>
      </section>
  </head>
  <body>
    <header>
      <h1>The Gallery of Horns</h1>
      <button type="submit" id="1">One Horn</button>
      <button type="submit" id="2">Two Horns</button>
      <button type="submit" id="3">Three Horns</button>
      <button type="submit" id="4-or-more">Four or More Horns</button>
      <select>
        <option id= "option" value="default">Filter by Keyword</option>
      </select>
      <select>
        <option id="title" value="default">Filter by Title</option>
      </select>
    </header>
    <main>
      <div id="container">
      </div>
    </main>
    <footer>
        &copy; 2018 Code Fellows
    </footer>
    <script src="http://code.jquery.com/jquery-3.1.1.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/handlebars.js/4.0.10/handlebars.js"></script>
    <script src="/js/data.js"></script>
    <script type="text/javascript" src="/js/app.js"></script>
  </body>
</html>