// TODO: Create an array called numbers with values 1 through 5
const numbers = [1, 2, 3, 4, 5];
// TODO: Write a for loop that prints each number in the array
for (let i = 0; i < 5; i++) {
  console.log("Array:", numbers[i]);
}
// TODO: Write a while loop that counts down from 5 to 1
let i = 5;

while (i >= 1) {
  console.log("Countdown:", i);
  i--;
}
// TODO: Create a loop that prints only even numbers from the numbers array
for (let num of numbers) {
  if (num % 2 === 0) {
    //self note: use modulus operator because no remainder VS. remainder is easier to work with
    console.log("Even number:", num);
  }
}
// TODO: Create a loop that calculates the sum of all numbers in the array
let sum = 0;
for (let num of numbers) {
  sum += num;
}
console.log("Total:", sum);
