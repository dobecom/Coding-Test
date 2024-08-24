// https://school.programmers.co.kr/learn/courses/30/lessons/42587
// 프로세스
function solution(priorities, location) {
  var answer = 0;
  while (priorities.length > 0) {
    const item = priorities.shift(); // 9
    const list = [...new Set(priorities)]; // 9,6
    let executeFlag = false;
    const isSkip = list.some((e, i) => e > item);
    if (isSkip) {
      // push back
      priorities.push(item); // [1,3,2,2]             // [3,2,2,1]
      if (location > 0) {
        location--;
      } else {
        location = priorities.length - 1;
      }
      executeFlag = false;
    } else {
      executeFlag = true;
    }

    // after for loop, execute the process
    if (executeFlag) {
      answer++;
      if (location === 0) {
        break;
      } else {
        location--;
      }
    }
  }
  console.log(answer);
  return answer;
}

solution([9, 9, 6], 2); // 3
