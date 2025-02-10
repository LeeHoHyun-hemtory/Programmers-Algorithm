function solution(book_time) {
  let answer = 0;

  const times = book_time
    .map((t) => {
      const sTime =
        Number(t[0].split(":")[0]) * 60 + Number(t[0].split(":")[1]);
      const eTime =
        Number(t[1].split(":")[0]) * 60 + Number(t[1].split(":")[1]) + 10;

      return [sTime, eTime];
    })
    .sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1];
      } else {
        return a[0] - b[0];
      }
    });

  const curRooms = [];

  for (let i = 0; i < times.length; i++) {
    for (let j = 0; j < curRooms.length; j++) {
      if (curRooms[j][1] <= times[i][0]) {
        curRooms.splice(j, 1);
      }
    }

    curRooms.push(times[i]);

    if (answer < curRooms.length) {
      answer = curRooms.length;
    }
  }

  return answer;
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
);
