// https://school.programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  var answer = [];
  let temp = [];
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      temp.push(numbers[i] + numbers[j]);
    }
  }
  answer = [...new Set(temp)].sort((a, b) => a - b);
  return answer;
}
