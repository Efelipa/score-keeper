const playerOneButton = document.getElementById('toPlayer1');
const pointCounter1 = document.getElementById('p1');
const playerTwoButton = document.getElementById('toPlayer2');
const pointCounter2 = document.getElementById('p2');
const resetButton = document.getElementById('rsButton');

let scoreOne = 0;
let scoreTwo = 0;
let winnigScore = 5;
let isGameOver = false;

const addCounterElement = () => {
    if(!isGameOver) {
        scoreOne++;
        if(scoreOne === winnigScore) {
            isGameOver = true;
            playerOneButton.disabled = true;
            playerTwoButton.disabled = true;
            pointCounter1.classList.add('text-success');
            pointCounter2.classList.add('text-danger');
        } 
        pointCounter1.textContent = scoreOne;
    }
}
const addCounterElement2 = () => {
    if(!isGameOver) {
        scoreTwo++;
        if(scoreTwo === winnigScore) {
            isGameOver = true;
            playerTwoButton.disabled = true;
            playerTwoButton.disabled = true;
            pointCounter2.classList.add('text-success');
            pointCounter1.classList.add('text-danger');
        } 
        pointCounter2.textContent = scoreTwo;
    }
}

playerOneButton.addEventListener('click',addCounterElement);
playerTwoButton.addEventListener('click',addCounterElement2)
