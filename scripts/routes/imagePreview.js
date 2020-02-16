//Function to update the preview image for the image submission form
function updatePreview(){
	//get the image link
	var link = $("#imageFormLink").val();
	//save the image into variable for optimization
	var image = $("#imageFormPreview");
	//change the image link
	image.attr('src',link);
	//set the css to display the image
	image.css("display", "block");
}