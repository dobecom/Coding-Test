const solution = () => {
  let temp = [];
  let a = 0.1 + 0.1 + 0.1;
  let b = 0.3;
  if (Math.abs(a - b) < Number.EPSILON) {
    console.log('equal');
  } else {
    console.log('not equal');
  }
};

solution();