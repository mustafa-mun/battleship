export default function reflectShipDamage(shipArray) {
  shipArray.forEach((ship) => {
    if (ship.successfulAttacks.length) {
      const hittedSquare = document.getElementById(
        `player-${
          ship.successfulAttacks[ship.successfulAttacks.length - 1][0]
        }-${ship.successfulAttacks[ship.successfulAttacks.length - 1][1]}`
      );
      hittedSquare.style.backgroundColor = "red";
    }
  });
}
