//Отфильтровать коллекцию по нескольким полям

const arr = [
  {name: 'test', age: 34, country: 'RF'},
  {name: 'test2', age: 12, country: 'RF'},
  {name: 'test1', age: 54, country: 'RF'}
];

const func = (arr1, val1, val2) => {
  let result = [];

  arr1.forEach(element => {
    if (element.age > val2 && element.country === val1) {
      result.push(element);
    }
  });

  return result;
};

console.log(func(arr, 'RF', 18))
