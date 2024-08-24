// https://school.programmers.co.kr/learn/courses/30/lessons/42840#
// 모의고사

function solution(answers) {
  var answer = [];
  let n1 = [1, 2, 3, 4, 5];
  let n2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let n3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let score = [0, 0, 0];
  let position = [0, 0, 0];

  answers.forEach((e, i) => {
    if (position[0] >= n1.length) {
      position[0] = 0;
    }
    if (position[1] >= n2.length) {
      position[1] = 0;
    }
    if (position[2] >= n3.length) {
      position[2] = 0;
    }

    if (e === n1[position[0]]) {
      score[0]++;
    }
    if (e === n2[position[1]]) {
      score[1]++;
    }
    if (e === n3[position[2]]) {
      score[2]++;
    }

    position[0]++;
    position[1]++;
    position[2]++;
  });

  const maxScore = Math.max(...score);
  score.forEach((e, i) => {
    if (e > 0 && e === maxScore) {
      answer.push(i + 1);
    }
  });
  console.log(answer);
  return answer;
}

solution([1, 3, 2, 4, 2]); // [1,2,3]
