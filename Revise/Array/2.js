// Input: nums = [2,0,2,1,1,0]  //
// Output: [0,0,1,1,2,2]

// function sortcolor(nums) {
//     return nums.sort()
// }
// console.log(sortcolor([2,0,2,1,1,0]))
function sorting(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp
            }

        }
    }
    return nums
}
// console.log(sorting([2,0,2,1,1,0]))

// Input: nums = [2,3,1,1,4]
// Output: true
// Explanation:Jump 1 step from index 0 to 1, then 3 steps to the last index.

function Jump(nums) {
    if (nums.length - 1 == 0) { return true }
    let c = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Number(nums[i]) + i >= c) {
            c = i;
        }
    }
    if (c === 0) { return true } else { return false }
}
// console.log(Jump([2,3,1,1,4]))

// Input: nums = [5,7,7,8,8,10], target = 8
// Output: [3,4]
// Input: nums = [5,7,7,8,8,10], target = 6
// Output: [-1,-1]
function searchRange(nums, target) {
    let ans = [-1, -1]

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j <= 1; j++) {
            if (nums.length === 1) {
                if (nums[i] == 0) {
                    return ans;
                }
            }
            if (nums[i] === target) {
                ans[j] = i
            }

        }

    }
    return ans
}
// console.log(searchRange([5,7,7,8,8,10] ,8))

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plusone(digits) {
    let ans = []
    for (let i = 0; i < digits.length; i++) {
        if (digits[i] === digits[digits.length - 1]) {
            ans.push(digits[digits.length - 1] + 1)
        } else {
            ans.push(digits[i])
        }
        return ans
    }
    return digits
}
// console.log(plusone([1,2,3]))

// Input: matrix = [3,7,8],
                 //[9,11,13],
                 //[15,16,17]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column.
function luckyNumbers(matrix) {
   for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
       
        
    }
    
   }
}
console.log(luckyNumbers([[3,7,8],[9,11,13],[15,16,17]]))