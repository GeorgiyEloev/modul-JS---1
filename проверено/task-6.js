//Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.

const func = (arr) => {
  let count = 0;
  let summ = 0;

  arr.forEach((value) => {
    if (summ <= 10){
      count++;
      summ = summ + value;
    }
  });

  return count;
}

const result = func([4, 1, 3, 4, 2, 4, 6, 7, 8, 3, 2]);
console.log(result);
