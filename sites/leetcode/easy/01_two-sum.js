// https://leetcode.com/problems/two-sum/description/
// 1. Two Sum

// my solution - 64ms
var twoSum = function (nums, target) {
  const sortedNums = [...nums];
  sortedNums.sort((a, b) => a - b);
  // console.log(sortedNums);
  // console.log(nums);
  const length = sortedNums.length;
  const answer = [];

  for (let i = 0; i < length; i++) {
    const result = bs(sortedNums, target - sortedNums[i]);
    // console.log('selected 1st num : ' + sortedNums[i]);
    // console.log('selected 2nd num : ' + sortedNums[result])

    if (result !== -1) {
      let duplicateCaseArray = [];
      const firstIdx = nums.indexOf(sortedNums[i]);
      let secondIdx = nums.indexOf(sortedNums[result]);
      if (sortedNums[i] === sortedNums[result]) {
        secondIdx = nums.indexOf(sortedNums[result], firstIdx + 1);
      }
      answer.push(firstIdx, secondIdx);
      break;
    }
  }

  // console.log('answer')
  // console.log(answer)
  return answer;
};

function bs(arr, target) {
  let left = 1;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}


/* solution : hashmap - 60ms
var twoSum = function(nums, target) {
    let map = {}
    for(let i = 0 ; i < nums.length ; i++){
        let diff = target-nums[i]
        if(diff in map){
            return [map[diff] , i]
        }
        map[nums[i]] = i 
    }
};

*/