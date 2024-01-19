function solution(bandage, health, attacks) {
  let answer = health;

  attacks.forEach((atk, i) => {
    if (i > 0) {
      const delay = atk[0] - attacks[i - 1][0];
      if (delay > 1 && answer > 0) {
        let heal =
          bandage[1] * (delay - 1) +
          (delay - 1 >= bandage[0]
            ? parseInt(delay / bandage[0]) * bandage[2]
            : 0);

        answer = answer + heal >= health ? health : answer + heal;
      }
    }

    answer -= atk[1];
  });

  return answer <= 0 ? -1 : answer;
}

console.log(
  solution(
    [5, 1, 5],
    30,
    [
      [2, 10],
      [9, 15],
      [10, 5],
      [11, 5],
    ],
    5
  )
);
