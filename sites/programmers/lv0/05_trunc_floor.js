function solution(num1, num2) {
  return Math.trunc((num1 / num2) * 1000);
}

function solution2(num1, num2) {
  // in case of -value, It could be received unexpected result because it's not truncate.
  return Math.floor((num1 / num2) * 1000);
}
