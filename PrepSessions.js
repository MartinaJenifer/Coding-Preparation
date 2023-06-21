function reverseArray(array) {
  const reversed = [];

  
  for (let i = array.length - 1; i >= 0; i--) {
    reversed.push(array[i]);
  }

  return reversed;
}


const numbers = [1, 2, 3, 4, 5];
const reversedNumbers = reverseArray(numbers);
console.log("Reversed array:", reversedNumbers);
