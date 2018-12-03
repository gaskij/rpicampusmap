<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>RPI Interactive Campus Map</title>
      <meta content="RPI Interactive Campus Map" name="description">
      <meta content="Interactive, rpi map, rpi campus map, map, rpi" name="keywords">
      <link href="resources/style.css" rel="stylesheet" type="text/css"/>
      <link rel="icon" href="resources/images/favicon.ico" type="image/x-icon">
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
      <link rel="stylesheet" href="https://unpkg.com/leaflet@1.3.4/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA==" crossorigin=""/>
      <script src="https://unpkg.com/leaflet@1.3.4/dist/leaflet.js" integrity="sha512-nMMmRyTVoLYqjP9hrbed9S+FzjZHW5gY1TWCHA5ckwXZBadntCNs8kEqAWdrb9O7rxbCaA4lKTIWjDXZxflOcA==" crossorigin=""></script>	
      <style>
         
      </style>
   </head>

   <body>
      <!-- Header -->
      <div id="header">
         <a href="https://rpi.edu/" target="_blank"><img id="logo" src="resources/images/rensselaer_logo.png" alt="Rensselaer Polytechnic Institute"/></a>
         <!-- Search bar-->    
          <div id="mapsearch"> 
            <form action="searchResults.php" method="post">
               <input name="searchText" id="searchText" type="text" placeholder="Enter a location...">
               <input id="searchButton" type="submit" placeholder="Search">
            </form>
         </div>
      </div>

      <!-- Main content -->
      <div id="map">     
         <!-- Insert php for search function here-->
         
         <!--Plan to make the map full screen, with search bar above-->
 
<!--            <h1> Main Map Area</h1>-->
            <!-- Insert Map here-->
             
      </div>

      <!-- footer -->
      <footer>
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </footer>
      
      <noscript>
         <div id="noscript">
            <p>You are either using a browser that does not support JavaScript, or you have disabled JavaScript.</p>
            <p>RPICampusMap uses JavaScript for its map.</p>
         </div>
      </noscript>
      
      <script src="resources/geolocations.js"></script>
      <script src="resources/map.js"></script>
   </body>

</html>

<!--
Sources: 
https://leafletjs.com/examples/quick-start/
https://leafletjs.com/examples/geojson/
-->
