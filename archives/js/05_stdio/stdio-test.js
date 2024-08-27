// Node.js에서 입력을 받아 처리하는 샘플 코드
process.stdin.resume();
process.stdin.setEncoding('utf8');

let input = '';

// 입력을 받을 때마다 데이터 축적
process.stdin.on('data', function (chunk) {
  input += chunk;
});

// 모든 입력을 받은 후 처리
// Terminal에서 값 모두 입력 후 Ctrl+D로 입력스트림의 끝을 전달
/* Input example
4
-1 2 3 2
3 2
1 2
1 3
3 4
<Ctrl + D>
*/
process.stdin.on('end', function () {
  main(input);
});

function main(input) {
  const arr = input.split('\n');
  const num = arr[0];
  const values = arr[1];
  // console.log(arr.slice(3)) // [ '1 2', '1 3', '3 4', '' ]
  // const edges = arr.slice(3).map(l=>l.split(' ').map(Number)); // NOT OK - [ [ 1, 2 ], [ 1, 3 ], [ 3, 4 ], [ 0 ] ]
  const edges = arr
    .slice(3)
    .filter((line) => line.trim() !== '')
    .map((line) => line.split(' ').map(Number)); // OK - [ [ 1, 2 ], [ 1, 3 ], [ 3, 4 ] ]
  console.log(edges);
}
