export default function reflectShips(shipArray) {
  shipArray.forEach((ship) => {
    if (ship.height > 1) {
      for (let i = ship.y; i < ship.y + ship.height; i += 1) {
        const square = document.getElementById(`player-${ship.x}-${i}`);
        square.style.backgroundColor = "rgb(169, 103, 231)";
      }
    }

    if (ship.length > 1) {
      for (let i = ship.x; i < ship.x + ship.length; i += 1) {
        const square = document.getElementById(`player-${i}-${ship.y}`);
        square.style.backgroundColor = "rgb(169, 103, 231)";
      }
    }
  });
}
