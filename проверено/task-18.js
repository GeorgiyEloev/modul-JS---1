//Проверьте, что строка заканчивается на .html

let a = 'http://localhost.html';

const func = (str) => {
  return str.endsWith('.html');
};

console.log(func(a))
