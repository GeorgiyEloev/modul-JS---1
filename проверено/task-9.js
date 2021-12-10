//Вывести сообщение равны или 2 объекта

const a = {test: 8, text: 9};
const b = {test: 8, text: 9};

const chekCountKeys = (obj) => {
  let count = 0;

  for (let key in obj) {
    count++;
  }

  return count;
}

const arrKeys = (obj) => {
  const arrya = [];
  
  for (let key in obj) {
    arrya.push(key);
  }

  return arrya;
}

const chekNameKeys = (obj1, obj2) => {
  let chek = true;

  if (chekCountKeys(obj1) === chekCountKeys(obj2)) {
    arr1 = arrKeys(obj1);
    arr2 = arrKeys(obj2);

    for(let i in arr1) {
      if (arr1[i] !== arr2[i]) {
        chek = false;
      }
    }
  } else {
    chek = false
  }

  return chek;
}

const func = (obj1, obj2) => {
  let chek = true;

  if (chekNameKeys(obj1, obj2)) {
    for (let key in obj1) {
      if (obj1.key !== obj2.key) chek = false;
    }
  } else { 
    chek = false;
  } 

  return chek;
}

console.log(func(a, b));
