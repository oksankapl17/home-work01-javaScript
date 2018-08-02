function arrayFibonacci(x) {
  let arr = [0, 1]
  for (let i = 2; i <= x; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }
  return arr[x];
}

function recurssionFibonacci(x) {
  if (x < 2) {
    return x;
  }
  return recurssionFibonacci(x - 1) + recurssionFibonacci(x - 2);
}

const x = parseInt(prompt('Будь ласка введіть номер числа Фібоначчі :'));
const option = parseInt(prompt('Виберіть спосіб розрахунку:\n1)рекурсивно\n2)за допомогою массиву'));
let result;
if(option === 1) {
  result = recurssionFibonacci(x);
} else {
   result = arrayFibonacci(x);
}

document.write("<h1>" + result + "</h1>")
