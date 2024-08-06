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
