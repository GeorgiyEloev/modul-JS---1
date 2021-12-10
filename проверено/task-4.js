//Вернуть true, если хоть одно значение в массиве "положительное"

const func = (arr) => {
  let chek = false;

  arr.forEach(value => {
    if (value > 0){
      chek = true;
    }    
  });

  return chek;
}

const result = func([5, 3, -6, 7, 2, -7, 8, -2, 5]);
console.log(result);

const result1 = func([-5, -3, -6, -7, -2, -7, -8, -2, -5]);
console.log(result1);
