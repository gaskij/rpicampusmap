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
            <form action="searchResults.php" method="post">
               <input name="searchText" id="searchText" type="text" placeholder="Enter a location...">
               <input id="searchButton" type="submit" placeholder="Search" value="Search">
            </form>
         </div>

         <!--
         <form id="loadInfo" action="info.php" method="post">
            <div class="resultBox" onclick="document.forms['loadInfo'].submit();"></div>
            <input name="bean" value="John" type="text" style="display:none;">
         </form>
         -->

         <!-- Example output for search results, all will be echoed from PHP-->
         <!--
         <div class="resultBox">
            <div class="resultInfo">
               <h1 class="resultTitle">Darrin Communication Center</h1>
               <p class="resultDesc">Something about the DCC. It was built in the 50s im pretty sure, so thats pretty cool. Maybe more info here so we can see the css truncation</p>
               <p class="resultNicks">DCC</p>
            </div>
            <img class="resultImg" src="resources/images/dcc.jpg" alt="Image of Location" />
         </div>
         -->

         <!-- Actual PHP that is called after the form is submitted-->
         <?php
            //Check to see when the button is clicked
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
               $search_term = $_POST['searchText'];

               //check to see if nothing was entered the search term
               if($search_term == ""){
                  echo "<div class=\"noResult\">";
                  echo "<h1>No Results Found!</h1>";
                  echo "</div>";
               }
               else{
                  //Connect to the SQL database
                  $mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "campusmap");

                  //Check if there was an error connecting to the database
                  if($mysqli-> connect_error){
                     die("Connect Failed:". $mysqli-> connect_error);
                  }

                  //query the nicks table
                  $nick_sql = "SELECT `location` FROM `nick` WHERE `nick` LIKE '%" . $search_term . "%'";
                  $result = $mysqli->query($nick_sql);

                  //create the databse query
                  if($result->num_rows == 0){
                     //regular search
                     if($search_term == "*"){
                        //admin tool to list all results
                        $sql = "SELECT * FROM main";
                     }
                     else{
                        $sql = "SELECT * FROM main WHERE `location` LIKE '%" . $search_term . "%'";
                     }
                  }
                  else{
                     //altered search
                     $search_term_2 = $result->fetch_assoc()['location'];
                     $sql = "SELECT * FROM main WHERE `location` LIKE '%" . $search_term . "%' OR `location` LIKE '%" . $search_term_2 . "%'";
                  }

                  //Query the SQL databsae
                  $result = $mysqli-> query($sql);

                  //Check to see if we got any search results
                  if($result->num_rows == 0){
                     //This is what is displayed when no searchResults are found
                     echo "<div class=\"noResult\">";
                     echo "<h1>No Results Found!</h1>";
                     echo "</div>";
                  }
                  //If there are results, print them out
                  else{
                     while($r = $result->fetch_assoc()){
                        //Form info and starter div DO NOT EDIT
                        echo "<form id=\"";
                        echo $r['location'];
                        echo "\" action=\"info.php\" method=\"post\"><div class=\"resultBox\" onclick=\"document.forms['";
                        echo $r['location'];
                        echo "'].submit();\">";

                        //display title
                        echo "<div class=\"resultInfo\"><h1 class=\"resultTitle\">";
                        echo $r['location'];
                        echo "</h1>";

                        //display desc
                        echo "<p class=\"resultDesc\">";
                        echo $r['description']; 
                        echo "</p>";

                        //display nicks
                        echo "<p class=\"resultNicks\">";
                        //query the nicks table
                        $sql = "SELECT * FROM nick WHERE `location` = '". $r['location'] . "'";
                        $nicks = $mysqli->query($sql);
                        $i = 1;
                        $num = $nicks->num_rows;
                        //print the nicknames in comma list
                        while($n = $nicks->fetch_assoc()){
                           echo $n['nick'];
                           if($i != $num){
                              echo ", ";
                           }
                           $i = $i + 1;
                        }
                        echo "</p>";
                        echo "</div>";

                        //display image
                        echo "<img class=\"resultImg\" src=\"";
                        //query the images table, take the first result
                        $sql = "SELECT * FROM images WHERE `location` = '". $r['location'] . "'";
                        $nicks = $mysqli->query($sql);
                        echo $nicks->fetch_assoc()['link'];
                        echo "\" alt=\"Image of ";
                        echo $r['location'];
                        echo "\" />";

                        //Input info DO NOT EDIT
                        echo "</div><input name=\"location\" value=\"";
                        echo $r['location'];
                        echo "\" type=\"text\" style=\"display:none;\">";
                        echo "<input name=\"type\" value=\"load\" type=\"text\" style=\"display:none;\"></form>";
                     }
                     //filler div underneath
                     if($result->num_rows < 4){
                        echo "<div class=\"noResult\">";
                        echo "<h3>Displaying ";
                        echo $result->num_rows;
                        echo " out of ";
                        echo $result->num_rows;
                        echo " result(s).";
                        echo "</div>";                     
                     }
                     else{
                        echo "<div class=\"yesResult\">";
                        echo "<h3>Displaying ";
                        echo $result->num_rows;
                        echo " out of ";
                        echo $result->num_rows;
                        echo " result(s).";
                        echo "</div>";  
                     }
                  }
               }
            }
         ?>
      </div>

      <!-- footer -->
      <div id ="footer">
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </div>
   </body>

</html>