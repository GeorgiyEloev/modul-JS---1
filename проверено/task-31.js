//Вернуть массив тех значений, которые есть в первом,
// но нет во втором

const arr = [1, 2, 2, 3];

const func = (arr1, arr2) => {
  const newArr = [];

  for (let i in arr1) {
    if (!(arr2.includes(arr1[i]))) {
      newArr.push(arr1[i]);
    }
  }

  return newArr;
};

console.log([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]);
console.log(func([4, 7, 2, 9, 3, 5, 6, 4, 5, 1, 4], [4, 5, 6, 7, 8]));
