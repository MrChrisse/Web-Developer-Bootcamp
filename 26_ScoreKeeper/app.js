const btnP1 = document.querySelector('#btn_p1');
const btnP2 = document.querySelector('#btn_p2');
const btnReset = document.querySelector('#reset');
const score = document.querySelector('h2');
const score1 = document.querySelector('#score1');
const score2 = document.querySelector('#score2');
const rounds = document.querySelector('select');
let gameOver = false;

btnP1.addEventListener('click', function (e) {
  let score1_num = score1.innerText;
  score1_num++;
  score1.innerText = score1_num;
  if (!gameOver && score1.innerText === rounds.value) {
    gameOver = true;
    btnP1.disabled = true;
    btnP2.disabled = true;
    score1.classList.add('winner');
    score2.classList.add('loser');
  }
});

btnP2.addEventListener('click', function (e) {
  let score2_num = score2.innerText;
  score2_num++;
  score2.innerText = score2_num;
  if (!gameOver && score2.innerText === rounds.value) {
    gameOver = true;
    btnP1.disabled = true;
    btnP2.disabled = true;
    score1.classList.add('loser');
    score2.classList.add('winner');
  }
});

reset.addEventListener('click', function () {
  score1.innerText = '0';
  score2.innerText = '0';
  score1.classList.remove('winner', 'loser');
  score2.classList.remove('winner', 'loser');
  btnP1.disabled = false;
  btnP2.disabled = false;
  gameOver = false;
});
