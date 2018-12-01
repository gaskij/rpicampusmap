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
               <input id="searchButton" type="submit" placeholder="Search">
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
                  $mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "pencec-websyslab8");

                  //Check if there was an error connecting to the database
                  if($mysqli-> connect_error){
                     die("Connect Failed:". $mysqli-> connect_error);
                  }

                  //Create a variable to store the SQL query
                  //This search query is fairly loose, we must expand to include nicknames
                  $sql = "SELECT `first name` FROM students WHERE `first name` LIKE '%" . $search_term . "%'";

                  //Query the SQL databsae
                  $result = $mysqli-> query($sql);

                  //Begin to write the results out to the HTML, this can also be done
                  //by creating a json file and then using JS to print to that
                  //or this can just be done with echos https://www.w3schools.com/php/php_mysql_select.asp

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
                        echo $r['first name'];
                        echo "\" action=\"info.php\" method=\"post\"><div class=\"resultBox\" onclick=\"document.forms['";
                        echo $r['first name'];
                        echo "'].submit();\">";

                        //display title
                        echo "<div class=\"resultInfo\"><h1 class=\"resultTitle\">";
                        echo $r['first name'];
                        echo "</h1>";

                        //display desc
                        echo "<p class=\"resultDesc\">";
                        echo "Yuh yuh ice on my lean"; //INSERT DESC HERE
                        echo "</p>";

                        //display nicks
                        echo "<p class=\"resultNicks\">";
                        echo "Nicknames bruh, my is DrPencil"; //INSERT NICKS HERE
                        echo "</p>";
                        echo "</div>";

                        //display image
                        echo "<img class=\"resultImg\" src=\"";
                        echo "https://images-gmi-pmc.edge-generalmills.com/edfaaf9f-9bde-426a-8d67-3284e9e496ae.jpg"; //INSERT IMAGE HERE
                        echo "\" alt=\"Image of ";
                        echo $r['first name'];
                        echo "\" />";


                        //Input info DO NOT EDIT
                        echo "</div><input name=\"location\" value=\"";
                        echo $r['first name'];
                        echo "\" type=\"text\" style=\"display:none;\"></form>";
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