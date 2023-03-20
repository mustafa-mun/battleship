function createGrid(parent, tag) {
  for (let i = 10; i > 0; i -= 1) {
    for (let j = 10; j > 0; j -= 1) {
      const div = document.createElement("div");
      div.id = `${tag}-${i}-${j}`;
      div.className = `${i}-${j}`
      parent.appendChild(div);
    }
  }
}

export default function createGameBoards() {
  const playerBoard = document.createElement("section");
  playerBoard.id = "player-gameboard";
  createGrid(playerBoard, "player");

  const computerBoard = document.createElement("section");
  computerBoard.id = "ai-gameboard";
  createGrid(computerBoard, "ai");

  const main = document.querySelector("main");
  main.appendChild(playerBoard);
  main.appendChild(computerBoard);
}
