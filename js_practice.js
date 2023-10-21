// :) :)
function fibonachi (n) {
  if (n === 1 || n === 2) {
    return 1
  }
  return fibonachi(n-1) + fibonachi(n-2)
}


function factorial(n) {
  if (n === 1){
    return 1;
  }
  return n * factorial(n-1);
}

function pallindrom(str){
  let pall = str.split('');
  return str === pall.reverse().join('');
}

function easyNum(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
}

