// https://school.programmers.co.kr/learn/courses/30/lessons/12906
// 같은 숫자는 싫어

function solution(arr) {
  var answer = [];
  arr.forEach((e, i) => {
    if (answer.length > 0) {
      const item = answer.pop();
      if (item === e) {
        answer.push(e);
      } else {
        answer.push(arr[i - 1]);
        answer.push(e);
      }
    } else {
      answer.push(e);
    }
  });
  console.log(answer);
  return answer;
}

solution([1, 1, 3, 3, 0, 1, 1]); // [1,3,0,1]
