//Преобразовать коллекцию в другой вид

const a = [
  {firstName: 'Test', lastName: 'Test1', age: 34},
  {firstName: 'Text', lastName: 'Text1', age: 20},
  {firstName: 'User', lastName: 'User1', age: 87}
];


const func = (arr) => {
  const newArr = [];

  arr.forEach(item => {
    newArr.push({fullName: item.firstName + ' ' + item.lastName, age: item.age});
  });

  return newArr;
}

console.log(func(a));
