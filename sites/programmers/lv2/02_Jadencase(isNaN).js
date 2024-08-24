const solution = (s) => {
  let result = '';
  let items = s.split(' ');
  let words = items.map((item) => {
    if (item) {
      let strArr = item.split('');
    //   if (isNaN(item[0])) { // isNaN = 숫자면 true
    // 문제에 따르면 숫자를 그냥 toUpperCase()해도 무시되므로 분기치지 않아도 됨
        strArr[0] = strArr[0].toUpperCase();
        for (let i = 1; i < strArr.length; i++) {
          strArr[i] = strArr[i].toLowerCase();
        }
        item = strArr.join('');
    //   } else {
    //     for (let i = 1; i < strArr.length; i++) {
    //       strArr[i] = strArr[i].toLowerCase();
    //     }
    //     item = strArr.join('');
    //   }
    }
    return item;
  });
  result = words.join(' ');
  console.log(result)
  return result;
};

solution('this 1s a test  code');

// forEach문은 기존 배열에 어떤 작업도 하지 않고 순환만한다. 리턴도 없다
  // let ret = items.forEach((v, i)=>{
  //     console.log(v)
  //     v = 'change';
  //     return v;
  // })
