export const bs = (arr, t) => {
  let l = 0;
  let r = arr.length - 1;
  while (l <= r) {
    let m = Math.floor((l + r) / 2);
    if (arr[m] === t) {
      return m;
    } else if (arr[m] > t) {
      r = m - 1;
    } else {
      l = m + 1;
    }
  }
};

/*
    let temp = [];
    const count = 100;
    for (let i = 1; i <= count; i++) {
    temp.push(i);
    }
    const idx = bs(temp, 77);
*/
