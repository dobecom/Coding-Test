// https://school.programmers.co.kr/learn/courses/30/lessons/1845
// 폰켓몬
function solution(nums) {
  var answer = 0;
  let temp = [...new Set(nums)];
  let kinds = temp.length;
  let count = nums.length / 2;
  answer = kinds >= count ? count : kinds;
  console.log(answer);
  return answer;
}

solution([3, 3, 3, 2, 2, 2]); // 2
