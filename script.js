quizContainer = document.getElementById('quiz');
resultsContainer = document.getElementById('results');
var submitBtn = document.getElementById('submit');

function startQuiz(){
    //hide questions, starts clock, hide start screen, show div with current questions
}
startBtn.click = startQuiz
function showResults(){}

submitBtn.addEventListener('click', showResults);

//
var questions = [
    {
        choices: {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
      answerIndex:  "1" //b
},
{
        question: "Arrays in Javascript can be used to store:",
        choices: {
        a: "numbers and strings",
        b: "other Arrays",
        c: "booleans",
        d: "all of the above"
    },
    answerIndex: "3" //d
},
{
        question: "This tag is used to denote JavaScript in code:",
        choices: {
        a: "<JavaScript>",
        b: "<script>",
        c: "<Java>",
        d: "<js>"
    },
    answerIndex: "1" //b
},
{

        question: "This is an artificial and informal language that helps programmers develop algorithms:",
        choices: {
        a: "pre-code",
        b: "code-ish",
        c: "pseudocode",
        d: "lowcode"
    },
    answerIndex: "2" //c
},
{
        question: "This is where the styles for a program are generally stored:",
        choices: {
        a: "index.html",
        b: "style.code",
        c: "style.css",
        d: "program.style",
        },
        answerIndex: "2" //c
    }
]

function buildQuiz() {
    const output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {

        const answer
        }
    )
}

//functions attempted



//showResults

////var currentQuestionIndex = 0;



//function questionReveal(){
//for (i=0; i<questions.length; i++){
  //  currentQuestionIndex = document.write(questions[i])
//}



//Given equations
var currentQuestionIndex = 0;


function displayQuestion() {
    var currentQuestion = questions[currentQuestionIndex[i]];   
    //currentQuestionIndex.answerIndex
    var visibleQuestions = document.getElementById("questions");
    visibleQuestions.textContent=currentQuestion.questions;

    var visibleAnswers = document.getElementsById("answers");
    visibleAnswers.innerHTML = "";
    //loop over each question for buttons
    //append to page
    }
}

function answerChosen() {
currentQuestionIndex++;
displayQuestion();
}

var choiceList = 
choiceList.addEventListener("click", answerChosen);

//call functions