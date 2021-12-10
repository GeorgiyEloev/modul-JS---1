//В функцию подается 2 массива: 1 ключи, 2 значения. Сформировать объект.

const func = (arr1, arr2) => {
  const obj = {};

  for (let i = 0; arr1[i] && arr2[i]; i++){
    obj[arr1[i]] = arr2[i];
  }

  return obj;
}

const  a = ['name', 'age'];
const  b = ['test', 25, 'RF'];
const result = func(a, b);
console.log(result);
// Выводит {
//   name: 'test'.
//   age: 25,
//   country: 'RF'
// }
