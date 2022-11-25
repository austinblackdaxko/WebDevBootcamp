const p1 = {
  score: 0,
  button: document.querySelector('#addP1'),
  display: document.querySelector('#p1'),
  wins: 0,
  winsDisplay: document.querySelector('#player1Wins')
}

const p2 = {
  score: 0,
  button: document.querySelector('#addP2'),
  display: document.querySelector('#p2'),
  wins: 0,
  winsDisplay: document.querySelector('#player2Wins')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#winScore')

let winningScore = parseInt(winningScoreSelect.value);
let isGameOver = false;

p1.button.addEventListener('click', function (e) {
  updateScore(p1, p2)
})

p2.button.addEventListener('click', function (e) {
  updateScore(p2, p1)
})

resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function () {
  winningScore = parseInt(this.value)
  reset();
})

function reset() {
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerText = '0';
    p.display.removeAttribute('class');
    p.button.disabled = false;
  }
  isGameOver = false;
}

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score >= winningScore && (player.score - opponent.score) >= 2) {
      isGameOver = true;
      player.display.setAttribute('class', 'has-text-success')
      opponent.display.setAttribute('class', 'has-text-danger')
      player.button.disabled = true;
      opponent.button.disabled = true;
      player.wins += 1;
      player.winsDisplay.innerText = player.wins
    }
    player.display.innerText = player.score;
  }
}