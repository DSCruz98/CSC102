let point = 0;
// first button
    function rollDice() {
        // Roll two dice for fun
        let die1 = Math.floor(Math.random() * 6) + 1;
        let die2 = Math.floor(Math.random() * 6) + 1;
        // adds dice
        let total = die1 + die2;
// popup for user on alert
        alert("You rolled a " + die1 + " and a " + die2 + " (Total: " + total + ")");

        return total;
    }
// second button
    function playGame() {
        if (point === 0) {
            // First roll
            let firstRoll = rollDice();
            if (firstRoll === 7 || firstRoll === 11) {
                alert("You rolled a " + firstRoll + ". You win!");
                resetGame();
            } else if (firstRoll === 2 || firstRoll === 3 || firstRoll === 12) {
                alert("You rolled a " + firstRoll + ". Craps! You lose!");
                resetGame();
            } else {
                // Sets the point
                point = firstRoll;
                alert("Your point is now " + point + ". Keep rolling to hit your point!");
            }
        } else {
            // Subsequent Rolls
            let nextRoll = rollDice();
            if (nextRoll === point) {
                alert("You rolled your point " + point + "! You win!");
                resetGame();
            } else if (nextRoll === 7) {
                alert("You rolled a 7. You lose!");
                resetGame();
            } else {
                alert("Keep rolling! Try to hit your point " + point + "!");
            }
        }
    }
// sometimes the points bug out after a win/loss
// third button
    function resetGame() {
        point = 0;
    }
