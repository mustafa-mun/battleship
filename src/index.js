import "./style.scss";
import createGameBoards from "./modules/dom/create-board/createBoard";
import GameBoard from "./modules/gameboard/gameBoard";
import Ship from "./modules/ship/shipFactory";
import reflectShips from "./modules/dom/ships-dom/reflectShips";
import reflectShipDamage from "./modules/dom/ships-dom/shipDamage";
import * as PlayerController from "./modules/player/player";
import * as Elements from "./modules/dom/elements/elements";

Elements.theme.play();
Elements.theme.volume = 0.1;

let gameOver = false;

createGameBoards();

const aiSquares = document.getElementsByClassName("ai-square");
const playerBoard = GameBoard();
const aiBoard = GameBoard();

if (playerBoard.isEveryShipSunk() || aiBoard.isEveryShipSunk()) {
  gameOver = true;
}

if (!gameOver) {
  // This will be done with drag and drop or manuel coordinate input

  for (let i = 0; i < aiSquares.length; i += 1) {
    aiSquares[i].addEventListener("click", (event) => {
      console.log(event.target);
      Elements.cannonHit.currentTime = 0;
      Elements.cannonHit.play();
    });
  }

  playerBoard.placeShip(1, 1, Ship(4, 3));
  playerBoard.placeShip(3, 3, Ship(1, 4));
  playerBoard.placeShip(6, 5, Ship(1, 2));
  playerBoard.placeShip(7, 8, Ship(1, 3));
  playerBoard.placeShip(10, 2, Ship(3, 1));
  playerBoard.placeShip(10, 10, Ship(1, 4));
  // Reflect ships to dom
  reflectShips(playerBoard.shipsArray);
  // // Random ai move to player gameBoard
  const ai = PlayerController.AIplayer();
  const randomAIMove = ai.randomMove();
  playerBoard.receiveAttack(randomAIMove[0], randomAIMove[1]);
  // Reflect ship damage to dom
  reflectShipDamage(playerBoard.shipsArray);
}
