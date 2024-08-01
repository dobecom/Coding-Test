
function solution(my_string, overwrite_string, s) {
    // 새로운 배열 생성
  return my_string.slice(0, s) + overwrite_string + my_string.slice(s + overwrite_string.length);
}

function solution2(my_string, overwrite_string, s) {
    // 원본수정
  return (
    [...my_string].splice(0, s).join('') +
    overwrite_string +
    [...my_string].splice(s + overwrite_string.length, my_string.length).join('')
  );
}
