export default function reflectShips(shipArray) {
  shipArray.forEach((ship) => {
    for (let i = ship.x; i < ship.x + ship.length; i += 1) {
      const square = document.getElementById(`player-${i}-${ship.y}`);
      square.style.backgroundColor = "green";
    }
  });
}
