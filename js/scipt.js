const playerOneButton = document.getElementById('toPlayer1');
const pointCounter1 = document.getElementById('p1');
const playerTwoButton = document.getElementById('toPlayer2');
const pointCounter2 = document.getElementById('p2');
const resetButton = document.getElementById('rsButton');
const toPlay = document.getElementById('playTo');

let scoreOne = 0;
let scoreTwo = 0;
let winnigScore = 0;
let isGameOver = false;

const addCounterElement = () => {
    if(!isGameOver) {
        scoreOne++;
        if(scoreOne === winnigScore) {
            isGameOver = true;
            pointCounter1.classList.add('text-success');
            pointCounter2.classList.add('text-danger');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
            toPlay.disabled = true;
        } 
        pointCounter1.textContent = scoreOne;
    }
}
const addCounterElement2 = () => {
    if(!isGameOver) {
        scoreTwo++;
        if(scoreTwo === winnigScore) {
            isGameOver = true;
            pointCounter2.classList.add('text-success');
            pointCounter1.classList.add('text-danger');
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
            toPlay.disabled = true;
        } 
        pointCounter2.textContent = scoreTwo;
    }
}
const reset = () => {
    isGameOver = false;
    scoreOne = 0;
    scoreTwo = 0;
    pointCounter1.textContent = 0;
    pointCounter2.textContent = 0;
    pointCounter1.classList.remove('text-success', 'text-danger');
    pointCounter2.classList.remove('text-success', 'text-danger');
    playerOneButton.disabled = false;
    playerTwoButton.disabled = false;
    toPlay.disabled = false;
}
playerOneButton.addEventListener('click',addCounterElement);
playerTwoButton.addEventListener('click',addCounterElement2)
toPlay.addEventListener('change', function() {
    winnigScore = parseInt(this.value);
    reset();
})
resetButton.addEventListener('click', reset);