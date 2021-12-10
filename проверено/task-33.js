//Реализуйте функцию, которая принимает на вход объект и возвращает массив-пар.

const obj = { 'dog': 6, 'cat': 11 };

const func = (obj1) => {
  const newArr = [];

  for (let key in obj1) {
    newArr.push([key, obj1[key]]);
  }

  return newArr;
};

console.log(obj);
console.log(func(obj));
