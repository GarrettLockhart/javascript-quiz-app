const countdownTimer = document.querySelector('#inner-time');
const questionCounter = document.querySelector('.question-counter');
const questionCounterNum = document.querySelector('#question-counter-text');
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
var score = 0;
var userSelectedAnswer = [];
var highScore = JSON.parse(localStorage.getItem('playerDetails'));

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

// Pulls up the current question, their answers, and also advances the question counter number based on index position
if (document.body.contains(currentQuestion)) {
  function displayQuestion() {
    questionCounterNum.textContent = i + 1;
    currentQuestion.textContent = quizData[i].question;

    firstChoiceLabel.textContent = quizData[i].a;
    secondChoiceLabel.textContent = quizData[i].b;
    thirdChoiceLabel.textContent = quizData[i].c;
    fourthChoiceLabel.textContent = quizData[i].d;
  }
  displayQuestion();
  countdown();
}

// checks if key "playerDetails" exists in local storage, if not displays what is in local storage"
function storageDefault() {
  if (localStorage.getItem('playerDetails') === null) {
    scoreDisplay.textContent = 'No Scores Yet!';
  } else if (
    localStorage.getItem('playerDetails') ===
    localStorage.getItem('playerDetails')
  ) {
    scoreDisplay.textContent = `${highScore.playerName} Score: ${highScore.playerScore}`;
  }
}

// Display next question, store answer selected, add to score if the selected answer matches the value of the quizData correct answer, or remove time, reset checkbox state
if (document.body.contains(nextQuestionBtn)) {
  nextQuestionBtn.addEventListener('click', function () {
    // prettier-ignore
    if (checkBoxA.checked || checkBoxB.checked || checkBoxC.checked || checkBoxD.checked) {
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
        var playerInitials = prompt(
          'Please enter your initials to store your high score'
          );
  
          var playerDetails = {
            playerName: playerInitials,
            playerScore: score,
          };
  
          localStorage.setItem('playerDetails', JSON.stringify(playerDetails));
          window.location.reload();
      }
    } else {
      alert('Please select an option.');
    }
  });
}

// A function to track the users selection and store it in an array
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

// compare the value that was checked with the correct answer, if it matches the correct answer add 20 points if it does not match deduct 20 second from timeLeft
function scoreTracker() {
  if (userSelectedAnswer[i] === quizData[i].correct) {
    score += 20;
  } else {
    timeLeft -= 20;
  }
  return score;
}

storageDefault();
