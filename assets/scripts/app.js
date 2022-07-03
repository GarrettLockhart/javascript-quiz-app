const countdownTimer = document.querySelector('#inner-time');
const answer = document.querySelector('#answer');
const questionCounter = document.querySelector('.question-counter');
const currentQuestion = document.querySelector('#current-question');
const firstChoiceLabel = document.querySelector('#first-choice-text');
const secondChoiceLabel = document.querySelector('#second-choice-text');
const thirdChoiceLabel = document.querySelector('#third-choice-text');
const fourthChoiceLabel = document.querySelector('#fourth-choice-text');
const nextQuestionBtn = document.querySelector('#next-btn');
const startBtn = document.querySelector('#start-btn');

const checkBoxA = document.querySelector('#check-box-a');
const checkBoxB = document.querySelector('#check-box-b');
const checkBoxC = document.querySelector('#check-box-c');
const checkBoxD = document.querySelector('#check-box-d');

const selectedCheckBox = document.querySelector(
  '.choice-input-label-container'
);

// Questions, Options, and correct answer
const quizData = [
  {
    question: 'Commonly Used Data Types Do NOT include?',
    a: 'strings',
    b: 'booleans',
    c: 'alerts',
    d: 'numbers',
    correct: 'c',
  },
  {
    question: 'The condition in a "if" statement is enclosed with ____?',
    a: 'parenthesis',
    b: 'curly brackets',
    c: 'quotes',
    d: 'square brackets',
    correct: 'a',
  },
  {
    question: 'Arrays in JavaScript can be used to store ____?',
    a: 'numbers and strings',
    b: 'other arrays',
    c: 'booleans',
    d: 'all of the above',
    correct: 'd',
  },
  {
    question:
      'String values must be enclosed with ____ when store in a variable?',
    a: 'commas',
    b: 'curly brackets',
    c: 'quotes',
    d: 'parenthesis',
    correct: 'c',
  },
  {
    question:
      'A very useful tool for debugging and printing content to the debugger is ____?',
    a: 'JavaScript',
    b: 'console.log',
    c: 'for loop',
    d: 'terminal/bash',
    correct: 'b',
  },
];

var i = 0;

// Countdown timer
function countdown() {
  var timeLeft = 1000;

  var timeInterval = setInterval(function () {
    countdownTimer.textContent = `${timeLeft} Seconds Remaining`;
    timeLeft--;

    if (timeLeft === -1) {
      let tryAgain = confirm('Out of Time! Do you want to try again?');
      clearInterval(timeInterval);
      if (tryAgain === true) {
        countdown();
        startQuiz();
      } else if (tryAgain === false) {
        alert('Thanks for playing!');
      }
    }
  }, 1000);
}

// Launch Quiz from start screen
function startQuiz() {
  window.location.assign('quiz.html');
}
displayQuestionOne();
countdown();

// Pulls up the current question
function displayQuestionOne() {
  currentQuestion.textContent = quizData[i].question;

  firstChoiceLabel.textContent = quizData[i].a;
  secondChoiceLabel.textContent = quizData[i].b;
  thirdChoiceLabel.textContent = quizData[i].c;
  fourthChoiceLabel.textContent = quizData[i].d;
}

function nextQuestion() {
  i++;
  if (i < quizData.length) {
    displayQuestionOne();
  } else {
    alert('Game over');
  }
}

nextQuestionBtn.addEventListener('click', nextQuestion);

// let userSelectedAnswer = [];

// function answerChecker() {
//   if (checkBoxC.checked) {
//     console.log(checkBoxC.checked);
//   }
// }
