const player1 = {
    score: 0,
    button: document.getElementById('toPlayer1'),
    pointCounter: document.getElementById('p1'),
}
const player2 = {
    score: 0,
    button: document.getElementById('toPlayer2'),
    pointCounter: document.getElementById('p2'),
}
const resetButton = document.getElementById('rsButton');
const toPlay = document.getElementById('playTo');
let winnigScore = 0;
let isGameOver = false;

const updateGameScore = (rival, opponent) => {
    if(!isGameOver) {
        rival.score++;
        if(rival.score === winnigScore) {
            gameOver(rival, opponent);
        } 
        rival.pointCounter.textContent = rival.score;
    }
}
const gameOver = (rival, opponent) => {
    isGameOver = true;
    rival.pointCounter.classList.add('text-success');
    opponent.pointCounter.classList.add('text-danger');
    rival.button.disabled = true;
    opponent.button.disabled = true;
    toPlay.disabled = true;
}
const addCounterElement = () => {
        updateGameScore(player1, player2);
    }
const addCounterElement2 = () => {
    updateGameScore(player2, player1)
}
const reset = () => {
    isGameOver = false;
    player1.score = 0;
    player2.score = 0;
    player1.pointCounter.textContent = 0;
    player2.pointCounter.textContent = 0;
    player1.pointCounter.classList.remove('text-success', 'text-danger');
    player2.pointCounter.classList.remove('text-success', 'text-danger');
    player1.button.disabled = false;
    player2.button.disabled = false;
    toPlay.disabled = false;
}
player1.button.addEventListener('click',addCounterElement);
player2.button.addEventListener('click',addCounterElement2);
toPlay.addEventListener('change', function() {
    winnigScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset);