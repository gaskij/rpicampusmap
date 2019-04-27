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
         <a href="/index.php"><img id="logo" src="resources/images/logo.png" alt="RPI Campus Map"/></a>
         <!-- Search bar-->    
          <div id="mapsearch"> 
            <form action="searchResults.php" method="post">
               <input name="searchText" id="searchText" type="text" placeholder="Enter a location...">
               <input id="searchButton" type="submit" value="Search">
            </form>
         </div>
      </div>

      <!-- Main content -->
      <div id="map">     
            <!-- Insert Map here-->
      </div>
       
      <!-- login code, not fully functional -->
      <div id="login" class="modalDialog">
         <form action="admin.php" class="borderedForm">
            <a href="#close" title="Close" class="close">X</a>
            <label for="uname"><b>Username</b></label>
            <input type="text" class="loginInput" placeholder="Enter rcsID" class="loginInput" name="uname" required>

            <label for="psw"><b>Password</b></label>
            <input type="password" class="loginInput" placeholder="Enter Password" class="loginInput" name="psw" required>

            <input type="submit" id="loginButton" value="Login" />
         </form>
      </div>
      
      <!-- footer -->
      <footer id="index">
<!--          <a href="https://rpi.edu/" target="_blank"><img id="seal" src="resources/images/seal.png" alt="Rensselaer Polytechnic Institute"/></a>-->
            RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018 -- <a href="#login">Admin Panel</a>
      </footer>
      
      <!-- code to run if browser doesnt support javascript and therefore the map -->
      <noscript>
         <div id="noscript">
            <p>You are either using a browser that does not support JavaScript, or you have disabled JavaScript.</p>
            <p>RPICampusMap uses JavaScript for its map.</p>
         </div>
      </noscript>
      
      <!-- include the map files -->
      <script src="resources/geolocations.js"></script>
      <script src="resources/map.js"></script>

      <!-- code to load after "show on map" is clicked -->
      <?php
         //check for post request
         if($_SERVER['REQUEST_METHOD'] == 'POST'){
            //get the location to highlight
            $location = $_POST['location'];
            echo "<script type=\"text/javascript\">var building = \"";
            echo $location;
            echo "\";var point = getCoords(building);showOnMap(building, point[1], point[0]);</script>";
            //this code will run the javascript function to highlight a certain location on the map, and pull up the info preview
         }
      ?>
   </body>
</html>

<!--
Sources: 
https://leafletjs.com/examples/quick-start/
https://leafletjs.com/examples/geojson/
-->
