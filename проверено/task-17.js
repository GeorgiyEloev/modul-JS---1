//Дана строка. Сделайте заглавным первый символ этой строки

let str = 'test education part 2';

const func = (str) => {
  let sym = str[0].toUpperCase();
  return sym + str.slice(1, str.lenght);
};

console.log(func(a))
