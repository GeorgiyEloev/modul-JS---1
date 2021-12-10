//Вернуть индекс последнего элемента массива, который удовлетворяет условию

const func = (arr, val) => {
  let id = -1;

  arr.forEach((value, index) => {
    if (value > val){
      id = index;
    }
  });

  return id;
}

const result = func([5, 2, 7, 2, 5, 4, 1, 7, 8, 9, 4, 6, 3], 4);
console.log(result);
