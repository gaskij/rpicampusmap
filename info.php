<!DOCTYPE html>

<?php
   //Dynamically set the tab title based on info displayed
   if($_SERVER['REQUEST_METHOD'] == 'POST'){
      $title = "RPI - " . $_POST['location'];
   }
   else{
      $title = "RPI Interactive Campus Map";
   }
?>

<html>
   <head>
      <meta charset="utf-8">
      <title><?php echo $title;?></title>
      <meta content="RPI Interactive Campus Map" name="description">
      <meta content="Interactive, rpi map, rpi campus map, map, rpi" name="keywords">
      <link href="resources/style.css" rel="stylesheet" type="text/css"/>
      <link rel="icon" href="resources/images/favicon.ico" type="image/x-icon"/>
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

         <!-- PHP to load image slider -->
         <?php
            //check for server POST request
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
               $search_term = $_POST['location'];

               //connect to the database for this session
               $mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "pencec-websyslab8");

               //Check if there was an error connecting to the database
               if($mysqli-> connect_error){
                  die("Connect Failed:". $mysqli-> connect_error);
               }

               //Search for all images with the location primary key
               $sql = "SELECT `grade` FROM `grades` WHERE `crn` = '10002'";

               //query the database
               $result = $mysqli->query($sql);

               //read the links into a php array
               $link_array = Array();
               while($r = $result->fetch_assoc()){
                  $link_array[] = $r['grade'];
               }

               //send the results to a json file
               $json_array = json_encode($link_array);
            }
         ?>

         <!-- Javascript to run image slider-->
         <script>
            //this is where the code for the image slider will go
            //we can call a function to slide the images right or left
            //from another javascript file

            //pull the image array from the php code
            var image_array = <?php echo $json_array; ?>;
            alert("true");
            alert(image_array.length);
         </script>


         

         <!-- PHP to load information -->
         <?php
         //Php that will load the data, this will move to the top of the page
            if($_SERVER['REQUEST_METHOD'] == 'POST'){
               $search_term = $_POST['location'];

               //Create a variable to store the SQL query
               $sql = "SELECT `first name` FROM students WHERE `first name`='" . $search_term . "'";

               //Query the SQL databsae
               $result = $mysqli-> query($sql);

               //Print out the results in the proper format
               while($r = $result->fetch_assoc()){
                  //HTML to print out
                  echo "<p>";
                  echo $r['first name'];
                  echo "</p>";
               }
            }
         ?>

         <div id="info">
            <div id="infoImage">
               <img id="infoSlider" src="resources/images/dcc.jpg" alt="Image of Location" />
               <div>
                  <button id="infoSlideLeft">❮</button>
                  <button id="infoSlideRight">❯</button>
               </div>
            </div>


            <!--Paragraph describing the buidling-->
            <p id="infoDesc">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            <!--Display the name of the buidling-->
            <div class="infoInlineText">
               <h2 class="infoTopic">Full Name</h2>
               <p id="infoName">Darrin Communication Center</p>
            </div>

            <!-- Display the nicknames of the building-->
            <div class="infoInlineText">
               <h2 class="infoTopic">Nicknames</h2>
               <p id="infoNick">DCC</p>
            </div>

            <!-- display the address of the building-->
            <div class="infoInlineText">
               <h2 class="infoTopic">Address</h2>
               <p id="infoAddress">Somewhere on campus</p>
            </div>

            <!-- display the phone info for the buidling -->
            <div class="infoInlineText">
               <h2 class="infoTopic">Phone</h2>
               <p id="infoPhone">9142637593</p>
            </div>
         </div>


         <!-- PHP to load the comments 







         -->


         <div id="infoExtra">

            <!-- Example comment section, php located here -->
            <h2 id="commentSplash">Comments:</h2>

            <div class="comment">
               <h3 class="commentTitle">The DCC Cafe has good food!</h3>
               <p class="commentText">I just ate the most amazing cookie from the DCC Cafe, you guys have to try that stuff!</p>
               <p class="commentTime">5:16 11/27/18</p>
            </div>

            <div class="comment">
               <h3 class="commentTitle">DCC 239 has a lean machine!</h3>
               <p class="commentText">This ain't it chief</p>
               <p class="commentTime">5:16 11/27/18</p>
            </div>

            <div class="comment">
               <h3 class="commentTitle">Okay, this is epic</h3>
               <p class="commentText">GUYS! Bencil Sharpiniro is going to be in DCC 308 this Friday giving a lecture where he is going to DESTROY librals. This is going to be epic, don't miss it!</p>
               <p class="commentTime">5:16 11/27/18</p>
            </div>


            <h2 id="commentFormSplash">Post a Comment:</h2>
            <div id="commentForm">
               <form action="info.php#commentSplash" method="post" autocomplete="off">
                  <input required="true" id="commentFormTitle" type="text" name="title" placeholder="Post Title">
                  <input id="commentFormSubmit" type="submit" name="submit" value="Post Comment">
                  <textarea required="true" rows="6" cols="100" id="commentFormText" name="text" placeholder="Type your comment here..." maxlength="512"></textarea>
                  <input name="location" value="EnterLocationHere" style="display: none;">
               </form>
            </div>

            <div class="commentFiller">
            </div>

         </div>

         <!-- PHP to submit a comment 








         -->









      </div>

      <!-- footer -->
      <div id="footer">
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </div>
   </body>

</html>