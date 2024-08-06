// https://school.programmers.co.kr/learn/courses/30/lessons/42839
// 소수 찾기

function solution(numbers) {
  // 소수 판별 함수
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }

  // 모든 가능한 숫자 조합을 생성하는 함수
  function getPermutations(arr, length) {
    if (length === 1) return arr.map((v) => [v]);
    let result = [];
    arr.forEach((fixed, index, origin) => {
      let rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
      let permutations = getPermutations(rest, length - 1);
      let attached = permutations.map((v) => [fixed, ...v]);
      result.push(...attached);
    });
    return result;
  }

  let numArr = numbers.split('');
  let numSet = new Set();

  // 모든 길이에 대해 순열을 생성하여 숫자 조합 생성
  for (let i = 1; i <= numArr.length; i++) {
    let perms = getPermutations(numArr, i);
    perms.forEach((perm) => {
      let num = parseInt(perm.join(''));
      if (isPrime(num)) numSet.add(num);
    });
  }
  console.log(numSet.size);
  return numSet.size;
}

solution('011'); //	2
