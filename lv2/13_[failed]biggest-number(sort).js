// https://school.programmers.co.kr/learn/courses/30/lessons/42746#
// 가장 큰 수

function solution(numbers) {
  var answer = '';
  let str = numbers.map((e) => e.toString());
  str.sort((a, b) => {
    let ab = a + b;
    let ba = b + a;
    return ab > ba ? -1 : 1;
  });
  answer = str.join('');
  if (answer[0] === '0') {
    return '0';
  }
  console.log(answer);
  return answer;
}

solution([3, 30, 34, 5, 9]); //"9534330"
