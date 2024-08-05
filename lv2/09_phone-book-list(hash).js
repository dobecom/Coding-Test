// https://school.programmers.co.kr/learn/courses/30/lessons/42577?language=javascript
// 전화번호 목록

function solution(phone_book) {
  let answer = true;

  const lengthArr = new Set();
  let obj = {};
  phone_book.forEach((e) => {
    obj[e] = 0;
    lengthArr.add(e.length);
  });

  const arr = [...lengthArr];

  phone_book.forEach((e) => {
    for (let i = 0; i < arr.length; i++) {
      if (e.length > arr[i]) {
        const a = e.slice(0, arr[i]);
        if (obj[a] !== undefined) {
          obj[a] += 1;
        }
      }
    }
  });

  for (const item in obj) {
    if (obj[item] > 0) {
      answer = false;
      break;
    }
  }

  console.log(answer);
  return answer;
}

solution(['119', '97674223', '1195524421']);

/* startsWith 
function solution(phoneBook) {
  let answer = true;
  answer = !phoneBook.sort().some((t, i) => {
    if (i === phoneBook.length - 1) return false;

    return phoneBook[i + 1].startsWith(phoneBook[i]);
  });
  return answer;
}
*/
