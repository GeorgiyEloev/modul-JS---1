//Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение. Элементы массива будут раздел

let a = [5, 8, 'test', 7, 'b', 789, 'fff'];

const func = (arr) => {
  let str = '';

  for (let i in arr){
    str = str + arr[i];
  }

  return str;
};

console.log(func(a))
