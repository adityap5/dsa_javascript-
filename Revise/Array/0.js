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
// console.log(candy([2,3,5,1,3], 3));

// let candies = [2,3,5,1,3]
// const newcan = candies.map((item)=>{
//     return item + 3
// })
// console.log(newcan)


//Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].
// Return the answer in an array.

//Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

function smallest(nums){
      let ans = [];
      for (let i = 0; i < nums.length; i++) {
        let count = 0
        for (let j = 0; j < nums.length; j++) {
         if(nums[j] < nums[i]) {
                count++;
            }
        }
        ans.push(count)
      }
      
    return ans;
    }

// console.log(smallest([8,1,2,2,3]))


// A pangram is a sentence where every letter of the English alphabet appears at least once.
// Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
// sentence = "thequickbrownfoxjumpsoverthelazydog"
//output = true

let sentence = "thequickbrownfoxjumpsoverthelazydog"
let r = sentence.split("").sort()
// console.log(r)
const newarrr = Array.from(new Set(r) )
// console.log(newarrr.length)

function letter(sentence){
    const newarrr = Array.from(new Set(sentence.split("").sort()) )
    if (newarrr.length ==26) return true
    return false;
}
// console.log(letter("thequickbrownfoxjumpsoverthelazydog"))

// items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
// ruleKey = "color", ruleValue = "silver"



// let n = items.flat(3)
// console.log(n)
// for (let i = 0; i < n.length; i++) {
//     if (n[i] == ruleKey) {
        
//     }
    
// }


// let gain =[-4,-3,-2,-1,4,3,2]
// let current =0
// let altitude = []
// current += gain[i]
// let temp = current + gain[i]
//current => -3
// altitude.push(temp)
//altitude = [0,-4,-7 ,-9,-10,-6,-3,-1]
// [0,-4,-7,-9,-10,-6,-3,-1
function no(gain){
    let current =0
    let altitude = [0]
    for (let i = 0; i < gain.length; i++) {
        let temp = current + gain[i]
        current = temp
        altitude.push(temp)
    }
    
    // return  Math.max(...altitude)
    return altitude
}
// console.log(no([-4,-3,-2,-1,4,3,2]))

// let image = [[1,1,0],[1,0,1],[0,0,0]]
//110101000
//000101011
//111010100
//001010111
// console.log(non)
function reverse(image){
 return  image.map((x)=>x.reverse().map((i)=> i?0:1))
}
// console.log(reverse([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]))
//[[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]

//Input: nums = [12,345,2,6,7896]
let nums = [12,345,2,6,7896]
function even(nums){
    let count =0
    for (let i = 0; i < nums.length; i++) {
         let arr = Array.from(String(nums[i]), Number);
         if(arr.length%2 ===0 ){
            count++
         }
    }
    return count
}
// console.log(even([555,901,482,1771]));


                






