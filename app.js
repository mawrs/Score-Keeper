// DOM elements to get started
const p1Button = document.querySelector('#p1Button')
const p2Button = document.querySelector('#p2Button')
const p1Display = document.querySelector('#p1Display')
const p2Display = document.querySelector('#p2Display')
const resetButton = document.querySelector('#reset')
const rounds = document.querySelector('#rounds')

// Starting scores
let p1Score = 0;
let p2Score = 0;
let winningScore = 3;
let isGameOver = false;

// Play up to the winning score
p1Button.addEventListener('click', function () {
    //    If the game is NOT over, add 1 point
    if (!isGameOver) {
        p1Score += 1;
        // If the winning score is met, end the game 
        if (p1Score === winningScore) {
            isGameOver = true;
            p1Display.classList.add('has-text-success')
            p2Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        // If the winning score is NOT met, continue adding 1 point
        p1Display.textContent = p1Score;
    }
})
p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        if (p2Score === winningScore) {
            isGameOver = true;
            p2Display.classList.add('has-text-success')
            p1Display.classList.add('has-text-danger')
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        p2Display.textContent = p2Score;
    }
})

// Change the winning score based on the # of Rounds
rounds.addEventListener('change', function () {
    // Turn the new score into a number when you call it
    winningScore = parseInt(this.value);
    reset();
})

// Reset the game if the winning score is changed
function reset() {
    // Reset the game status
    isGameOver = false;
    // Reset all scores to 0
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0;
    p2Display.textContent = 0;
    p1Display.classList.remove('has-text-success', 'has-text-danger')
    p2Display.classList.remove('has-text-success', 'has-text-danger')
    p1Button.disabled = false;
    p2Button.disabled = false;

}

// Reset Button
resetButton.addEventListener('click', reset)