import * as PlayerController from "./player";

const player = PlayerController.Player();
const ai = PlayerController.AIplayer();

test("players have turn by default", () => {
  expect(player.haveTurn).toBeTruthy();
});

test("player has no turn after one attack", () => {
  const newPlayer = PlayerController.Player()
  newPlayer.attack()
  expect(newPlayer.haveTurn).toBeFalsy()
})

test("ai is not making the same moves", () => {
  for (let i = 0; i < 100; i += 1) {
    ai.randomMove();
  }

  const array = ai.previousMoves;
  const set = new Set(ai.previousMoves);
  expect(array.length).toBe(set.size);
});
