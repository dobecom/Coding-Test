// https://school.programmers.co.kr/learn/courses/30/lessons/70129
// 이진 변환

function solution(s) {
  var answer = [];
  let zeroSum = 0;
  let tryCnt = 0;
  while (s.length > 1) {
    const cnt = s.split('').filter((item) => item === '1');
    zeroSum = zeroSum + s.length - cnt.length;
    tryCnt++;
    //111111 -> 길이를 2진수로 => 6 -> 110
    s = cnt.length.toString(2); // 110
  }
  answer = [tryCnt, zeroSum];
  console.log(answer);
  return answer;
}

solution('110010101001'); // [3,8]
