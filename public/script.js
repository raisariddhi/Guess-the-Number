function refreshGame() {
  const messageElement = document.querySelector('.message');
  messageElement.innerText = 'Take a guess between 1 and 100:';
  messageElement.style.color = 'black';
}

  
function makeGuess() {
  const guess = parseInt(document.getElementById('guessInput').value);
  const secretNumber = Math.floor(Math.random() * 100) + 1;

  const messageElement = document.querySelector('.message');
  if (guess === secretNumber) {
    messageElement.innerText = `Congratulations! ${guess} is the correct number!`;
    messageElement.style.color = 'green';
  } else if (guess < secretNumber) {
    messageElement.innerText = 'Too low! Try a higher number.';
    messageElement.style.color = 'black';
  } else if (guess > secretNumber) {
    messageElement.innerText = 'Too high! Try a lower number.';
    messageElement.style.color = 'black';
  } else {
    messageElement.innerText = 'Invalid guess. Please enter a number.';
    messageElement.style.color = 'black';
  }
}

  
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      makeGuess();
    }
  }
  
  document.getElementById('guessInput').addEventListener('keydown', handleKeyPress);
  
