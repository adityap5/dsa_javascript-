// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4] => [4,-1,2,1]
// Output: 6 

// function maxsum(nums) {
//     let maxcount = 0;
//     let startindx = 0;
//     let endindx = 0;
//     for (let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for (let j = i; j < nums.length; j++) {
//            sum = sum + nums[j];
//            if (sum > maxcount){
//             maxcount = sum;
//             startindx = i;
//             endindx = j;
//            }
            
//         }
        
//     }
//     return {
//       sum :   maxcount,
//     subArray : nums.slice(startindx, endindx +1 )
//     }
// }


function kadane(nums) {
    let sum = 0;
    let maxsum = nums[0];
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > maxsum) {
            maxsum = sum;
        } else if (sum < 0){
            sum =0;
        }
        
    }
    return maxsum;
}
console.log(kadane( [-3,-2,0,-1] ));