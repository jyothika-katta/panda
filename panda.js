let score = 0;
    
function startGame() {
    setInterval(placeMole, 1000); // Place a mole every 1 second
}

function placeMole() {
    const mole = document.getElementById("mole");
    const gameContainer = document.querySelector(".game-container");
    
    // Randomly position the mole within the game container
    const maxX = gameContainer.clientWidth - mole.clientWidth;
    const maxY = gameContainer.clientHeight - mole.clientHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    
    mole.style.left = randomX + "px";
    mole.style.top = randomY + "px";
}
function whackMole(event) {
    const mole = document.getElementById("mole");
     // Check if the click event happened on the mole
    if (event.target === mole) {
        score++;
        document.getElementById("score").textContent = score;
        placeMole(); // Place a new mole after whacking
    }
}
// Start the game when the page loads
window.onload = startGame;