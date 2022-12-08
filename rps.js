const buttons = document.querySelectorAll('[data-game-button]');
const roundMessageElement = document.getElementById('roundMessage');
const roundReportTextElement = document.querySelector("[data-round-message-text]");
const roundWinnerTextElement = document.querySelector('[data-round-winner-text]');
const gameMessageElement = document.getElementById('gameWinningMessage');
const gameWinnerTextElement = document.querySelector('[data-game-winner-text]');
let playerScore = document.querySelector('[data-player-Score]');
let compScore = document.querySelector('[data-comp-score]');
const roundButton = document.getElementById('nextRoundButton');
const restartButton = document.getElementById('restartButton');

startGame();

restartButton.addEventListener('click', startGame);
roundButton.addEventListener('click', nextRound);

function startGame() {
    buttons.forEach(button => {
        button.addEventListener('click', handleClick);
    });
    gameMessageElement.classList.remove('show');
    playerScore.innerText = '';
    compScore.innerText = '';
};

function nextRound() {
    roundMessageElement.classList.remove('show');
};


function handleClick(e) {
    console.log(this.id);
    const playerSelection = (this.id);
    const computerSelection = (getComputerChoice());
    roundReportTextElement.innerText = `You played ${playerSelection}, Computer played ${computerSelection}`;
    const result = checkRoundWin(playerSelection, computerSelection);
    reportRound(result);
    if (result != 'draw') {
        const gameResult = checkGameWin(playerScore.innerText, compScore.innerText);
        if (gameResult != undefined) {
            endGame();
        };
    };
};

function endGame() {
    roundMessageElement.classList.remove('show');
};

function getComputerChoice () {
    const options = ['Rock', 'Paper', 'Scissors'];
    const choice = options[Math.floor(Math.random()*options.length)];
    return choice;
};

function checkRoundWin(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'Paper') {
        return 'lose';
    } else if (playerSelection === 'rock' && computerSelection === 'Scissors') {
        return 'win';
    } else if (playerSelection === 'rock' && computerSelection === 'Rock') {
        return 'draw';
    } else if (playerSelection === 'paper' && computerSelection === 'Rock') {
        return 'win';
    } else if (playerSelection === 'paper' && computerSelection === 'Paper') {
        return 'draw';
    } else if (playerSelection === 'paper' && computerSelection === 'Scissors') {
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'Rock') {
        return 'lose';
    } else if (playerSelection === 'scissors' && computerSelection === 'Scissors') {
        return 'draw';
    } else if (playerSelection === 'scissors' && computerSelection === 'Paper') {
        return 'win';
    };
};

function reportRound(result) {
    if ((result) === 'win') {
        playerScore.innerText += 'X';
        roundWinnerTextElement.innerText = `
        Well Done! 
        You Win this round.`;
        roundMessageElement.classList.add('show');
    } else if ((result) === 'lose') {
        compScore.innerText += 'X';
        roundWinnerTextElement.innerText = `
        Oh Dear! 
        You Lose this round.`;
        roundMessageElement.classList.add('show');
    } else {
        roundWinnerTextElement.innerText = `
        It's a draw.
        Try again.`;
        roundMessageElement.classList.add('show');
    }
}

function checkGameWin (playerScore, compScore) {
    if (playerScore = 'XXX') {
        return "WIN";
    } if (compScore = 'XXX') {
        return "LOSE";
    }
}

function gameWin(gameResult) {
    if (gameResult === 'WIN') {
        gameWinnerTextElement.innerText = `
        Well Done!
        You Won!`;
        gameMessageElement.classList.add('show');
    } if (gameResult === 'LOSE') {
        gameWinnerTextElement.innerText = `
        You Lose.
        Try Again?`;
        gameMessageElement.classList.add('show');
    }
};