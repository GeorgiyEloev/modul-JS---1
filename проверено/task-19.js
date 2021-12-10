//Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false если нет

let a = 'testset';

const func = (str) => {
  let chek = true;
  
  for (let i = 0; i <= (str.length/2); i++) {
    if (str[i] !== str[(str.length-1)-i] ) {
      chek = false;
    }
  }

  return chek;
};

console.log(func(a))
