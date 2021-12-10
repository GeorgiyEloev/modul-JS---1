//Напишите функцию removeDuplicates(arr), которая возвращает массив, в котором удалены повторяющиеся элементы из массива arr (игнорируйте чувствительность к регистру).

const a = [4, 7, 1, 9, 6, 8, 4, 6, 3, 6];
const b = ['text', 'education', 'part', 'Text'];

const lowerRegister = (arr) => {
  for (let i = 0; arr[i]; i++) {
    if (typeof(arr[i]) === 'string'){
      arr[i] = arr[i].toLowerCase();
    };
  }
}

const func = (arr) => {
  lowerRegister(arr);
  newArr = [];

  for (let i = 0; arr[i]; i++) {
    if (!(newArr.includes(arr[i]))) {
      newArr.push(arr[i]);
    }
  }

  return newArr;
}

console.log(func(a));
console.log(func(b));
