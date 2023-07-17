function refreshGame() {
    fetch('/new-number')
      .then(() => {
        const messageElement = document.querySelector('.message');
        messageElement.innerText = 'Take a guess between 1 and 100:';
        messageElement.style.color = 'black';
      })
      .catch(error => console.error('Error refreshing the game:', error));
  }
  
async function makeGuess() {
    const guess = document.getElementById('guessInput').value;
    const response = await fetch('/guess', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ guess: guess })
    });
  
    const data = await response.json();
    const messageElement = document.querySelector('.message');
    messageElement.innerText = data.message;
  
    if (data.message.includes('correct number')) {
      messageElement.style.color = 'green';
    } else {
      messageElement.style.color = 'black';
    }
  }
  
  function handleKeyPress(event) {
    if (event.keyCode === 13) {
      makeGuess();
    }
  }
  
  document.getElementById('guessInput').addEventListener('keydown', handleKeyPress);
  
