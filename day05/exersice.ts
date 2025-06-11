/**
 * 1. Write a function to get the lowest, highest and average value in the array (with and without sort function).
a. Example : arr = [12, 5, 23, 18, 4, 45, 32] → {lowest : 4, highest: 45, average: 19.8xxx}
 */
 const angka: number[] = [12, 5, 23, 18, 4, 45, 32]
 let penampungan: string = "";

 function lowest() {
return Math.min (...angka)
 }

 function highest() {
    return Math.max(...angka) 
 }
  
 function average() {
     let average: number =0;

     for (let i = 0 ; 1 < angka.length; i++) {
        average += angka[i]
     }
     average /= angka.length;
     return average
 }

 console.log(lowest(), highest(), average());

 
/**
 *2.  Write a function that takes an array of words and returns a string by concatenating the words in the array,
separated by commas and - the last word - by an 'and'.
a. Example : arr = ["apple", "banana", "cherry", "date"] → “apple,banana,cherry, and date”
 */

const huruf: string[] = ["apple", "banana", "cherry", " ngok", "date"]
let kosong: string = "";

function cbd() {
for (let i = 0; i < huruf.length; i++) {
    if ( i === (huruf.length - 1)) {
        kosong += `and ${huruf[i]}`;
        } else {
        }   
    }return kosong
}
console.log(cbd());

/**
 * 3.Write a function from a given array of numbers and return the second smallest number
a. Example : numbers = [5, 3, 1, 7, 2, 6] → 2
 */
 
let number1: number[] = [5, 3, 1, 7, 2, 6]
let variable01: number =0;

function abcd() {
    number1 = number1.sort()

    variable01 = number1 [1]

    return variable01
}
console.log(abcd()); 

/**
 * 4.Write a function to calculate each element in the same position from two arrays of integer. Assume both arrays are
of the same length.
a. Example : [1, 2, 3] + [3, 2, 1] → [4, 4, 4]
*/ 
let number001: number[] = [1, 2, 3];
let number002: number[] = [3, 2, 1];
let number003: number[] = [];

function abc() {
    for (let i = 0; i < number001.length; i++) {
        number003[i] = number001[i] + number002[i];
    }return number003
}
console.log(abc());

/**
 * Write a function that adds an element to the end of an array. However, the element should only be added if it is
not already in the array.
a. Example : arr = [1, 2, 3, 4], newElement = 4 → [1, 2, 3, 4]
b. Example : arr = [1, 2, 3, 4], newElement = 7 → [1, 2, 3, 4, 7]
 */
 const number01: number[] = [1, 2, 3, 4]

 function ngok( nomer1: number) {
   for ( let i = 0; i <= number01.length; i++) {
    if ( number01.includes(nomer1)) {

    }else{
        number01.push(nomer1)
    }
 }
 }
 console.log(ngok(10));