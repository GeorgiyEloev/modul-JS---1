// Напишите функцию range(), принимающую два аргумента: начало и конец диапазона, и возвращающую массив, который содержит все числа из диапазона, включая начальное и конечное. Третий необязательный аргумент функции range() – шаг для построения массива. Убедитесь, что функция range() работает с отрицательным шагом.

const range = (start, end, step) => {
  newArr = [];

  if (start < end && step > 0)
    for (start; start <= end; start = start + step) {
      newArr.push(start);
    } else if (start > end && step < 0) 
    {
      for (start; start >= end; start = start + step){
        newArr.push(start);
      }
    }
  
    return newArr;
}

console.log(range(5, 2, -1));
console.log(range(4, 16, 2));
