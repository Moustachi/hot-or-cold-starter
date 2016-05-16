//Random Number Generator//
function numberGenerator() {

	var randomNumber = Math.floor((Math.random()*100)+1);
	console.log("random number: "+randomNumber);
};

//Counter Function//
function counter(){
	//stores #count's string as a integer in a var//
	var integer = parseInt($("#count").text()) 
	//adds 1 to that var (named 'integer')//
	integer += 1
	//replace #count's text with integer var//
	$("#count").text(integer);
	//print #counts string in the console//
	console.log($("#count").text());
};

//--- # is for id's and . is for classes --//


$(document).ready(function(){

	numberGenerator();

	//guess button function//
	$("#guessButton").click(function(){
			console.log("clicked")
			counter();

	});

	//new game button//
	$(".new").click(function(){
			location.reload();
	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


