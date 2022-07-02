const countdownTimer = document.querySelector('#countdown-timer');
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

// Countdown timer
function countdown() {
  var timeLeft = 75;

  var timeInterval = setInterval(function () {
    countdownTimer.textContent = `Time: ${timeLeft} Seconds Remaining`;
    timeLeft--;

    if (timeLeft === -1) {
      clearInterval(timeInterval);
      countdownTimer.textContent = 'Out of Time!';
    }
  }, 1000);
}

function startQuiz() {
  window.location.assign('quiz.html');
}
displayQuestion();
countdown();

nextQuestionBtn.addEventListener('click', nextQuestion);

function nextQuestion() {}

// Pulls up the current question
function displayQuestion() {
  currentQuestion.textContent = quizData[0].question;

  firstChoiceLabel.textContent = quizData[0].a;
  secondChoiceLabel.textContent = quizData[0].b;
  thirdChoiceLabel.textContent = quizData[0].c;
  fourthChoiceLabel.textContent = quizData[0].d;
}
