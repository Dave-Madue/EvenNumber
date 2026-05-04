const numbers = [1, 2, 3, 4];

const result = numbers.map((num) => {
  if (num % 2 === 0) {
    return num * 2;
  }
  else {return num;
  }
});
console.log(result)