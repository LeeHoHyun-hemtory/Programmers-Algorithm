function solution(friends, gifts) {
  const len = friends.length;
  const answer = new Array(len).fill(0);
  const give = new Map(); // 주고 받음
  const point = new Map(); // 선물지수

  friends.forEach((name) => {
    point.set(name, 0);
  });

  gifts.forEach((str) => {
    const [g, r] = str.split(" ");

    // 주고 받은 기록
    if (give.has(str)) {
      give.set(str, give.get(str) + 1);
    } else {
      give.set(str, 1);
    }

    // 선물지수 계산
    point.set(g, point.get(g) + 1);
    point.set(r, point.get(r) - 1);
  });

  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      const f1 = friends[i];
      const f2 = friends[j];

      if (give.has(`${f1} ${f2}`) || give.has(`${f2} ${f1}`)) {
        const f1tof2 = give.has(`${f1} ${f2}`) ? give.get(`${f1} ${f2}`) : 0;
        const f2tof1 = give.has(`${f2} ${f1}`) ? give.get(`${f2} ${f1}`) : 0;

        if (f1tof2 > f2tof1) {
          answer[i]++;
        } else if (f1tof2 < f2tof1) {
          answer[j]++;
        } else {
          if (point.get(f1) > point.get(f2)) {
            answer[i]++;
          } else if (point.get(f1) < point.get(f2)) {
            answer[j]++;
          }
        }
      } else {
        if (point.get(f1) > point.get(f2)) {
          answer[i]++;
        } else if (point.get(f1) < point.get(f2)) {
          answer[j]++;
        }
      }
    }
  }

  return Math.max(...answer);
}

console.log(
  solution(
    ["muzi", "ryan", "frodo", "neo"],
    [
      "muzi frodo",
      "muzi frodo",
      "ryan muzi",
      "ryan muzi",
      "ryan muzi",
      "frodo muzi",
      "frodo ryan",
      "neo muzi",
    ]
  )
);

//	[3, 5, 5, -1]
