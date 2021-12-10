//Даны две строки. Сравнить строки. Вывести символы большей строки, на количество которых отличается.

const differenceSymbols = (str1, str2) => {
  let diffStr;
  const count1 = str1.length;
  const count2 = str2.length;

  if (count1 > count2){
    diffStr = str1.slice(count2, count1);
  } else {
    diffStr = str2.slice(count1, count2);
  }
  
  return diffStr;
}

const text1 = 'text education part 2';
const text2 = 'text education';
const result = differenceSymbols(text1, text2);
console.log(result); // Выводит ' part 2'
