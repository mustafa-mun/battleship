import ship from "./shipFactory";

const newShip = ship(3);

test("ships have the approprite length", () => {
  expect(newShip.length).toBe(3);
});

test("ships is not sunk by default", () => {
  expect(newShip.isSunk()).toBeFalsy()
})

test('ship.hit() should increment numberOfHits', () => {
  const copy = ship(3);
  copy.hit();
  expect(copy.numberOfHits).toBe(1);
});

test("ship.isSunk() should work properly if numberOfHits equals to length",() => {
  const copy = ship(1);
  copy.hit();
  expect(copy.isSunk).toBeTruthy()
})