const ship = (length) => {
  let numberOfHits = 0;
  const hit = () => {
    numberOfHits += 1;
  };
  let sunk = false;
  const isSunk = () => {
    if (length === numberOfHits) {
      sunk = true;
    } else {
      sunk = false;
    }
    return sunk;
  };
  return {
    length,
    hit,
    get numberOfHits() {
      return numberOfHits;
    },
    isSunk,
  };
};

export default ship;
