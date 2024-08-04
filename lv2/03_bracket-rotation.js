// https://school.programmers.co.kr/learn/courses/30/lessons/76502#

function check(s) {
  let stack = [];
  let res = true;

  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
        stack.push(s[i]);
      } else {
        res = false;
        return;
      }
    } else {
      if (s[i] === '[' || s[i] === '(' || s[i] === '{') {
        stack.push(s[i]);
      } else if (s[i] === ']' || s[i] === ')' || s[i] === '}') {
        if (stack.length < 1) {
          res = false;
          return;
        } else {
          if (s[i] === ']' && stack[stack.length - 1] === '[') {
            stack.pop();
          } else if (s[i] === ')' && stack[stack.length - 1] === '(') {
            stack.pop();
          } else if (s[i] === '}' && stack[stack.length - 1] === '{') {
            stack.pop();
          } else {
            res = false;
            return;
          }
        }
      } else {
        res = false;
        return;
      }
    }
  }
  if (stack.length > 0) {
    res = false;
  }
  return res;
}

function solution(s) {
  let sum = 0;

  // 2. repeat the string rotation
  for (let i = 0; i < s.length; i++) {
    let r = s.slice(i)+s.slice(0,i);
    // 1. check whether the string is correct bracket
    let res = check(r);
    if (res) {
      sum++;
    }
  }

  return sum;
}
