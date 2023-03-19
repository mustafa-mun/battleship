export const Player = () => {
  let haveTurn = true;

  const attack = () => {
    haveTurn = false;
  };

  return {
    get haveTurn() {
      return haveTurn;
    },
    attack,
  };
};

export const AIplayer = () => {
  const previousMoves = [];

  const randomMove = () => {
    const x = Math.floor(Math.random() * 11);
    const y = Math.floor(Math.random() * 11);
    previousMoves.push([x, y]);
    return [x, y];
  };

  while (
    previousMoves.some(
      (item) => JSON.stringify(item) === JSON.stringify(randomMove())
    )
  ) {
    randomMove();
  }

  return {
    previousMoves,
    randomMove,
  };
};
