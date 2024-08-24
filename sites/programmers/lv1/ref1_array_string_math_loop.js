// 배열 요소 합계 구하기
const array = [1, 2, 3, 4, 5];
const sum = array.reduce((acc, val) => acc + val, 0);
console.log(sum); // 15

// 문자열에서 특정 문자 개수 세기
const str = "hello world";
const count = str.split('').filter(char => char === 'l').length;
console.log(count); // 3

// 소수 판별
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
console.log(isPrime(7)); // true
