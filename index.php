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
   </head>

   <body>
      <!-- Header -->
      <div id="header">
         <a href="https://rpi.edu/" target="_blank"><img id="logo" src="resources/images/rensselaer_logo.png" alt="Rensselaer Polytechnic Institute" height="100px"/></a>
      </div>

      <!-- Main content -->
      <div id="container">     
         <!-- Search bar-->    
          <div id="search"> 
            <form action="searchResults.php" method="post">
               <input name="searchText" id="searchText" type="text" placeholder="Enter a location...">
               <input id="searchButton" type="submit" placeholder="Search">
            </form>
         </div>

         <div id="mapContainer">
         <img id="tmp" src="resources/images/campusmap.png" width="100%" height=" ">
         </div>

         <!-- Insert php for search function here-->
         
         <!--Plan to make the map full screen, with search bar above-->
         <div id="map"> 
            <h1> Main Map Area</h1>
            <!-- Insert Map here-->

            
         </div>
                  
      </div>

      <!-- footer -->
      <div id="footer">
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </div>
   </body>

</html>