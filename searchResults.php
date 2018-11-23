<!DOCTYPE html>
<html>
   <head>
      <meta charset="utf-8">
      <title>RPI - Search Results</title>
      <meta content="RPI Interactive Campus Map" name="description">
      <meta content="Interactive, rpi map, rpi campus map, map, rpi" name="keywords">
      <link href="resources/style.css" rel="stylesheet" type="text/css"/>
      <link rel="icon" href="resources/images/favicon.ico"/>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
   </head>

   <body>
      <!-- Header -->
      <div id="header">
         <a href="https://rpi.edu/" target="_blank"><img id="logo" src="resources/images/rensselaer_logo.png" alt="Rensselaer Polytechnic Institute" height="100px"/></a>
      </div>

      <!-- Main content -->
      <div id="container">

         <!-- Working search form--> 
         <div id="search"> 
            <form action="" method="post">
               <input type="text" placeholder="Enter a location...">
               <input type="submit" placeholder="Search">
            </form>
         </div>

         <!-- Example output for search results, all will be echoed from PHP-->
         <div class="resultBox">
            <div class="resultInfo">
               <h1 class="resultTitle">Darrin Communication Center</h1>
               <p class="resultNicks">DCC</p>
               <p class="resultDesc">Main lecture hall on campus</p>
            </div>
            <img class="resultImg" src="resources/images/dcc.jpg" alt="Image of Location" />
         </div>

         <!-- Actual PHP that is called after the form is submitted-->
         <?php
            //Capture the value of the search bar
            //Add it to MYSQL query 
            //Return all of the results in the form above /\

            //Connect to the SQL database
            $mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "iit");

            //Check if there was an error connecting to the database
            if($mysqli-> connect_error){
               die("Connect Failed:". $mysqli-> connect_error);
            }

            //Create a variable to store the SQL query
            $sql = "SELECT full_name FROM actors";

            //Query the SQL databsae
            $result = $mysqli-> query($sql);

            //Begin to write the results out to the HTML, this can also be done
            //by creating a json file and then using JS to print to that
            //or this can just be done with echos https://www.w3schools.com/php/php_mysql_select.asp
            while($r = $result->fetch_assoc()){
               echo "<div class=\"resultBox\"><div class=\"resultInfo\"><h1 class=\"resultTitle\">";

               echo $r['full_name'];

               echo "</h1></div></div>";
            }
         ?>
         <!-- These would be repeated over and over again downwards for the results-->
      </div>

      <!-- footer -->
      <div id ="footer">
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </div>
   </body>

</html>