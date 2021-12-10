//Даны две строки. Определите, содержится ли меньшая по длине строка в большей.

const func = (str1, str2) => {
  let chek = false;

  if (str1.length > str2.length) {
    chek = str1.includes(str2);
  } else {
    chek = str2.includes(str1);
  }

  return chek;
};

console.log(func('text education part 2', 'text'));
console.log(func('text education part 2', 'test'));
console.log(func('text', 'text education part 2'));
