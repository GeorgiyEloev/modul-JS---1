//Перевернуть значения массива

const func = (arr) => {
  for (let i = 0; i < arr.length/2; i++) {
    let element = arr[i];
    arr[i] = arr [arr.length-1-i];
    arr [arr.length-1-i] = element;
  }
  
  return arr;
};

console.log([7, 4, 7, 1, 9, 2, 6]);
console.log(func([7, 4, 7, 1, 9, 2, 6]));
