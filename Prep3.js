// To find duplicates in an array without using a loop and sorting the array

function findDuplicates(array) {
    // Create an empty object to store the frequency of each element
    const frequency = {};
  
    // Iterate through the array
    array.forEach((element) => {
      // If the element is already in the frequency object, increment its count
      if (frequency[element]) {
        frequency[element]++;
      } else {
        // Otherwise, set the count to 1
        frequency[element] = 1;
      }
    });
  
    // Create an array to store the duplicates
    const duplicates = [];
  
    // Iterate through the frequency object
    for (const element in frequency) {
      // If the count is greater than 1, it's a duplicate
      if (frequency[element] > 1) {
        duplicates.push(element);
      }
    }
  
    return duplicates;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8];
  const duplicates = findDuplicates(numbers);
  console.log("Duplicates:", duplicates);
  