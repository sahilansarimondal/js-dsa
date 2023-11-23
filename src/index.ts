//------------------------------------------1--------------------------------
// search in the array : and return the index if found
// otherwise, return -1

// function findIndex(array: number[], target: number): number {
// if(array.length === 0) return -1;
//    for (let i = 0; i < array.length; i++) {
//       if (array[i] === target) {
//          return i;
//       }
//    }
//    return -1;
// }

// const arr = [1, 2, 3, 4, 5];
// const target = 4;

// const index = findIndex(arr,target);

// console.log(index);

//------------------------------------------------------2----------------------------------

// search in the string : and return the index if found
// otherwise, return -1

// function findIndex(str: string, target: string): number {
//    if(str.length === 0) return -1;
//    for (let i = 0; i < str.length; i++) {
//       if (str[i] === target) {
//          return i;
//       }
//    }
//    return -1;
// }

// const str = "Sahil";
// const target = "h"

// const index = findIndex(str,target)

// console.log(index );

//------------------------------------------------------3----------------------------------

// search in the range : and return the index if found
// otherwise, return -1

// function findIndex(array: number[], target: number, start: number, end: number): number {
//    if(array.length === 0) return -1;
//    for (let i = start; i <= end; i++) {
//       if (array[i] === target) {
//          return i;
//       }
//    }
//    return -1;
// }

// const str = [12, 13, 14, 15, 16, 17, 18, 19]
// const target = 19
// const start = 2;
// const end = 6;

// const index = findIndex(str,target,start,end)

// console.log(index );

//------------------------------------------------------4----------------------------------

// search min from array : and return the value if found

// function findIndex(array: number[], start?: number, end?: number): object {

//    if (array.length === 0) return { res: "this is an empty array" };

//     let min = array[0];
//     let max = array[0];
//     let n = array.length;

//    if(end){
//       min= array[end]
//       n = end
//    }

//    for (let i = start || 0; i < n; i++) {
//       if (array[i] < min) min = array[i];
//       if (array[i] > max) max = array[i];
//    }
//    return { min: min, max: max };
// }

// const str = [12, 123, -14, 150, 16, 7, 18, 189];
// const start = 3;
// const end = 6;

// const index = findIndex(str,start,end);

// console.log(index);

//------------------------------------------------------5----------------------------------

// search min,max from a 2d array : and return the value if found
// return the element of a specific number

// function findIndex(array: number[][], target: number): object {
//    if (array.length === 0) return { res: "this is an empty array" };
//    for (let row = 0; row < array.length; row++) {
//       for (let col = 0; col < array[row].length; col++) {
//          if (array[row][col] === target) return { row: row, col: col };
//       }
//    }
//    return { res: "something is wrong" };
// }

// function findMinMax(array: number[][]): object {
//    if (array.length === 0) return { res: "this is an empty array" };

//    let min = array[0][0];
//    let max = array[0][0];

//    for (let row = 0; row < array.length; row++) {
//       for (let col = 0; col < array[row].length; col++) {
//          if (array[row][col] > max) max = array[row][col];
//          if (array[row][col] < min) min = array[row][col];
//       }
//    }
//    return { min: min, max: max };
// }

// const arr = [
//    [12, 123, -14],
//    [150, 16, 7],
//    [18, 189, 34],
// ];

// const target = 34;

// const index = findIndex(arr, target);
// const minmax = findMinMax(arr);

// console.log(index);
// console.log(minmax);

//----------------------------------------------------6-----------------------------------

//https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

// function findNumbers(nums: number[]): number {
//    let evenNums = 0;
//    for (let i = 0; i < nums.length; i++) {
//       if (numCount(nums[i]) % 2 === 0) {
//          evenNums++;
//       }
//    }

//    function numCount(num: number) {
//       let count = 0;
//       while (0 < Math.floor(num)) {
//          num = num / 10;
//          count++;
//       }
//       return count;
//    }
//    return evenNums;
// }

// console.log(findNumbers([555, 901, 482, 1771]));

//---------------------------------7--------------------------------------

//https://leetcode.com/problems/richest-customer-wealth/

// function maximumWealth(accounts: number[][]): number {
//     let richest = 0;
//     for(let account of accounts) {
//         let total = 0;
//         for( let welth of account) {
//             total = total + welth
//         }
//         if(richest < total){
//             richest = total
//         }
//     }
//     return richest;
// };


