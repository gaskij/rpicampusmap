<?php
	/*
		This is code that will allow the user to click on a building on the map and above the buidling will be a little blurb that displays some information about the buidling. If they click this blurb, they will be directed to the information page for that location.
	*/

	//check for server get request
	if($_SERVER['REQUEST_METHOD'] == 'GET'){
		$location = $_GET['location'];

		//connect to the database for this session
     	$mysqli = mysqli_connect("localhost", "termproject", "It18BrigitteRes_ume", "campusmap");

      	//Check if there was an error connecting to the database
      	if($mysqli-> connect_error){
         	die("Connect Failed:". $mysqli-> connect_error);
        }

        //create the php array
        $info_array = Array();

        //query the databse for the location
        $sql = "SELECT * FROM `main` WHERE `location` = '" . $location . "'";
        $result = $mysqli->query($sql);
        $r = $result->fetch_assoc();
        $info_array['location'] = $r['location'];

        //query the database for the nicknames
        $sql = "SELECT * FROM nick WHERE `location` = '". $r['location'] . "'";
        $result = $mysqli->query($sql);
        $i = 1;
        $num = $result->num_rows;
        $nicks = "";
        //print the nicknames in comma list
        while($n = $result->fetch_assoc()){
           $nicks .= $n['nick'];
           if($i != $num){
              $nicks .= ", ";
           }
           $i = $i + 1;
        }
        $info_array['nicks'] = $nicks;

        //query the database for an image
        $sql = "SELECT * FROM images WHERE `location` = '". $r['location'] . "'";
        $result = $mysqli->query($sql);
        $r = $result->fetch_assoc();
        $info_array['image'] = $r['link'];

        //output the array in json format
        $output = json_encode($info_array);
		    echo $output;
	}
?>