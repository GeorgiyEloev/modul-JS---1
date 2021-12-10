//Дана строка. Показать номера символов, совпадающих с последним символом строки.

let a = 'test education part';

const func = (str) => {
  let result = [];

  for (let i = 0; str[i]; i++){
    if (str[i] === str[str.length-1]) {
      result.push(i);
    }
  }

  return result;
};

console.log(func(a))
