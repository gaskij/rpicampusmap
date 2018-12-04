<!DOCTYPE html>

<?php
   //define a variable needed for image submission
   $imageSubmit = 'none';

   //Dynamically set the tab title based on info displayed
   if($_SERVER['REQUEST_METHOD'] == 'POST'){
      $title = "RPI - " . $_POST['location'];

      //connect to the database for this session
      $mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "campusmap");

      //Check if there was an error connecting to the database
      if($mysqli-> connect_error){
         die("Connect Failed:". $mysqli-> connect_error);
      }
   }
   else{
      $title = "RPI Interactive Campus Map";
   }

   //Check to see if a comment is being submitted and submit it
   if($_POST['type'] == "comment"){
      //create the sql query
      $sql = "INSERT INTO `comments` (`location`, `title`, `comment`, `time`) VALUES ('" . $_POST['location'] . "', '" . $_POST['title'] . "', '" . $_POST['text'] . "', NOW());";
      //post the comment
      $result = $mysqli->query($sql);
   }

   //check to see if an image is being submitted
   if($_POST['type'] == "image"){
      //check to see if the image is a valid link

      //Check with professor
      $link = $_POST['link'];
      $send = curl_init($link);
      curl_setopt($send, CURLOPT_TIMEOUT, 5);
      curl_setopt($send, CURLOPT_CONNECTTIMEOUT, 5);
      curl_setopt($send, CURLOPT_RETURNTRANSFER, true);
      $result = curl_exec($send);
      $result = curl_getinfo($send, CURLINFO_HTTP_CODE);
      curl_close($send);

      $imageSubmit = 'true';
      //check if the connection was a success
      if($result>=200 && $result<300){
         //create the insert query
         $sql = "INSERT INTO `images` (`location`, `link`) VALUES ('" . $_POST['location'] . "', '" . $link  . "')";
         //add the image
         $result = $mysqli->query($sql);
      }
      else{
         //set bool to be checked later in code
         $imageSubmit = 'false';
      }
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
<!--         <a href="https://rpi.edu/" target="_blank"><img id="logo" src="resources/images/rensselaer_logo.png" alt="Rensselaer Polytechnic Institute"/></a>-->
         <a href="/index.php"><img id="logo" src="resources/images/logo.png" alt="RPI Campus Map"/></a>
          <div id="mapsearch"> 
            <form action="searchResults.php" method="post">
               <input name="searchText" id="searchText" type="text" placeholder="Enter a location...">
               <input id="searchButton" type="submit" placeholder="Search" value="Search">
            </form>
            <a href="index.php">
               <button id="homeButton">Back to Map</button>
            </a>
         </div>
      </div>

      <!-- Main content -->
      <div id="containerInfo">
         <!-- PHP to load information-->

         <div id="info">
            <!-- Image slider start  -->
            <script type="text/javascript" src="resources/slideshow.js"></script>
            <div class="slideshow-container">
               <?php //php to load images for the slider
                  //check for server POST request
                  if($_SERVER['REQUEST_METHOD'] == 'POST'){
                     $search_term = $_POST['location'];

                     //Search for all images with the location primary key
                     $sql = "SELECT * FROM `images` WHERE `location` = '" . $search_term . "'";

                     //query the database
                     $result = $mysqli->query($sql);

                     //output the html for the images

                     $length = $result->num_rows;
                     //check for images
                     if($length == 0){
                        echo "NO IMAGES";
                     }
                     else{
                        //there are images, output the first script
                        echo "<script type=\"text/javascript\" src=\"resources/slideshow.js\"></script>";
                        //output the html for the images
                        $i = 1;
                        while($r = $result->fetch_assoc()){
                           //output the number of the image we are on
                           echo "<div class=\"mySlides fade\"><div class=\"numbertext\">";
                           echo $i;
                           echo " / ";
                           echo $length;
                           //ouput the image link
                           echo "</div><img class=\"sliderImage\" src=\"";
                           echo $r['link'];
                           echo "\"></div>";
                           //increment the image counter
                           $i = $i + 1;
                        }
                        //output the other script
                        echo "<script type=\"text/javascript\">var slideIndex = 1;showSlides(slideIndex);</script>";
                     }
                  }
               ?>

               <!-- Example image for the slider -->
               <!-- <div class="mySlides fade">
                  <div class="numbertext">1 / 4</div>
                  <img class="sliderImage" src="resources/images/img1.jpg">
               </div> -->

                <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                <a class="next" onclick="plusSlides(1)">&#10095;</a>
               
            </div>

            <script type="text/javascript">var slideIndex = 1;showSlides(slideIndex);</script>
            <!-- Image slider end -->
            
            <?php
            //Php that will load the data, this will move to the top of the page
               if($_SERVER['REQUEST_METHOD'] == 'POST'){
                  $search_term = $_POST['location'];

                  //Create a variable to store the SQL query
                  $sql = "SELECT * FROM `main` WHERE `location`='" . $search_term . "'";

                  //Query the SQL databsae
                  $result = $mysqli-> query($sql);

                  //Print out the results in the proper format
                  while($r = $result->fetch_assoc()){
                     //print the desc
                     echo "<p id=\"infoDesc\">";
                     echo $r['description'];
                     echo "</p>";
                     //print the title
                     echo "<div class=\"infoInlineText\"><p class=\"infoTopic\">Full Name:</p><p id=\"infoName\">";
                     echo ' ' . $r['location'];
                     echo "</p></div>";
                     //print the nicknames
                     echo "<div class=\"infoInlineText\"><p class=\"infoTopic\">Nicknames:</p><p id=\"infoNick\">";
                     //query the nicks table
                     $sql = "SELECT * FROM nick WHERE `location` = '". $r['location'] . "'";
                     $nicks = $mysqli->query($sql);
                     $i = 1;
                     $num = $nicks->num_rows;
                     //print the nicknames in comma list
                     echo ' ';
                     while($n = $nicks->fetch_assoc()){
                        echo $n['nick'];
                        if($i != $num){
                           echo ", ";
                        }
                        $i = $i + 1;
                     }
                     echo "</p></div>";
                     //print the address of the building
                     echo "<div class=\"infoInlineText\"><p class=\"infoTopic\">Address:</p><p id=\"infoAddress\">";
                     echo ' ' . $r['address'];
                     echo "</p></div>";
                     //print the phone of the building
                     echo "<div class=\"infoInlineText\"><p class=\"infoTopic\">Phone:</p><p id=\"infoPhone\">";
                     //check for a phone number
                     if(is_null($r['phone'])){
                        echo " No Phone Listed";
                     }
                     else{
                        echo ' ' . $r['phone'];
                     }
                     echo "</p></div>";
                     //print the "show on map" form
                     echo "<form action=\"index.php\" method=\"post\"><input id=\"infoRedirect\"type=\"submit\" value=\"Show on Map\"><input type=\"text\" name=\"location\" value=\"";
                     echo $r['location'];
                     echo "\" style=\"display:none;\"></form>";
                  }
               }
            ?>

            <!-- <form action="index.php" method="post">
               <input type="submit" value="Show on Map">
               <input type="text" name="location" value="Darrin Communications Center" style="display:none;">
            </form> -->
         </div>

         <!-- Comments section-->
         <div id="infoExtra">
            <h2 id="commentSplash">Comments:</h2>

            <?php
               //php to load all of the comments for this location
               if($_SERVER['REQUEST_METHOD'] == 'POST'){
                  $search_term = $_POST['location'];

                  //Search for all comments with the location primary key
                  $sql = "SELECT * FROM `comments` WHERE `location` = '" . $search_term . "' ORDER BY `time` DESC";

                  //query the database
                  $result = $mysqli->query($sql);

                  //check for no comments
                  if($result->num_rows == 0){
                     //This is what is displayed when no searchResults are found
                     echo "<h1 id=\"noComment\">No Comments Yet!</h1>";
                  }
                  else{
                     //Output the comments
                     while($r = $result->fetch_assoc()){
                        //output the title
                        echo "<div class=\"comment\"><h3 class=\"commentTitle\">";
                        echo $r['title'];
                        //output the comment text
                        echo "</h3><p class=\"commentText\">";
                        echo $r['comment'];
                        //output the timestamp
                        echo "</p><p class=\"commentTime\">";
                        echo date("g:ia n/j/y", strtotime($r['time']));
                        echo "</p></div>";
                     }
                  }    
               }
            ?>

            <!-- Example comment
            <div class="comment">
               <h3 class="commentTitle">The DCC Cafe has good food!</h3>
               <p class="commentText">I just ate the most amazing cookie from the DCC Cafe, you guys have to try that stuff!</p>
               <p class="commentTime">5:16 11/27/18</p>
            </div>-->

            <!-- Form to post a comment-->
            <h2 id="commentFormSplash">Post a Comment:</h2>
            <div id="commentForm">
               <form action="info.php#commentSplash" method="post" autocomplete="off">
                  <input required="true" id="commentFormTitle" type="text" name="title" placeholder="Post Title">
                  <input id="commentFormSubmit" type="submit" name="submit" value="Post Comment">
                  <textarea required="true" rows="6" cols="100" id="commentFormText" name="text" placeholder="Type your comment here..." maxlength="512"></textarea>
                  <!-- dont edit -->
                  <input name="location" value=<?php echo "\"";echo $search_term;echo "\"";?> style="display: none;">
                  <input name="type" value="comment" type="text" style="display:none;">
               </form>
            </div>

            <!-- Image submit form -->
            <h2 id="imageFormSplash">Add an Image:</h2>
            <div id="imageForm">
               <form action="info.php" method="post" autocomplete="off">
                  <input required="true" id="imageFormLink" type="text" name="link" placeholder="Image Link" onchange="updatePreview()">
                  <input id="imageFormSubmit" type="submit" name="submit" value="Submit Image">
                  <!-- image preview -->
                  <img src="" alt="Image link incorrect, try again!" id="imageFormPreview">
                  <!-- dont edit -->
                  <input name="location" value=<?php echo "\"";echo $search_term;echo "\"";?> style="display: none;">
                  <input name="type" value="image" type="text" style="display:none;">
               </form>
            </div>
            <!-- script to make image preview change on edit -->
            <script type="text/javascript" src="resources/imagePreview.js"></script>
            <?php
               //check to see if image submit success
               if($imageSubmit != 'none'){
                  echo "<script type=\"text/javascript\">alert(\"";
                  if($imageSubmit == 'true'){
                     echo "Image Added, Thank You!";
                  }
                  else if($imageSubmit == 'false'){
                     echo "Submission Failed: Invalid Link!";
                  }
                  echo "\");</script>";
               }
            ?>
         </div>
      </div>

      <!-- footer -->
      <footer>
         RPI Interactive Campus Map -- Group 5 -- Justin Gaskins, Christopher Pence, Sebastien Boulas -- Professor Munasinghe -- 2018
      </footer>
   </body>



</html>