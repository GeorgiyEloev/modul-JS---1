//Дана строка. Вставить после каждого символа пробел.

str = 'text education part 2';

const func = (str1) => {
  for (let i = 0; str1[i]; i++) {
    if (str1[i] !== ' ' && str1[i+1] !== ' ') {
      let changed = str1.slice(0, i + 1);
      let remains = str1.slice(i + 1, str1.length);
      str1 = changed + ' ' + remains;
    }
  }
  return str1;
};

console.log(str);
console.log(func(str));
