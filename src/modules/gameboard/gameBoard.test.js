import ship from "../ship/shipFactory";
import GameBoard from "./gameBoard";

const board = GameBoard();

test("gameBoard is able to place ships", () => {
  expect(board.placeShip(4, 4, ship(3,1)).x).toBe(4);
});

test("gameboard can receive attack", () => {
  const newShip = board.shipsArray.find((item) => item.x === 4 && item.y === 4);
  expect(board.receiveAttack(4, 4)).toBe(newShip);
});

test("if there is no ship at coordinates receive attack returns null", () => {
  expect(board.receiveAttack(3, 4)).toBeFalsy();
});

test("ship takes damage", () => {
  board.placeShip(3, 3, ship(2, 1));
  expect(board.receiveAttack(3, 3).numberOfHits).toBe(1);
});

test("ship takes damage respect to their length", () => {
  expect(board.receiveAttack(6, 4)).toBeTruthy();
});

test("shiop takes damage respect to their height",() => {
  board.placeShip(7,7, ship(1,3))
  expect(board.receiveAttack(7,9)).toBeTruthy()
})

test("gameboard records missed shots", () => {
  expect(board.missedShots).toMatchObject([[3, 4]]);
});

test("gameboard should report if every ship is sunk", () => {
  const newBoard = GameBoard();
  newBoard.placeShip(3, 3, ship(2, 1));
  newBoard.placeShip(2, 2, ship(2, 1));

  newBoard.receiveAttack(3, 3);
  newBoard.receiveAttack(4, 3);
  newBoard.receiveAttack(2, 2);
  newBoard.receiveAttack(3, 2);

  expect(newBoard.isEveryShipSunk()).toBeTruthy();
  expect(board.isEveryShipSunk()).toBeFalsy();
});
