//Random Number Generator//
function numberGenerator() {
	randomNumber = Math.floor((Math.random()*100)+1);
	console.log("random number: " + randomNumber);
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
	console.log("Guess button clicked: "+$("#count").text()+" times.");
};

//Append Guess Function//
function appendGuess(){
	var input = $("#userGuess").val();
	$("#guessList").append("<li>" + input + "</li>");
};

//Reset Variables//
function resetVar() {
	$("#userGuess").val("");
	$("#count").text("0");
	$("#guessList").empty();
};

//--- # is for id's and . is for classes --//


$("#guessButton").click(function(){
			//counter keeps track of how many guesses
			counter();
			//appendGuess displays the previous numbers
			//used to guess
			appendGuess();
			//user conveniency: userGuess is focused
			//and is reset every time button is clicked
			$("#userGuess").focus();
			$("#userGuess").val("");
	});

$(document).ready(function(){

	   $(document).keypress(function(e) {
        if (e.keyCode == 13) {
        	event.preventDefault();
        	counter();
        	appendGuess();
        	$("#userGuess").focus();
			$("#userGuess").val("");
         	console.log("something happened");
        }
    });
	//When the page loads, a number is generated
	//and stored in randomNumber variable
	numberGenerator();
	$("#userGuess").focus();
	//guess button function//
	$("#guessButton").click(function(){
			//counter keeps track of how many guesses
			counter();
			//appendGuess displays the previous numbers
			//used to guess
			appendGuess();
			//user conveniency: userGuess is focused
			//and is reset every time button is clicked
			$("#userGuess").focus();
			$("#userGuess").val("");
	});

	//new game button//
	$(".new").click(function(){
			//regenerate a new number//
			numberGenerator();
			//clear the #userGuess, #count, and #guessList//
			resetVar();
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


