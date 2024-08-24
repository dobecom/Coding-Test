function solution(n, a, b) {
  var answer = 0;
  //                ?
  //       4(1)             7(2)         3라운드
  //  1(1)     4(2)    5(3)    7(4)
  // 1    2   3   4   5   6   7   8

  while (a != b) {
    a = Math.ceil(a / 2); // 2,   1   1
    b = Math.ceil(b / 2); // 4,   2   1
    answer += 1; // 1,   2   3
  }
  console.log(answer);
  return answer;
}

solution(8, 4, 7); // 3
