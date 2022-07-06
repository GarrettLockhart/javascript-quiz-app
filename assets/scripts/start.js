const scoreDisplay = document.querySelector('#scores-display');

function startQuiz() {
  window.location.assign('quiz.html');
}

// ! this only partially works

function displayScore() {
  var scoreDisplayOutput = localStorage.getItem(
    JSON.parse('totalScore', score)
  );
  console.log(scoreDisplayOutput);
}
displayScore();

// const listItem = document.createElement('li');
// const scoreListContent = listItem.createTextNode(scoreDisplayOutput);
// listItem.appendChild(scoreListContent);
