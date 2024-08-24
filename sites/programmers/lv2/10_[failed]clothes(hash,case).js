// https://school.programmers.co.kr/learn/courses/30/lessons/42578#
// 의상

function solution(clothes) {
  var answer = 0;
  const obj = {};
  clothes.forEach((e) => {
    if (obj[e[1]]) {
      obj[e[1]] = [...obj[e[1]], e[0]];
    } else {
      obj[e[1]] = [e[0]];
    }
  });
  answer = 1;
  for (let key in obj) {
    answer *= obj[key].length + 1;
  }
  console.log(answer - 1);
  return answer - 1;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]); // 5
