//В коллекции изменить значение свойства во всех элементах

const a = [
  {firstName: 'Test', lastName: 'Test1', age: 34},
  {firstName: 'Text', lastName: 'Text1', age: 20},
  {firstName: 'User', lastName: 'User1', age: 87}
];


const func = (arr, key, val) => {
  arr.forEach(item => {
    item[key] = val;
  });
}

func(a, 'age', 32)
console.log(a);
