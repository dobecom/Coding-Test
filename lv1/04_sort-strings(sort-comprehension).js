// https://school.programmers.co.kr/learn/courses/30/lessons/12915
// 문자열 내 마음대로 정렬하기
function solution(strings, n) {
  var answer = [];

  strings.sort((a, b) => {
    if (a[n] === b[n]) {
      return a > b ? 1 : -1; // 1이면 a가 뒤, -1이면 b가 뒤
    } else {
      return a[n] > b[n] ? 1 : -1;
    }
  });
  answer = strings;
  console.log(answer);
  return answer;
}

solution(['sun', 'bed', 'car'], 1); // ["car", "bed", "sun"]
