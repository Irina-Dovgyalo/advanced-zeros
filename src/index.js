module.exports = function getZerosCount(number, base) {
  let baseArr = [];
  let num = 2;      
  let baseObj = {};
  let sum = [];

  while (base > 1) {
    if(base % num == 0) {
      base = base / num;
      if (baseArr.indexOf(num) == -1) {
        baseArr.push(num);
      }
      baseObj.hasOwnProperty(num) ? baseObj[num]++ : (baseObj[num] = 1);
    } else {
      num++;
    }
  }

  for (let i = 0; i < baseArr.length; i++) {
    let currentNum = baseArr[i]; 
    let x = baseArr[i];
    let result = 0;
    while ( number > currentNum)  {
     result += Math.floor(number / currentNum);
      currentNum *= x;
    }
    sum.push(Math.floor(result / baseObj[x]));
  }
  return Math.min(...sum);
}

