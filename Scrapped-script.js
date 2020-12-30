quizContainer = document.getElementById('quiz');
resultsContainer = document.getElementById('results');
var startBtn = document.getElementsById("startPage");
var startBtn = document.getElementsById("startBtn");
var submitBtn = document.getElementById('submit');
var timeEl = document.querySelector(".time");
var secondsLeft = 10;
var hiddenQuestions = "";
var visibleQuestions;


startBtn.addEventListener("click", function(event){
    startQuiz();
    questionReveal();
    })
    
function startQuiz() {
    //hide questions, starts clock, hide start screen, show div with current questions
    //document.getElementById("questions").style.visibility = "hidden";
    startBtn.style.visibility = "hidden";
   


}
//startBtn.click = startQuiz
startQuiz();
//function showResults() { }

//submitBtn.addEventListener('click', showResults);

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
        answerIndex: "1" //b
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

//function buildQuiz() {
  //  const output = [];

    //myQuestions.forEach(
      //  (currentQuestion, questionNumber) => {

        //    const answer
        //}
    //)
//}

//functions attempted



//showResults

////var currentQuestionIndex = 0;



function questionReveal() {
    (i = 0; i < questions.length; i++) {
        var currentQuestionIndex = questions.children[0].innertext;
        var answerChoices = questions.children[1].innertext;
        var correctAnswers = questions.children[2].innertext;
        var currentQuestion = questions[currentQuestionIndex[i].innertext]; 
        var currentAnswerChoices = questions[answerChoices[i].innertext];
        var currentCorrectAnswers = questions[correctAnswers[i].innertext];

    } 


        
    currentQuestion = document.write(currentQuestionIndex[i]);


    //Given equations
   // var currentQuestionIndex = 0;


    //function displayQuestion() {
        //var currentQuestion = questions[currentQuestionIndex[i]];  
            //i++;
        //currentQuestionIndex.answerIndex

        //loop over each question for buttons
        //append to page
    //}
//}

//function answerChosen() {
  //  currentQuestionIndex++;
    //displayQuestion();
//}

//var choiceList =
  //  choiceList.addEventListener("click", answerChosen);

//call functions