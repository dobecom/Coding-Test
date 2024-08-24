// https://school.programmers.co.kr/learn/courses/30/lessons/86491
// 최소직사각형

function solution(sizes) {
  var answer = 0;
  let list = sizes.map((e) => {
    let [w, h] = e;
    if (h > w) {
      return [h, w];
    } else {
      return [w, h];
    }
  });
  let maxWidth = 0;
  let maxHeight = 0;

  list.forEach((e) => {
    const [w, h] = e;
    if (w > maxWidth) maxWidth = w;
    if (h > maxHeight) maxHeight = h;
  });

  answer = maxWidth * maxHeight;
  console.log(answer);
  return answer;
}

solution([
  [10, 7],
  [12, 3],
  [8, 15],
  [14, 7],
  [5, 15],
]); //120
