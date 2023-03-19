const gameBoard = () => {
  const shipsArray = [];
  const missedShots = [];

  const placeShip = (x, y, callBack) => {
    const ship = callBack;
    ship.x = x;
    ship.y = y;
    shipsArray.push(ship);
    return ship;
  };

  const receiveAttack = (x, y) => {
    const ship = shipsArray.find(
      (item) => x >= item.x && x < item.x + item.length && item.y === y
    );
    if (!ship) {
      missedShots.push([x, y]);
      return null;
    }

    // Prevent multiple attacks to same spot
    if (
      !ship.successfulAttacks.some(
        (item) => JSON.stringify(item) === JSON.stringify([x, y])
      )
    ) {
      ship.successfulAttacks.push([x, y]);
      ship.hit();
    }
    return ship;
  };

  const isEveryShipSunk = () => {
    if (shipsArray.every((item) => item.isSunk())) return true;
    return false;
  };

  return {
    shipsArray,
    placeShip,
    receiveAttack,
    missedShots,
    isEveryShipSunk,
  };
};

export default gameBoard;
