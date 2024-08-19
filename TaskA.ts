// 100 Days Of Coding Challeng!

/** Question  67:
Arithmetic with Mixed Types: Write a function that takes two parameters: a number and a string that represents a number (e.g., `5`).
Return their sum as a number.*/

//-----------------------------------------------------------------------------------------------------------------------------------

/**
 * Adds a number and a string representing a number.
 * @param num - The number.
 * @param strNum - The string representing a number.
 * @returns The sum as a number.
 */
// Declare the function "addMixedTypes" with the specified parameters and return type
function addMixedTypes(num: number, strNum: string): number {
  // Convert the string to a number and add it to the first number
  return num + Number(strNum);
}

// Call the function with a number and a string representing a number
console.log(addMixedTypes(3, "20")); // Output: 23
