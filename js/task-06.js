"use strict";

let input;
const numbers = [];
let total = 0;

while (true) {
  input = prompt("Введіть число");

  if (input === null) {
    if (numbers.length > 0) {
      for (let number of numbers) {
        total += number;
      }
    }
    break;
  }

  input = Number(input);
  numbers.push(input);
}

console.log(`Загальна сума чисел дорівнює ${total}`);
