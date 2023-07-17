let secretNumber;

function refreshGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  const messageElement = document.querySelector('.message');
  messageElement.innerText = 'Take a guess between 1 and 100:';
  messageElement.style.color = 'black';
}

function makeGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  
  if (isNaN(guess)) {
    displayMessage('Invalid guess. Please enter a number.', 'black');
    return;
  }

  if (guess === secretNumber) {
    displayMessage(`Congratulations! ${guess} is the correct number!`, 'green');
  } else if (guess < secretNumber) {
    displayMessage('Too low! Try a higher number.', 'black');
  } else if (guess > secretNumber) {
    displayMessage('Too high! Try a lower number.', 'black');
  }
}

function displayMessage(message, color) {
  const messageElement = document.querySelector('.message');
  messageElement.innerText = message;
  messageElement.style.color = color;
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    makeGuess();
  }
}

document.getElementById('guessInput').addEventListener('keydown', handleKeyPress);
