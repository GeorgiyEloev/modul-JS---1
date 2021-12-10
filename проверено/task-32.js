//Вернуть отсортированный массив уникальных значений

const arr = [5, 2, 8, 4, 8, 2, 5, 8, 2, 17, 8, 4, 2, 4, 7, 3];

const chekReplayElement = (val, array) => {
  let count = 0;

  for (let i in array) {
    if (val === array[i]) {
      count++;
    }
  }

  return count-1 > 0 ? false : true; 
};

const func = (arr1) => {
  const newArr = [];
  let chek = false;

  for (let i in arr1) {
    if (chekReplayElement(arr1[i], arr1)) {
      newArr.push(arr1[i]);
    }
  }

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
};

console.log(arr);
console.log(func(arr));
