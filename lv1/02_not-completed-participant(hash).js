// https://school.programmers.co.kr/learn/courses/30/lessons/42576
// 완주하지 못한 선수
function solution(participant, completion) {
  var answer = '';
  let obj = {};
  for (const item of participant) {
    if (obj[item]) {
      obj[item] += 1;
    } else {
      obj[item] = 1;
    }
  }

  for (const item of completion) {
    obj[item] -= 1;
  }

  for (const item in obj) {
    if (obj[item] == 1) {
      answer = item;
    }
  }
  console.log(answer);
  return answer;
}

solution(['mislav', 'stanko', 'mislav', 'ana'], ['stanko', 'ana', 'mislav']); // "mislav"
