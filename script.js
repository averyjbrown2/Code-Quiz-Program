var startPage = document.getElementById("startPage");
var startBtn = document.getElementById("startBtn");
var questions = document.getElementById("questions");

var submitBtn = document.getElementById('submit');
var timer = document.getElementById("timer");

startBtn.addEventListener("click", function() {
    startPage.style.display = "none";
    startQuiz();
})

//don't forget to set up the timer and make it reset for each question

function startQuiz(){
     
    
       function questionReveal() {
        for (i = 0; i < questions.length; i++) {
            currentQuestionIndex = document.write(questions[i]);
            return;
        }
       }
       questionReveal();
    
}
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
;