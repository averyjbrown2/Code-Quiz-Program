var startBtn = document.getElementById('startBtn');
var timeLeft = 60;
var currentIndex = 0;
var i = 0;
var q = document.getElementById("questions");
var setTimer;

// Render start page
// Click listener for start button
// which will startQuiz()
// which will startTimer()
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
	event.preventDefault();
	console.log("submitted");
	var initials = document.getElementById("initials").value;
	console.log(initials);
	var initialsArray = JSON.parse(localStorage.getItem("initials")) || [];
	var user = {initials: initials, score: timeLeft};
	initialsArray.push(user);
	localStorage.setItem("initials", JSON.stringify(initialsArray));
	location.replace("./highscore.html")
}
// This function renders the final learderboard page
function leaderboard() {
	// capture timeLeft to score

	// clear timerInterval
	clearInterval(setTimer);
	q.textContent = "Please enter your initials";
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

///q.setAttribute()
// Listen for user response (choice)
// Grade the choice
// If wrong, decrement timer 10
// Render next question
// If questions are done, then render leaderboard() 






///////////////////////////////////////////////////////////////
///////timer//////////////// must reset after each question


// function startTimer() {
// 	


// //clears page once startBtn is clicked
// startBtn.addEventListener("click", function() {
// 	//startPage.style.display = "none";
// 	startQuiz();
// 	startTimer();
// });


// function startQuiz() {
// 	askQuestion();
// };
// startQuiz();

// function askQuestion() {
// 	// get current question
// 	//let q = questions[currentQ];

// 	//////////first attempt////////////////////////////////
// // 	var showPage= [];
// // 	var results;
// // 		for(var i=0; i<questions.length; i++) {
// // 			results= [];
// // 			for(letter in questions[i].results){
// // 				results.push()
// // 			}
// // 		}
// // }
// 	////////2nd attempt///////////////////////////
// 	//var questionOptions = $("#questions");
// 	questions.forEach(function(value){
// 		document.write(value);
// 		console.log(value); 
// });
// }
// askQuestion();
// 	///////////////////////////////////////

// 	// set question elem text
// // 	questionElem.innerText =
// // 		(currentQ + 1) + '. ' + q.choices.question;

// // 	// loop through keys of answerElems
// // 	for (let i in answerElems) {
// // 		answerElems[i].innerText =
// // 			'(' + i + ') ' + q.choices[i];
// // 	}
// // }
