"use strict";
// 100 Days Of Coding Challeng!
/** Question 68:
Multiplying Decimals: Create a function that accepts two decimal numbers and returns their product.
Round the result to two decimal places.*/
//--------------------------------------------------------------------------------------------------
/**
 * Multiplies two decimal numbers and rounds the result to two decimal places.
 * @param num1 - The first decimal number.
 * @param num2 - The second decimal number.
 * @returns The product rounded to two decimal places.
 */
// Declare the function "multiplyDecimals" with two parameters of type number
function multiplyDecimals(num1, num2) {
    // Multiply the numbers and round the result to two decimal places
    return Math.round(num1 * num2 * 100) / 100;
}
// Call the function with two decimal numbers and log the result to the console
console.log(multiplyDecimals(1.2, 5.6)); // Output: 6.72
