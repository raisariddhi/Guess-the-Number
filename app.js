const express = require('express');
const app = express();
const path = require('path');
const port = 4000;

let secretNumber;

app.use(express.json());

app.post('/guess', (req, res) => {
    const guess = parseInt(req.body.guess);
    //console.log(guess, secretNumber);
    if (guess === secretNumber) {
      res.json({ message: `Congratulations! ${guess} is the correct number!` });
    } else if (guess < secretNumber) {
      res.json({ message: 'Too low! Try a higher number.' });
    } else if (guess > secretNumber) {
      res.json({ message: 'Too high! Try a lower number.' });
    } else {
      res.json({ message: 'Invalid guess. Please enter a number.' });
    }
  });

  
  app.get('/new-number', (req, res) => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    res.sendStatus(200);
  });
  
  app.use(express.static(path.join(__dirname, 'public')));
  
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
  });
  
  app.post('/guess', (req, res) => {
    // Existing code for handling guesses
  });
  
  app.listen(port, () => {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log(`Server listening on port ${port}`);
  });
  