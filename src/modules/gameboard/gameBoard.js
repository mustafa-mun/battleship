const GameBoard = () => {
  const shipsArray = [];
  const missedShots = [];

  const placeShip = (x, y, callBack) => {
    const ship = callBack;
    if(ship.length + x > 10) {
      ship.x = (x - ship.length) + 1  
    } else {
      ship.x = x;
    }

    if(ship.height + y > 10) {
      ship.y = (y - ship.height) + 1
    } else {
      ship.y = y;
    }
    shipsArray.push(ship);
    return ship;
  };

  const receiveAttack = (x, y) => {
    const ship = shipsArray.find(
      (item) =>
        x >= item.x &&
        x < item.x + item.length &&
        y >= item.y &&
        y < item.y + item.height
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
    if (!shipsArray.length) return false;
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

export default GameBoard;
