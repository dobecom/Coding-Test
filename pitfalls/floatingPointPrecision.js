const checkFloatingPointPrecision = () => {
  let a = 0.1 + 0.1 + 0.1;
  let b = 0.3;
  if (Math.abs(a - b) < Number.EPSILON) {
    console.log('equal');
  } else {
    console.log('not equal');
  }
};

checkFloatingPointPrecision();
