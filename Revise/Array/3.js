// Input: nums = [3,5]
// Output: 2
// Explanation: There are 2 values (3 and 5) that are greater than or equal to 2.

function specialArray(nums) {
    let n = nums.filter((i)=> i !== 0);
let ans = 0
if(n.length ===0){
    return -1
}
for (let i = 0; i < n.length; i++) {
   if (n[i] >= n.length) {
    ans++
   }   
}

if(ans === n.length) {
    return ans ;
}
return -1
}
// console.log(specialArray([3,9,7,8,3,8,6,6]))


// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.

function negatives(grid) {
    let arr = grid.flat(Infinity).filter((i)=> i < 0)
     
 return arr.length
}
// console.log(negatives([[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]))


// Example 1:
// Input: nums = [1,3,5,6], target = 5
// Output: 2
// Example 2:
// Input: nums = [1,3,5,6], target = 2
// Output: 1
// Example 3:
// Input: nums = [1,3,5,6], target = 7
// Output: 4

function insertsort(nums, target) {
    let c = -1
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === target){
         return  c = i;
        }  
    }
    if (c === -1) {
    nums.push(target);
    nums.sort()
    }
    // for (let i = 0; i < nums.length; i++) {
    //     if(nums[i] === target){
    //      return  c = i;
    //     }  
    // }
    return nums
}
console.log(insertsort([3,5,7,9,10], 8))