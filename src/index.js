import "./style.scss";
import createGameBoards from "./modules/dom/create-board/createBoard";
import GameBoard from "./modules/gameboard/gameBoard";
import Ship from "./modules/ship/shipFactory";
import reflectShips from "./modules/dom/ships-dom/reflectShips";
import reflectShipDamage from "./modules/dom/ships-dom/shipDamage";
import * as PlayerController from "./modules/player/player";

let gameOver = true;

createGameBoards();

const playerBoard = GameBoard();
const aiBoard = GameBoard();

if (playerBoard.isEveryShipSunk() || aiBoard.isEveryShipSunk()) {
  gameOver = true;
}

if(!gameOver) {

// This will be done with drag and drop or manuel coordinate input
playerBoard.placeShip(1, 1, Ship(3));
playerBoard.placeShip(3, 3, Ship(4));
playerBoard.placeShip(2, 5, Ship(5));
playerBoard.placeShip(7, 8, Ship(4));

// Reflect ships to dom
reflectShips(playerBoard.shipsArray);
// // Random ai move to player gameBoard
const ai = PlayerController.AIplayer();
const randomAIMove = ai.randomMove();
playerBoard.receiveAttack(randomAIMove[0], randomAIMove[1]);
// Reflect ship damage to dom
reflectShipDamage(playerBoard.shipsArray);
}