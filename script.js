let randomNumber = Math.floor(Math.random() * 100) + 1;

const guessesElement = document.querySelector(".guesses");
const lastResultElement = document.querySelector(".lastResult");
const lowOrHighElement = document.querySelector(".lowOrHigh");

const guessSubmitButton = document.querySelector(".guessSubmit");
const guessFieldElement = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
guessFieldElement.focus();

function checkGuess() {
	const userGuess = Number(guessFieldElement.value);

	if (guessCount === 1) {
		guessesElement.textContent = "Previous guesses: ";
	}
	guessesElement.textContent += userGuess + " ";

	if (userGuess === randomNumber) {
		lastResultElement.textContent = "Congratulations! You got it right!";
		lastResultElement.style.backgroundColor = "green";
		lowOrHighElement.textContent = "";
		setGameOver();
	} else if (guessCount === 10) {
		lastResultElement.textContent = "!!!GAME OVER!!!";
		lowOrHighElement.textContent = "";
		setGameOver();
	} else {
		lastResultElement.textContent = "Wrong!";
		lastResultElement.style.backgroundColor = "red";

		if (userGuess < randomNumber) {
			lowOrHighElement.textContent = "Last guess was too low!";
		} else if (userGuess > randomNumber) {
			lowOrHighElement.textContent = "Last guess was too high!";
		}
	}

	guessCount++;
	guessFieldElement.value = "";
	guessFieldElement.focus();
}

guessSubmitButton.addEventListener("click", checkGuess);

function setGameOver() {
	guessField.disabled = true;
	guessSubmit.disabled = true;
	resetButton = document.createElement("button");
	resetButton.textContent = "Start new game";
	document.body.append(resetButton);
	resetButton.addEventListener("click", resetGame);
}

function resetGame() {
	guessCount = 1;

	const resultParagraphElements = document.querySelectorAll(".results p");
	for (const paragraph of resultParagraphElements) {
		paragraph.textContent = "";
	}

	resetButton.parentNode.removeChild(resetButton);

	guessFieldElement.disabled = false;
	guessSubmitButton.disabled = false;
	guessFieldElement.value = "";
	guessFieldElement.focus();

	lastResultElement.style.backgroundColor = "white";

	randomNumber = Math.floor(Math.random() * 100) + 1;
}
