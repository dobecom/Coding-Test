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

  let multiply = 1;
  const list = Object.keys(obj);
  if (list.length > 1) {
    list.forEach((e) => {
      const itemList = obj[e];
      multiply = multiply * itemList.length;
    });
  }
  answer = clothes.length + (multiply > 1 ? multiply : 0);
  console.log(answer);
  return answer;
}

solution([
  ['yellow_hat', 'headgear'],
  ['blue_sunglasses', 'eyewear'],
  ['green_turban', 'headgear'],
]); // 5
