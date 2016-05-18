(function(){
	var randomNumber = randomNumberGenerator();

	$("#userGuess").focus();

	$('.game').keypress(function(e) {
	  if (e.keyCode == 13) {
	      event.preventDefault();
	      handleGuess();
	  };
	});

	//guess button function//
	$("#guessButton").click(function(){
		  handleGuess();
	});

	//new game button//
	$(".new").click(function(){
		randomNumber = randomNumberGenerator();
		resetVar();
	});

	function randomNumberGenerator() {
		return Math.floor((Math.random()*100)+1);
	};

	//Counter Function//
	function counter(){
		var integer = parseInt($("#count").text())
		integer++
		$("#count").text(integer);
	};

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
		$("#userGuess").focus();
	};

	function evaluate() {
			input = $("#userGuess").val();
			//randomNumber global refactor
			if (input == randomNumber){
				$("#feedback").text("Winner winner, chicken dinner!");
			}
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

	function handleGuess (){
	  evaluate();
	  counter();
	  appendGuess();
	  $("#userGuess").focus();
	  $("#userGuess").val("");
	}


	/*--- Display information modal box ---*/
	$(".what").click(function(){
	$(".overlay").fadeIn(1000);
	});

	/*--- Hide information modal box ---*/
	$("a.close").click(function(){
		$(".overlay").fadeOut(1000);
	});

}());
