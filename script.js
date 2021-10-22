let randomNumber = Math.round(Math.random() * 100);
let numberOfTurns = 1;

const container = document.querySelector('.container')
const guesses = document.querySelector('.guesses');
const lastResult = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHigh');

const guessSubmit = document.querySelector('.guessSubmit');
const guessField = document.querySelector('#guessField');

guessSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    let userGuess = Number(guessField.value);

    if (typeof userGuess != "number") {
        e.preventDefault();
    }

    if (numberOfTurns === 1 && numberOfTurns < 10) {
        guesses.textContent = 'Previous guesses ';
    }
    guesses.textContent += userGuess + ' ';

    if (userGuess === randomNumber) {
        lastResult.textContent = "Congratulations! You got it right";
        lastResult.style.color = 'green';
        lowOrHigh.textContent = "";
        setGameOver();
    } else if (numberOfTurns === 10) {
        lastResult.textContent = "Game Over!!!";
        setGameOver();
    } else {
        lastResult.textContent = "Wrong!";
        lastResult.style.color = "red";

        if (userGuess > randomNumber) {
            lowOrHigh.textContent = 'You have guessed too high';
        } else {
            lowOrHigh.textContent = "You have guess too low";
        }
    }

    numberOfTurns++;
    guessField.value = "";
    guessField.focus();
});

function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'Start new game';
    container.append(resetButton);
    resetButton.addEventListener('click', resetGame);
}

function resetGame() {
    numberOfTurns = 1;

    const resetParas = document.querySelectorAll('.resultParas p');
    resetParas.forEach(para => {
        para.textContent = "";
    });

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = "";
    guessField.focus();

    lastResult.style.color = "white";

    randomNumber = Math.round(Math.random() * 100);
}
