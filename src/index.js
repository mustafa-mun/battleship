import "./style.scss";
import createGameBoards from "./modules/dom/create-board/createBoard";
import GameBoard from "./modules/gameboard/gameBoard";
import Ship from "./modules/ship/shipFactory"
// import * as PlayerController from "./modules/player/player";

createGameBoards();

// const aiBoardEL = document.getElementById("ai-gameBoard");
// const playerBoardEl = document.getElementById("player-gameboard");

const playerBoard = GameBoard();
// const aiBoard = GameBoard()

// // const player = PlayerController.Player();
// const ai = PlayerController.AIplayer();
playerBoard.placeShip(1,1,Ship(3))
playerBoard.placeShip(3,3, Ship(4))

playerBoard.shipsArray.forEach(ship => {
  for(let i = ship.x; i < ship.x + ship.length; i+=1) {
    const square = document.getElementById(`player-${ship.x}-${i}`)
  square.style.backgroundColor = "green"
  }
})
// // Random ai move to player gameBoard
// const randomAIMove = ai.randomMove()
// gameBoard.receiveAttack(randomAIMove[0], randomAIMove[1])
// const randomMove = document.getElementById(`${JSON.stringify(randomAIMove)},player`)
// randomMove.style.backgroundColor = "green"
  