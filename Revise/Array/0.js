// Ques 1 - Second Largest Number
// Given an array Arr of size N, print second largest
// distinct element from an array.

// Input: [12, 35, 1, 10, 34, 1]  ----->>>>>  Output: 34
// Input: [10, 5, 10]             ----->>>>>  Output: 5

function secondLargestNumber(arr){

    const newarr = Array.from(new Set(arr) ) //Creates an array from an object bina iske obj rhega
    const ans = newarr.sort()
    return ans[ans.length-2]
  }
  // console.log(secondLargestNumber([12, 35, 1, 10, 34, 35]))
  
  function secondLargestNumber2(arr){
  let largest = -1;
  let secondlargest = -1;
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
          secondlargest = largest;
          largest = arr[i];
          
      }else if(arr[i] != largest && arr[i] > secondlargest) {
          secondlargest = arr[i]
      }
  }
  return secondlargest;
  }
  // console.log(secondLargestNumber2([12, 35, 1, 10, 34, 35])) //it works give 34
//   console.log(secondLargestNumber2([10, 5, 10] )) //it works give 5


// Ques 2 - Rotate Array by K
// Given an integer array nums, rotate the array to the right by k steps,
// where k is non - negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3  ----->>>>>  Output: [5,6,7,1,2,3,4]
// Input: nums = [-1,-100,3,99], k = 2   ----->>>>>  Output: [3,99,-1,-100]

function rotate(nums,k){
   let size = nums.length
   if(size > k){
      k = k %size ;
   }
   const rotated = nums.splice(size - k , k )
   nums.unshift(...rotated)
   return nums;
}
// console.log(rotate([1,2,3,4,5,6,7],3)) //not optimized

function rotate2(nums,k){
    let size = nums.length
    if(size > k){
       k = k %size ;
    }
    reverse(nums,0,nums.length-1)
    let one = reverse(nums,0,k-1)
    let two = reverse(nums,k,nums.length-1)
    
    return one;
}

function reverse(nums,left,right) {
    while(left < right){
        let temp = nums[left];
        nums[left] =nums[right]
        nums[right] = temp;
        left ++;
        right--;
    }
    return nums;
}


// console.log(rotate2([1,2,3,4,5,6,7],3))

// Ques 3 - Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove
// the duplicates in-place such that each unique element appears
// only once.The relative order of the elements should be kept
// the same.Then return the number of unique elements in nums.

// Input: [1,1,2]               ----->>>>>  Output: 2, [1,2,_]
// Input: [0,0,1,1,1,2,2,3,3,4] ----->>>>>  Output: 5, [0,1,2,3,4,_,_,_,_,_]

function duplicate(nums) {

    for (let i = 0; i < nums.length-1; i++) {
    if(nums[i] == nums[i + 1]) {
       nums.splice(i+1, 1)
      i--;
    }
    
}
return nums;
}
// console.log(duplicate([0,0,1,1,1,2,2,3,3,4] ))

function  dupli(nums) {
    if(nums.length == 0) return 0
    let i =0 ;
    for (let j = 0; j < nums.length; j++) {
       if(nums[i] !== nums[j]){
        i++;
        nums[i] = nums[j]
       }
    }
    return i+1
}
// console.log(dupli([0,0,1,1,1,2,2,3,3,4]))


//1d array sum arr = [1,1,1,1,1] output = [1,2,3,4,5]
function sum(arr){
 let ans = []
 let sum = 0;
 for (let i = 0; i < arr.length; i++) {
    sum += arr[i] 
     ans.push(sum)
 }
 return ans;
}
// console.log(sum ([1,1,1,1,1]))


//Input: nums = [2,5,1,3,4,7], n = 3

function shuffle(nums,n){
    let ans = []
    const newnum = nums.splice(n)
for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < newnum.length; j++) {
            if (i==j) {
                ans.push(nums[i]);
                ans.push(newnum[j])
            }
        
    }
    
}
return ans;
}
// console.log(shuffle([2,5,1,3,4,7],3))

///Input: candies = [2,3,5,1,3], extraCandies = 3
//Output: [true,true,true,false,true]
function candy(candies, extraCandies) {
    
    let ans =[]
    for (let i = 0; i < candies.length; i++) {
            if(candies[i] + extraCandies >= Math.max(...candies)){
           ans.push(true)
            }else{
                ans.push(false)
            }   
        }
        return ans;
    }
console.log(candy([2,3,5,1,3], 3));

// let candies = [2,3,5,1,3]
// const newcan = candies.map((item)=>{
//     return item + 3
// })
// console.log(newcan)
