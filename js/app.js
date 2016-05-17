//Random Number Generator//
function numberGenerator() {
	randomNumber = Math.floor((Math.random()*100)+1)
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
	$("#feedback").text("Make your Guess!");
};

function evaluate() {
		input = $("#userGuess").val();

		if (input == randomNumber){
			$("#feedback").text("Winner winner, chicken dinner!");
		}
		//if the initial statement is false, then this else if
		//checks to see if the integral value of randomNumber - input
		//is less than 10.
		else if (Math.abs(randomNumber - input) < 10){
			$("#feedback").text("Hot!");
		}
		else if (Math.abs(randomNumber - input) < 20 && Math.abs(randomNumber - input) > 9){
			$("#feedback").text("Warmer...");	
		}
		else if(Math.abs(randomNumber - input) < 30 && Math.abs(randomNumber - input) > 19){
			$("#feedback").text("Warm.");
		}
		else {
			$("#feedback").text("Cold.");
		}
};

//GLOBAL-VARIABLES//
var input = $("#userGuess").val();

//--- # is for id's and . is for classes --//

$(document).ready(function(){

	numberGenerator();
	$("#userGuess").focus();

	$(document).keypress(function(e) {
      if (e.keyCode == 13) {
      event.preventDefault();
      evaluate();
      counter();
      appendGuess();
      $("#userGuess").focus();
	  $("#userGuess").val("");
      };
    });

	//guess button function//
	$("#guessButton").click(function(){
			evaluate();
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
			$("#userGuess").focus();
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


