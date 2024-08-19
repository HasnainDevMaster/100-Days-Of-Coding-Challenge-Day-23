"use strict";
// 100 Days Of Coding Challeng!
/** Question
Dividing and Finding the Remainder: Write a function that divides two numbers and returns both the quotient and the remainder.
Use an object to return both values.*/
//-----------------------------------------------------------------------------------------------------------------------------
/**
 * Divides two numbers and returns both the quotient and the remainder.
 * @param dividend - The number to be divided.
 * @param divisor - The number by which to divide.
 * @returns An object containing the quotient and the remainder.
 */
// Declaration of the function "divideAndRemainder" with two parameters "dividend" and "divisor" of type number
function divideAndRemainder(dividend, divisor) {
    // Calculate the quotient and the remainder
    const quotient = Math.floor(dividend / divisor);
    const remainder = dividend % divisor;
    return { quotient, remainder };
}
// Call the function "divideAndRemainder" with the arguments 10 and 3
console.log(divideAndRemainder(20, 6)); // Output: { quotient: 3, remainder: 2 }
