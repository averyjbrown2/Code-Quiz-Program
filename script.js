//sets initial variables and grabs elements to be utilized later
var startBtn = document.getElementById('startBtn');
var timeLeft = 60;
var currentIndex = 0;
var i = 0;
var q = document.getElementById("questions");
var setTimer;

// Render start page
// Click listener for start button which will startQuiz() and startTimer()
startBtn.addEventListener("click", function () {
	startQuiz();
	startTimer();
});

// Timer function
function startTimer() {
	// sets up timer
	var timerDiv = document.getElementById("timer");
	timerDiv.textContent = timeLeft + " seconds left";
		
	setTimer = setInterval(function () {
		// // decrement timeLeft
		timeLeft--;
		timerDiv.textContent = timeLeft + " seconds left";
		// conditional to end game at timeLeft = 0
		if (timeLeft <= 0) {
			clearInterval(setTimer);
			// call leaderboard()
			leaderboard();
		}
	}, 1000);
};
function handleSubmit(event) {
	//prevents page from reloading
	event.preventDefault();
	//grabs element with initials id from html page and assigns value to initials variable
	var initials = document.getElementById("initials").value;
	//grabs user initials from local storage, parses, and saves to variable as array
	var initialsArray = JSON.parse(localStorage.getItem("initials")) || [];
	//saves user initials and score as object in variable
	var user = {initials: initials, score: timeLeft};
	//pushes user info into array
	initialsArray.push(user);
	//saves initials values as string to local storage
	localStorage.setItem("initials", JSON.stringify(initialsArray));
	//changes page to higghscore html
	location.replace("./highscore.html")
}
// This function renders the final learderboard page
function leaderboard() {
	// capture timeLeft to score

	// clear timerInterval
	clearInterval(setTimer);
	//fills text content of q
	q.textContent = "Please enter your initials";
	//adds class to quiz which hides it
	document.getElementById("quiz").classList.add("d-none");
	//grabs initialsForm and assigns to variable
	var form = document.getElementById("initialsForm");
	//removes class that hides form
	form.classList.remove("d-none");
	//displays form as block element
	form.classList.add("d-block");
	//grabs element with initialsForm id and assigns to variable
	var intialsForm = document.getElementById("initialsForm");
	//adds event listener to submit and assigns handlesubmit function
	intialsForm.addEventListener("submit", handleSubmit);
	// render leaderboard to page
}

// Quiz Game logic
function startQuiz() {
	//hides welcome page and starts getQuestions function
	startPage.style.display = "none";
	getQuestions();
}
function getGrades(event) {
//if answer is wrong, console.log "wrong answer" and subtract 10 seconds from timer
	var answer = parseInt(event.target.id);
	//if current question answer does not match provided answerIndex for corresponding question, 
	//console.log "wrong answer" and subtract 10 seconds from timer
	if (questions[currentIndex].choices[answer] !== questions[currentIndex].answerIndex){
		console.log("Wrong answer");
		timeLeft -= 10;
	}		// 
	console.log(event.target.id);
	//advance questions until user reaches end of game
	currentIndex ++;
		if (questions.length > currentIndex) {
			getQuestions();
		} else {
			//call leaderboard function once user completes last question
			leaderboard();
		}
	}
//grabs questions and displays to page
function getQuestions() {
	var currentQ = questions[currentIndex];
	console.log(currentQ.question);
	//grabs quiz element and assigns to variable
	var quizContainer = document.getElementById("quiz");
	//assigns empty text content to quizContainer
	quizContainer.innerHTML = "";
	//fills questions element with the current question pulled from questions array
	q.textContent = currentQ.question;
	//loops through currentQ choices to display 
	currentQ.choices.forEach(function (choice, i) {
		//for each choice option, a button is created with a value and styling class
		var choiceBtn = document.createElement("button");
		choiceBtn.setAttribute("value", choice);
		choiceBtn.classList.add("m-3");
		//sets text content of choices
		choiceBtn.textContent = i + 1 + ". " + currentQ.choices[i];
		//appends choices to quizContainer
		quizContainer.appendChild(choiceBtn);
		//assigns ids to choices
		choiceBtn.setAttribute("id", i++);
		//adds onclick which will run getGrades function when clicked
		choiceBtn.onclick = getGrades;
	})
};
