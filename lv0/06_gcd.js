function solution(numer1, denom1, numer2, denom2) {
  // 두 분수를 공통 분모로 만들어 더하기
  const commonDenom = denom1 * denom2;
  const commonNumer = numer1 * denom2 + numer2 * denom1;

  // 최대공약수(GCD) 함수
  function gcd(a, b) {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }

  // 약분하기 위해 분자와 분모의 최대공약수 계산
  const divisor = gcd(commonNumer, commonDenom);

  // 약분된 분자와 분모
  const reducedNumer = commonNumer / divisor;
  const reducedDenom = commonDenom / divisor;

  return [reducedNumer, reducedDenom];
}
