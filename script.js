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
	//add
	document.getElementById("quiz").classList.add("d-none");
	var form = document.getElementById("initialsForm");
	form.classList.remove("d-none");
	form.classList.add("d-block");
	var intialsForm = document.getElementById("initialsForm");
	intialsForm.addEventListener("submit", handleSubmit);
	// render leaderboard to page
}

// Quiz Game logic
// Render first question to page
function startQuiz() {
	startPage.style.display = "none";
	getQuestions();
}
function getGrades(event) {
//if answer is wrong, console.log "wrong answer" and subtract 10 seconds from timer
	var answer = parseInt(event.target.id);
	if (questions[currentIndex].choices[answer] !== questions[currentIndex].answerIndex){
		console.log("Wrong answer");
		timeLeft -= 10;
	}		//if answer is right, move 
	console.log(event.target.id);
	currentIndex ++;
		if (questions.length > currentIndex) {
			getQuestions();
		} else {
			leaderboard();
		}
	}
//grabs questions and displays to page
function getQuestions() {
	var currentQ = questions[currentIndex];
	console.log(currentQ.question);
	var quizContainer = document.getElementById("quiz");
	quizContainer.innerHTML = "";
	
	q.textContent = currentQ.question;
	currentQ.choices.forEach(function (choice, i) {
		var choiceBtn = document.createElement("button");
		choiceBtn.setAttribute("value", choice);
		choiceBtn.classList.add("m-3");
		choiceBtn.textContent = i + 1 + ". " + currentQ.choices[i];
		quizContainer.appendChild(choiceBtn);
		choiceBtn.setAttribute("id", i++);
		choiceBtn.onclick = getGrades;
	})
};
