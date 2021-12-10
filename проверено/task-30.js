//Возвращает массив, где каждый элемент продублирован

const arr = [1, 2, 2, 3];

const func = (arr1) => {
  const newArr = [];

  for (let i in arr1) {
    newArr.push(arr1[i]);
    newArr.push(arr1[i]);
  }

  return newArr;
};

console.log(arr);
console.log(func(arr));
