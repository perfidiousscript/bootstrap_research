$(document).ready(function(){
	
	//Generate Number function: every time generate number button is clicked appends a div class 
	//"buildingInfo" that creates a new line that includes Property ID, Sq.Ft, and price per sq.ft
	$("body").on('click', "#generate", function(){
		//Append 'buildingInfo' to container
		$("#container").append("<div class='buildingInfo'></div>");
		//Create string with ID, Sq.ft, price per sq. ft. and fills them with random number
		//from randomNumber function. min/max values added per generated number.
		var $el = $("#container").children().last()
		$el.append("<span>Property ID: " + randomNumber(1000,9999) + " </span><span>" + randomNumber(2000,9999) + " Sq. Ft.</span><span> $" + randomNumber(4,30) + " sq.ft</span><button class='removeButton'>Remove</button>");
		//Intially hides $el
		$el.hide();
		//Slides down $el
		$el.slideDown();
	})

		//Slides line up on click of Remove button
		$("#container").on('click', '.removeButton', function(){
			console.log("button click");
			$(this).parent().slideUp();


});
});

	
//Create random number between min value and max value
function randomNumber(min, max){
	return Math.floor(Math.random() * (1 + max - min) + min);
};