// 퀵 정렬
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [];
    const right = [];
    for (const el of arr.slice(0, arr.length - 1)) {
      el < pivot ? left.push(el) : right.push(el);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
  }
  
  console.log(quickSort([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
  
  // 병합 정렬
  function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
  }
  
  function merge(left, right) {
    const sortedArray = [];
    while (left.length && right.length) {
      if (left[0] < right[0]) {
        sortedArray.push(left.shift());
      } else {
        sortedArray.push(right.shift());
      }
    }
    return [...sortedArray, ...left, ...right];
  }
  
  console.log(mergeSort([3, 1, 4, 1, 5, 9])); // [1, 1, 3, 4, 5, 9]
  