//Напишите функцию findCouple(array, number), которая ищет в массиве все пары целых чисел, сумма которых равна заданному значению.

const func = (arr, val) => {
  const newArr = [];

  for (let i = 0; arr[i]; i++) {
    for (let j = i+1; arr[j]; j++) {
      if (arr[i]+arr[j] === 10) {
        newArr.push([arr[i], arr[j]]);
      }
    }
  }

  return newArr;
}

const result = func([4, 6, 2, 9, 1, 8, 3, 5, 2, 1, 7, 4, 6], 10);
console.log(result);
