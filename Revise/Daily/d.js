// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3
// Input: n = 3
// Output: false
function power(n) {
    return Math.log2(n) % 1 == 0;
}
// console.log(power(4))

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function square(nums) {
    return nums.map((i) => i * i).sort((a, b) => a - b)
}
// console.log(square([-7,-3,2,3,11]))

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

function match(list1, list2) {
    return list1.concat(list2).flat(Infinity).sort((a, b) => a - b)
}
// console.log(match([1,2,4],[1,3,4]))

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

function one(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //            break;
    //         }else{
    //             return nums[i];
    //         }
    //     }
    // }
  
}
console.log(one([2, 2, 1]))