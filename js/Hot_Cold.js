$(document).ready(function(){

	var i = 1;
	var numbToGuess = Math.round(Math.random()*99 +1);
	var userGuess;

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	function update (phrase) {
		$("div p").remove();
		$("#win_annoucement").text(phrase);
		$("#guesses").append("<li>" + userGuess + ": " + phrase + "</li>");
		$("#count").text(i);
		i++;
	};

	function startGame() {
		
		$("#submit_button").on("click", function(event) {
			userGuess = Number($("#number_guess").val());
			console.log("User guess is: " + userGuess);

			var i = 1;
			var numbDifference = Math.abs(userGuess - numbToGuess);

			if ((userGuess%1 !=0)  || (userGuess < 1) || (userGuess > 100) || (userGuess == "")) {
				alert("Please choose a whole number between 1 and 100");
			}
			else {
				i++;
				if (numbDifference == 0) {
					update("Congratulations - You Won!");
					$("#guesses li").last().remove();
				}
				else if (numbDifference <= 5) {
					update("HOT");
				}
				else if (numbDifference <= 15) {
					update("very warm");
				}
				else if (numbDifference <= 40) {
					update("luke warm");
				}
				else if (numbDifference <= 65) {
					update("cold");
				}
				else if (numbDifference <= 100) {
					update("very cold");
				};	
				$("#number_guess").val("");					
				console.log("number to guess is " + numbToGuess);
			}; //end first else statement
		});  //end keypress function
	};  //end function

	startGame();

	$(".new").on("click", function(){
		location.reload();
	});
});

