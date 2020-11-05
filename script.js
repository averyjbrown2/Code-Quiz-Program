const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

function buildQuiz(){}
function showResults(){}
buildQuiz()
submitButton.addEventListener('click', showResults);

const myQuestions = [
    {
        answers: {
        question: "Commonly used data types DO NOT include:",
        a: "strings",
        b: "booleans",
        c: "alerts",
        d: "numbers"
    },
      answer:  "b"
},
{
        question: "Arrays in Javascript can be used to store:",
        answers: {
        a: "numbers and strings",
        b: "other Arrays",
        c: "booleans",
        d: "all of the above"
    },
    answer: "d"
},
{
        question: "This tag is used to denote JavaScript in code:",
        answers: {
        a: "<JavaScript>",
        b: "<script>",
        c: "<Java>",
        d: "<js>"
    },
    answer: "b"
},
{

        question: "This is an artificial and informal language that helps programmers develop algorithms:",
        answers: {
        a: "pre-code",
        b: "code-ish",
        c: "pseudocode",
        d: "lowcode"
    },
    answer: "c"
},
{
        question: "This is where the styles for a program are generally
        stored:"
        answers: {
        a: "index.html",
        b: "style.code",
        c: "style.css",
        d. "program.style",
        },
        answer: "c"
    }
]