//В функцию передается несколько массивов.

const func = (...arrays) => {
  const newArr = [];
  const arr1 = arrays[0]

  delete arrays[0];

  for (let i = 0; arr1[i]; i++){
    let chek = true;

    arrays.forEach(array => {
      if (!(array.includes(arr1[i]))) chek = false; 
    });

    if (chek) newArr.push(arr1[i]);

  }

  return newArr;
}

const result = func([3, 6, 1, 8, 3, 6, 3, 6, 3, 6], [1, 4, 2, 4], [6, 3, 2, 8, 1]);
console.log(result);
