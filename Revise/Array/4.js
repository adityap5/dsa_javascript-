// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].

function plusone(digits) {
    return  (BigInt(String(digits).split(',').join('')) + BigInt(1)).toString().split('')
    // return s.toString().split('')
    // return digits.toString().split(' ').join(' ')
   
}

// console.log(plusone(["1","2","3"]))

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]

function rotate(nums, k) {
    let s1 =  String(nums).split(',').join('').slice(k +1)
    let s2 = String(nums).split(',').join('').slice(0 , k+1)
   let ans= s1.concat(s2)
   return ans.toString().split('')
}
// console.log(rotate([1,2,3,4,5,6,7] , 3))

// Input: nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// Output: [1,2,2,3,5,6]
// Explanation: The arrays we are merging are [1,2,3] and [2,5,6].
// The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.

function con(nums1,nums2,m,n) {
for (let i = 0; i < nums2.length; i++){
 for (let j = 0; j < nums2.length; j++) {
    if (nums1[nums1.length-j] == 0){
        nums1[nums1.length-j] = nums2[i];
        i++;
    }
 }
}
return nums1.sort()
}

console.log(con([1,2,3,0,0,0], [2,5,6],3,3))