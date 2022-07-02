const countdownTimer = document.querySelector('#countdown-timer');
const answer = document.querySelector('#answer');
const questionCounter = document.querySelector('.question-counter');
const currentQuestion = document.querySelector('#current-question');
const firstChoiceText = document.querySelector('#first-choice-text');
const secondChoiceText = document.querySelector('#second-choice-text');
const thirdChoiceText = document.querySelector('#third-choice-text');
const fourthChoiceText = document.querySelector('#fourth-choice-text');

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

function displayQuestion() {
  currentQuestion.innerHTML = quizData[0].question;

  firstChoiceText.innerHTML = quizData[0].a;
  secondChoiceText.innerHTML = quizData[0].b;
  thirdChoiceText.innerHTML = quizData[0].c;
  fourthChoiceText.innerHTML = quizData[0].d;

  // function selectedAnswer() {
  //   let chkBox = document.querySelector('#check-box');
  //   if (chkBox.checked) {
  //     if (thirdChoiceText === 'c') {
  //       nextQuestion();
  //     } else {
  //       return false;
  //     }
  //   }
  // }
}

function nextQuestion() {}

function questionCount() {}

// selectedAnswer();
displayQuestion();
questionCount();
countdown();
