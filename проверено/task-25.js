//Дан текст. Найти сумму имеющихся в нем цифр.

const a = 'test455test786';

const func = (str) => {
  let result = 0;

  for (let i = 0; str[i]; i++) {
    if ( +str[i] ) {
      result = result + +str[i];
    }
  }

  return result;
};

console.log(func(a))
