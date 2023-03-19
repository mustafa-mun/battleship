function createGrid(parent) {
  for (let i = 10; i >= 1; i -= 1) {
    for (let j = 10; j >= 1; j -= 1) {
      const div = document.createElement("div");
      div.id = `[${j},${i}]`;
      parent.appendChild(div);
    }
  }
}

export default function createGameBoards() {
  const playerBoard = document.createElement("section");
  playerBoard.id = "player-gameboard";
  createGrid(playerBoard);

  const computerBoard = document.createElement("section");
  computerBoard.id = "ai-gameboard";
  createGrid(computerBoard);

  const main = document.querySelector("main");
  main.appendChild(playerBoard);
  main.appendChild(computerBoard);
}
