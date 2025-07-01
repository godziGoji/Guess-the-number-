let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const guess = parseInt(document.getElementById('guess').value);
  const result = document.getElementById('result');

  if (guess === randomNumber) {
    result.textContent = "🎉 You guessed it!";
  } else if (guess < randomNumber) {
    result.textContent = "📉 Too low!";
  } else {
    result.textContent = "📈 Too high!";
  }
}
