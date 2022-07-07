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
const scoreDisplay = document.querySelector('#score-display');

const checkBoxA = document.querySelector('#check-box-a');
const checkBoxB = document.querySelector('#check-box-b');
const checkBoxC = document.querySelector('#check-box-c');
const checkBoxD = document.querySelector('#check-box-d');

const selectedCheckBox = document.querySelector(
  '.choice-input-label-container'
);

// i is for iteration through the quizData
var i = 0;
var timeLeft = 100;
var score = [];

nextQuestionBtn.addEventListener('click', nextQuestion);

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

function startQuiz() {
  window.location.assign('quiz.html');
}

// Countdown timer
function countdown() {
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
        window.location.assign('index.html');
      }
    }
  }, 1000);
}

// Pulls up the current question
function displayQuestion() {
  currentQuestion.textContent = quizData[i].question;

  firstChoiceLabel.textContent = quizData[i].a;
  secondChoiceLabel.textContent = quizData[i].b;
  thirdChoiceLabel.textContent = quizData[i].c;
  fourthChoiceLabel.textContent = quizData[i].d;
}

var userSelectedAnswer = [];

// Display next question, store answer selected, add to score if the selected answer matches the value of the quizData correct answer, or remove time, reset checkbox state
function nextQuestion() {
  if (
    // prettier-ignore
    checkBoxA.checked || checkBoxB.checked || checkBoxC.checked || checkBoxD.checked
  ) {
    answerTracker();
    scoreTracker();
    i++;
    if (i < quizData.length) {
      displayQuestion();
      checkBoxA.checked = false;
      checkBoxB.checked = false;
      checkBoxC.checked = false;
      checkBoxD.checked = false;
    } else {
      // ! this isn't working right, reference error nextQuestion and playerTotalScore not defined
      localStorage.setItem('returnedScore', returnedScore);
      var highScore = localStorage.getItem('score', score);
      scoreDisplay.textContent = highScore;
    }
  } else {
    alert('Please select an option.');
  }
}

// function displayScore() {

// }

// A function to track the users selection
function answerTracker() {
  if (checkBoxA.checked) {
    userSelectedAnswer = userSelectedAnswer.concat(checkBoxA.value);
  }
  if (checkBoxB.checked) {
    userSelectedAnswer = userSelectedAnswer.concat(checkBoxB.value);
  }
  if (checkBoxC.checked) {
    userSelectedAnswer = userSelectedAnswer.concat(checkBoxC.value);
  }
  if (checkBoxD.checked) {
    userSelectedAnswer = userSelectedAnswer.concat(checkBoxD.value);
  }
}

// compare the value that was checked with the correct answer, if it matches add 20 points if it does not match run function for deduct time
let returnedScore = 0;
function scoreTracker() {
  if (userSelectedAnswer[i] === quizData[i].correct) {
    var totalScore = 10 + 10;
    score.push(totalScore);

    if (i < score.length) {
      returnedScore += score[i];
      console.log(returnedScore);
    }
  }
}

function storeScore() {
  localStorage.setItem('score', score);
}

displayQuestion();
countdown();
