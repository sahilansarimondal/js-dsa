"use strict";
// return the index
// if not found return -1
// function binarySearch(arr: number[], target: number): number {
//    let start = 0;
//    let end = arr.length - 1;
//    let isAsc: boolean = arr[start] < arr[end];
//    while (start <= end) {
//       let mid = Math.floor(start + (end - start) / 2);
//       if (arr[mid] === target) {
//          return mid;
//       }
//       if (isAsc) {
//          if (target < arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       } else {
//          if (target > arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       }
//    }
//    return -1;
// }
// let array: number[] = [
//    -19, -12, -6, -2, 0, 2, 5, 7, 8, 12, 14, 16, 19, 23, 45, 76,
// ];
// let arr2: number[] = [90, 89, 67, 56, 45, 34, 23, 12, 6, -2, -34, -56, -78];
// let target: number = 7;
// let ans = binarySearch(array, target);
// console.log(ans);
//----------------------------------------------2--------------------------------
// function searchRange(nums: number[], target: number): number[] {
//     let arr = []
//     if(nums.length === 1){
//         if(nums[0]=== target){
//             arr = [0,0]
//             return arr
//         }
//     }
//   for( let i = 0 ; i < nums.length; i++){
//       if(nums[i] && nums[i+1] === target){
//           arr.push(i)
//           arr.push(i+1)
//           break;
//       }else if(nums[i] === target){
//           arr.push(i)
//           arr.push(i)
//           break
//       }
//   }  
//   if(arr.length > 0){
//       return arr
//   }
//   return [-1,-1]
// };
// let nums = [5, 7, 7, 8, 8, 10]; 
// let target = 8
// console.log(searchRange(nums, target));
//------------------------------------------------3------------------------------------------
// function ciling(arr: number[], target: number): number {
//    let start = 0;
//    let end = arr.length - 1;
//    let isAsc: boolean = arr[start] < arr[end];
//    while (start <= end) {
//       let mid = Math.floor(start + (end - start) / 2);
//       if (arr[mid] === target) {
//          return mid;
//       }
//       if (isAsc) {
//          if (target < arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       } else {
//          if (target > arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       }
//    }
//    return arr[start];
// }
// let array: number[] = [
//    -19, -12, -6, -2, 0, 2, 5, 7, 8, 12, 14, 16, 19, 23, 45, 76,
// ];
// // let arr2: number[] = [90, 89, 67, 56, 45, 34, 23, 12, 6, -2, -34, -56, -78];
// let target: number = 13;
// let ans = ciling(array, target);
// console.log(ans);
//--------------------------------------------4--------------------------------
// function floor(arr: number[], target: number): number {
//    let start = 0;
//    let end = arr.length - 1;
//    let isAsc: boolean = arr[start] < arr[end];
//    while (start <= end) {
//       let mid = Math.floor(start + (end - start) / 2);
//       if (arr[mid] === target) {
//          return mid;
//       }
//       if (isAsc) {
//          if (target < arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       } else {
//          if (target > arr[mid]) {
//             end = mid - 1;
//          } else {
//             start = mid + 1;
//          }
//       }
//    }
//    return arr[end];
// }
// let array: number[] = [
//    -19, -12, -6, -2, 0, 2, 5, 7, 8, 12, 14, 16, 19, 23, 45, 76,
// ];
// // let arr2: number[] = [90, 89, 67, 56, 45, 34, 23, 12, 6, -2, -34, -56, -78];
// let target: number = 4;
// let ans = floor(array, target);
// console.log(ans);
//--------------------------------------------5--------------------------------
// function nextGreatestLetter(letters: string[], target: string): string {
//     // if(target > letters[letters.length -1]) return letters[0]
//     let start = 0;
//     let end = letters.length -1;
//     while(start <= end){
//         let mid = Math.floor(start + (end - start) / 2);
//         if(target >= letters[mid]){
//             start = mid + 1;
//         } else{
//             end = mid - 1;
//         }
//     }
//     return letters[start % letters.length]
// };
// let letters = ["c", "f", "j"] 
// let target = "c"
// console.log(nextGreatestLetter(letters, target))
//-------------------------------------------7-------------------------------------
//852. Peak Index in a Mountain Array
// function peakIndexInMountainArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;
//     let ans = 0;
//     while (start <= end) {
//         let mid = Math.floor(start + (end - start) / 2);
//         if (arr[mid - 1] > arr[mid]) {
//             end = mid - 1;
//         }
//         else if (arr[mid] < arr[mid + 1]) {
//             start = mid + 1;
//         }
//         else {
//             ans = mid;
//         }
//     }
//     return ans;
// }
// ;
// let arr = [1, 2, 3, 5, 6, 4, 3, 2, 1];
// console.log(peakIndexInMountainArray(arr));

console.log(1%1)
