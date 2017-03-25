//variable
	var startScreen;
	var game;
	var time = 30;
	var questionArray = ["When is Beyonce birthday ?", "What is Beyonce's daughter's name ?", "What is Beyonce zodiac sign ?", "What is Beyonce's husband name ?", "What city is Beyonce from ?", "Which is NOT a movie Beyonce starred in ?", "What is the name of the girl group Beyonce came from ?", "What is Beyonce's sister name ?", "What is Beyonce favorite song off her most recent album <em>Lemonade</em> ?", "How tall is Beyonce ?"];
	var answerArray = [["5/10/1984", "9/4/1981", "10/10/1979", "1/31/1994"], ["Brown Parker", "November Spring", "Sky Carter", "Blue Ivy"], ["Virgo", "Leo", "Scoripio", "Taurus"], ["Jay-B", "Drake", "Jay-Z", "Lil Wayne"], ["Houston", "Dallas", "Arlington", "Charlotte"], ["Fighting Temptations", "Obsessed", "Austin Power: Gold Member", "Hidden Figures"],["Destiny's Child", "Destiny's Friends", "Beyonce and 'Em", "Girls Tyme"], ["Hanslo", "Solonge","Selena", "Tina"], ["Formation", "Hold Up", "All Night", "Sorry"], ["5'5", "5'7", "5'9", "6'2"]];
	var correctAnswers = ["B. 9/4/1981", "D. Blue Ivy", "A. Virgo", "C. Jay-Z", "A. Houston", "D. Hidden Figures", "A. Destiny's Child", "B. Solonge", "C. All Night", "B. 5'7"];	
	var questionCounter = 0;
	var selecterAnswer;
	var theClock;
	var correctNum= 0;
	var incorrectNum = 0;
	var unansweredNum = 0;
	




//function creates the start button and initial view
$(document).ready(function() {
	function initialScreen() {
		startScreen = "<p class='text-center main-button-container'><a class='btn btn-primary btn-lg btn-block start-button' href='#' role='button'>Start Quiz</a></p>";
		$(".mainArea").html(startScreen);

	}


initialScreen();

$("body").on("click",".start-button", function(event) {
	event.preventDefault();
	generateHTML();

	timerWrapper();



}); //close start 

$("body").on("click", ".answer", function(event) {	
	selectAnswer = $(this).text();
	if(selectAnswer === correctAnswers[questionCounter]) {
		//alert("correct");

		clearInterval(theClock);
		generateWin();
	}
	else {
		//alert("wrong answer");
		clearInterval(theClock);
		generateLoss();
	}
}); //close .answer

$("body").on("click", ".reset-button", function(event) {
	resetGame();
}); //closes reset-button
			
}); //closes $Wrapper

function generateLossDuetoTimout() {
	unansweredNum++;
	game = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + time + "</span></p>" + "<p class='text-center'>Time Is Up!! the correct answer was: " + correctAnswers[questionCounter] + "</p>";
		$(".mainArea").html(game);
		setTimeout(wait, 2000);
}

function generateWin() {
	correctNum++;
	game = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + time + "</span></p>" + "<p class='text-center'>That's Right!! the answer was: " + correctAnswers[questionCounter] + "</p>";
		$(".mainArea").html(game);
		setTimeout(wait, 2000);
}

function generateLoss() {
	incorrectNum++;
	game = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + time + "</span></p>" +"<p class='text-center'>Wrong!! Correct answer is: " + correctAnswers[questionCounter] + "</p>" ;
		$(".mainArea").html(game);
		setTimeout(wait, 2000);
}

function generateHTML() {
	game ="<p class='text-center timer-p'>Time Remaining: <span class='timer'>30</span></p><p class='text-center'>" + questionArray[questionCounter] + "</p><p class='first-answer answer'>A. " + answerArray[questionCounter][0] + "</p><p class='answer'>B. "+answerArray[questionCounter][1]+"</p><p class='answer'>C. "+answerArray[questionCounter][2]+"</p><p class='answer'>D. "+answerArray[questionCounter][3]+"</p>";
		$(".mainArea").html(game);
}

function wait() {
	if (questionCounter < 7) {
		questionCounter++;
		generateHTML();
		
		timerWrapper();
	}
	else {
		finalScreen();
	}

}

function timerWrapper() {
	theClock = setInterval(thirtySeconds, 1000);
			function thirtySeconds() {
				if (time === 0) {
					clearInterval(theClock);
					generateLossDuetoTimout();
				}
				if (time > 0) {
						time--;
				}
				$(".timer").html(time);
			}
}

function finalScreen() {
	game = "<p class='text-center timer-p'>Time Remaining: <span class='timer'>" + time + "</span></p>" + "<p class='text-center'>OK!! here is how you did!" + "</p>"+ "<p class='summary-correct'>Correct Answers: " + correctNum + "</p>" + "<p>Wrong Answers: " + incorrectNum + "</p>" + "<p>Unanswered: " + unansweredNum + "</p>" + "<p class='text-center reset-button-container'><a class='btn btn-lg btn-block reset-button' href='#' role='button'>Reset Quiz!</a></p>";
		$(".mainArea").html(game);
}	

	function resetGame() {
		questionCounter = 0;
		correctNum = 0;
		incorrectNum = 0;
		unansweredNum = 0;
		time = 30;
		generateHTML();
		timerWrapper();
	}
	

	