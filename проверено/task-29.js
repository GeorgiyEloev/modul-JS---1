//Создайте функцию, которая параметром принимает объект. Функция умножает все числовые свойства объекта на 2.

const obj = { name: 'test', age: 25, weight: 65, height: 165}

const func = (obj1) => {
  
  for (let key in obj1) {
    if (typeof(obj1[key]) === 'number') {
      obj1[key] = obj1[key] * 2;
    }
  }

  return obj1;
};

console.log(obj);
console.log(func(obj));
