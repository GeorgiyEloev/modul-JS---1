//Дана строка. Разделить строку на фрагменты по три подряд идущих символа. В каждом фрагменте средний символ заменить на случайный символ, не совпадающий ни с одним из символов этого фрагмента. Показать фрагменты, упорядоченные по алфавиту.

let str = 'test education part 2';

const divideThree = (str1) => {
  newArr = [];

  for (let i = 0; str1[i]; i = i + 3) {

    newArr.push(str1[i] + randomByt(str1[i], str1[i+2]) + str1[i+2]);
  }
  
  return newArr;
}

const randomInt = (max) => {
  return Math.floor(Math.random() * max);
}

const randomByt = (val, val1) => {
  let characters = 'abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+`~[]{}:;\'\"\\|,<.>?/-=№';
  let charactersLength = characters.length;
  let result = characters[randomInt(charactersLength)];
  
  while (result === val || result === val1){
    result = characters[randomInt(charactersLength)]; 
  }

  return result;
}

const func = (str1) => {
  newArr = [];
  let chek = false;

  newArr = divideThree(str1)

  while (!chek) {
    chek = true;
    for (let i = 1; i < newArr.length; i += 1) {
      if (newArr[i - 1] > newArr[i]) {
        chek = false;
        let sym = newArr[i - 1];
        newArr[i - 1] = newArr[i];
        newArr[i] = sym;
      }
    }
  }

  return newArr;
}

console.log(func(str));
