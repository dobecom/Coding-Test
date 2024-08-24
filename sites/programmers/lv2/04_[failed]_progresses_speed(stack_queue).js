// https://school.programmers.co.kr/learn/courses/30/lessons/42586
// 기능개발
function solution(progresses, speeds) {
  var answer = [];
  const size = progresses.length;
  const dayCost = [];
  for (let i = 0; i < size; i++) {
    let remain = 100 - progresses[i];
    if (speeds[i] > remain) {
      dayCost.push(1);
    } else {
      dayCost.push(Math.ceil(remain / speeds[i]));
    }
  }

  let maxDay = dayCost[0];
  let sum = 0;
  for (let i = 0; i < dayCost.length; i++) {
    if (dayCost[i] <= maxDay) {
      sum++;
    } else {
      answer.push(sum);
      sum = 1;
      maxDay = dayCost[i];
    }
  }
  answer.push(sum);
  return answer;
}
