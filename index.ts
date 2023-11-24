// return the index
// if not found return -1

function binarySearch(arr: number[], target: number): number {
   let start = 0;
   let end = arr.length - 1;

   let isAsc: boolean = arr[start] < arr[end];

   while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);

      if (arr[mid] === target) {
         return mid;
      }

      if (isAsc) {
         if (target < arr[mid]) {
            end = mid - 1;
         } else {
            start = mid + 1;
         }
      } else {
         if (target > arr[mid]) {
            end = mid - 1;
         } else {
            start = mid + 1;
         }
      }
   }
   return -1;
}

let array: number[] = [
   -19, -12, -6, -2, 0, 2, 5, 7, 8, 12, 14, 16, 19, 23, 45, 76,
];

let arr2: number[] = [90, 89, 67, 56, 45, 34, 23, 12, 6, -2, -34, -56, -78];
let target: number = 7;

let ans = binarySearch(array, target);

console.log(ans);
