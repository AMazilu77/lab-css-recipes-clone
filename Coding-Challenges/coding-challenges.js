// 1-) Looping a triangle.
// Write a loop that makes seven calls to console.log to output the following triangle:

// #
// ##
// ###
// ####
// #####
// ######
// #######
// It may be useful to know that you can find the length of a string by writing .length after it.

// let abc = “abc”;
// console.log(abc.length);
// // → 3

// function triangleMaker() {
//   let triangle = console.log("#");
//   if (triangle < 7) console.log(triangle + triangle);
// }

// 2-) FizzBuzz.
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print “Fizz” instead of the number, and for numbers divisible by 5 (and not 3), print “Buzz” instead.

// When you have that working, modify your program to print “FizzBuzz” for numbers that are divisible by both 3 and 5 (and still print “Fizz” or “Buzz” for numbers divisible by only one of those).

// (This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.)


// 3 -) Chessboard
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines.At each position of the grid there is either a 
// space or a “#” character.The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the 
// given width and height.
// let chessBoardArray = " ";

// function NewLineMaker() {
//   for (let i = 0; i < 8; i++) {
//     if (i % 2) {
//       console.log("# # # #");
//     } else {
//       console.log(" # # # #");
//     }
//   }

// }

// NewLineMaker();

// function printChessboard() {
//   let board = '';
//   while (board.length < 64) {
//     if (board.length % 9 === 0) {
//       board += '\n';
//     } else if (board.length % 2 === 0) {
//       board += '#';
//     } else {
//       board += ' ';
//     }
//   }

//   console.log(board);
// }

// printChessboard(8, 8);
// console.log(0 % 9 === 0);
// console.log('\n'.length);
// printChessboard(4, 4);

// Create a function called accum that behaves like...look down!

function accum(str) {
  return str.split('').map((elem, index) => elem.toUpperCase() + elem.toLowerCase().repeat(index)).join('-');

}

console.log(accum("abcd"));    // "A-Bb-Ccc-Dddd"
console.log(accum("RqaEzty")); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum("cwAt"));    // "C-Ww-Aaa-Tttt"



// var new_array = arr.map(function callback(currentValue[, index[, array]]) {
//   // Return element for new_array
// }[, thisArg])

// Homework

// Your goal in this kata is to implement a difference function, which subtracts one list from another 
// and returns the result.

// It should remove all values from list a, which are present in list b.

// array_diff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// array_diff([1,2,2,2,3],[2]) == [1,3]

function array_diff(arr1, arr2) {
  // your code here. compare arrays to see which numbers are in the first array and not in the 2nd
}

console.log(array_diff([1, 2], [1]));         // [2]
console.log(array_diff([1, 2, 2, 2, 3], [2]));   // [1, 3]