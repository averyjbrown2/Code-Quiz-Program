var questionElem = document.getElementById("question");
var answerElems = {
	a: document.getElementById("answerA"),
	b: document.getElementById("answerB"),
	c: document.getElementById("answerC"),
	d: document.getElementById("answerD")
};

var submitBtn = document.getElementById('submit');
var timer = document.getElementById("timer");

var currentQ = 0;

//clears page once startBtn is clicked
startBtn.addEventListener("click", function() {
	startPage.style.display = "none";
	startQuiz();
})

//don't forget to set up the timer and make it reset for each question

function startQuiz() {
	askQuestion();
}

function askQuestion() {
	// get current question
	let q = questions[currentQ];

	////////////////////////////////////
	var showPage= [];
	var results;
		for(var i=0; i<questions.length; i++) {
			results= [];
			for(letter in questions[i].results){
				results.push()
			}
		}
}

	///////////////////////////////////////

	// set question elem text
	questionElem.innerText =
		(currentQ + 1) + '. ' + q.choices.question;

	// loop through keys of answerElems
	for (let i in answerElems) {
		answerElems[i].innerText =
			'(' + i + ') ' + q.choices[i];
	}
}

var questions = [{
	choices: {
		question: "Commonly used data types DO NOT include:",
		a: "strings",
		b: "booleans",
		c: "alerts",
		d: "numbers"
	},
	answerIndex: "1" //b
}, {
	question: "Arrays in Javascript can be used to store:",
	choices: {
		a: "numbers and strings",
		b: "other Arrays",
		c: "booleans",
		d: "all of the above"
	},
	answerIndex: "3" //d
}, {
	question: "This tag is used to denote JavaScript in code:",
	choices: {
		a: "<JavaScript>",
		b: "<script>",
		c: "<Java>",
		d: "<js>"
	},
	answerIndex: "1" //b
}, {
	question: "This is an artificial and informal language that helps programmers develop algorithms:",
	choices: {
		a: "pre-code",
		b: "code-ish",
		c: "pseudocode",
		d: "lowcode"
	},
	answerIndex: "2" //c
}, {
	question: "This is where the styles for a program are generally stored:",
	choices: {
		a: "index.html",
		b: "style.code",
		c: "style.css",
		d: "program.style",
	},
	answerIndex: "2" //c
}];
