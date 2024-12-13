document.addEventListener("DOMContentLoaded", function () {
  const gameArena = document.getElementById("game-arena");
  const arenaSize = 600;
  const cellSize = 20;
  let score = 0;
  let gameStarted = false; //game status
  let food = { x: 300, y: 200 }; // {x:15*20, y:10*20} // cellSize * cordinate -> pixels
  let snake = [
    { x: 160, y: 200 },
    { x: 140, y: 200 },
    { x: 120, y: 200 },
  ];
  //head, body..., tail

  function drawDiv(x, y, className) {
    // x and y are the top-left pixels of the cell
    const divElement = document.createElement("div");
    divElement.classList.add(className);
    divElement.style.top = `${y}px`;
    divElement.style.left = `${x}px`;
    return divElement;
  }

  function drawFoodAndSnake() {
    gameArena.innerHTML = ""; //wipe out everything & redraw with new positions
    snake.forEach((snakeCell) => {
      const snakeElement = drawDiv(snakeCell.x, snakeCell.y, "snake");
      gameArena.appendChild(snakeElement);
    });
    const foodElement = drawDiv(food.x, food.y, "food");
    gameArena.appendChild(foodElement);
  }
  function runGame() {
    if (!gameStarted) {
      gameStarted = true;
      //gameLoop() //TODO
      drawFoodAndSnake();
    }
  }

  function initiateGame() {
    const scoreBoard = document.createElement("div");
    scoreBoard.id = "score-board";
    // to insert before the arena
    document.body.insertBefore(scoreBoard, gameArena);
    const startButton = document.createElement("button");
    startButton.textContent = "Start Game";
    startButton.classList.add("start-button");

    startButton.addEventListener("click", function startGame() {
      startButton.style.display = "none"; //we want that once the game is started it should continue to run until the constraits are met
      runGame();
    });
    document.body.appendChild(startButton);
  }
  initiateGame();
});
