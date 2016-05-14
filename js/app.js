// randomNumber is the number generator. .random
// generates a number between 0 and 1 to but not
// including 1, and multiplied that by 100 and +1
// so we can be able to generate the number 100.
// .floor finally takes the sum and roungs it down
// to the nearest integer.
var randomNumber = Math.floor((Math.random()*100)+1);


$(document).ready(function(){

	randomNumber;
	console.log(randomNumber);


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});


