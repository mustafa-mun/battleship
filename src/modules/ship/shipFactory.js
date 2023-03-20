const Ship = (length, height) => {
  let numberOfHits = 0;
  const successfulAttacks = [];

  const hit = () => {
    numberOfHits += 1;
  };
  let sunk = false;
  const isSunk = () => {
    if (length === numberOfHits || height === numberOfHits) {
      sunk = true;
    } else {
      sunk = false;
    }
    return sunk;
  };
  return {
    length,
    height,
    successfulAttacks,
    hit,
    get numberOfHits() {
      return numberOfHits;
    },
    isSunk,
  };
};

export default Ship;
