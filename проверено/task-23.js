//Удалить из массива значения, индексы которых указаны во втором массиве

let a = 'test education part';

const func = (arr1, arr2) => {
  let result = [];

  for (let i = 0; arr1[i]; i++) {
    if (!(arr2.includes(i))) {
      result.push(arr1[i]);
    }
  }

  return result;
};

console.log(func([5, 2, 8, 6, 1, 9, 3, 6, 3, 7, 1], [2, 5, 1]))
