// https://school.programmers.co.kr/learn/courses/30/lessons/42626#
// 더 맵게

// failed to the performance test
// ref. ./func/minHeap.js
function solution(scoville, K) {
  var answer = 0;
  while (scoville.some((e) => e < K)) {
    if (scoville.length > 1) {
      scoville.sort((a, b) => a - b);
      const min = scoville.shift();
      scoville[0] = min + scoville[0] * 2;
      answer++;
    } else {
      answer = -1;
      break;
    }
  }
  console.log(answer);
  return answer;
}

solution([1, 2, 3, 9, 10, 12], 7); // 2