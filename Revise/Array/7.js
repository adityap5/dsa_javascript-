// Example 1:
// Input: nums = [1,2,3]
// Output: 6
// Example 2:
// Input: nums = [1,2,3,4]
// Output: 24
// Example 3:
// Input: nums = [-1,-2,-3]
// Output: -6

function mul(nums) {
    nums.sort((a,b)=>b-a)
    return Math.max(nums[0]*nums[1]*nums[2], nums[0]*nums[nums.length-1]*nums[nums.length-2])
}
// console.log(mul([1,2,3,4]))

// Input: nums = [5,4,3,8]
// Output: [5,3,4,8]
// Explanation: After the first 2 operations, arr1 = [5] and arr2 = [4].
// In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].
// In the 4th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].
// After 4 operations, arr1 = [5,3] and arr2 = [4,8].
// Hence, the array result formed by concatenation is [5,3,4,8].

function append(nums) {
    let arr1 = [], arr2 =[]
    arr1.push(nums[0])
    arr2.push(nums[1])

    for (let i=2;i<nums.length;i++) {
        if (arr2[arr2.length-1] < arr1[arr1.length-1]) {
            arr1.push(nums[i]);
        }else {
            arr2.push(nums[i]);
        }
       
    }
    return arr1.concat(arr2)
}
// console.log(append( [5,4,3,8]))

// Input: apple = [1,3,2], capacity = [4,3,1,5,2]
// Output: 2
// Explanation: We will use boxes with capacities 4 and 5.
// It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.

function apples(apple,capacity) {
    let a = apple.reduce((acc,val)=>  acc+=val)
    let c = capacity.sort((a,b)=>b-a)
    let x = 0;
    for (let i = 0; i < c.length; i++) {
       if(c[i]>=a){
        return 1
       }else {
          x += c[i]
          console.log(x)
          if(x>=a){
            return i+1
           }
       }
    }
}
// console.log(apples([5,5,5],[2,4,2,7]))

// Input: nums = [1,1,2,4,9], k = 9
// Output: 4

function chota(nums,k) {
    let c =0
    for (let i = 0; i < nums.length; i++) {
       if(k>nums[i]){
        c++
       }
    }
    return c
}
// console.log(chota([1,1,2,4,9],1))

// Input: nums = [1,1,2,2,3,4]
// Output: true
// Explanation: One of the possible ways to split nums is nums1 = [1,2,3] and nums2 = [1,2,4].

function hota(nums) {
    
}