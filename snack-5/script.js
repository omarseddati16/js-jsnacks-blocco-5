const nums = [2, 8, 4, 7, 12, 87];

// Crea un array a partire dall'array nums, che abbia solo i numeri pari
// Risultato: [2, 8, 4, 12]

const newNums = nums.filter(function (num) {
  if (num % 2 === 0)
    return num
});

console.log(newNums)