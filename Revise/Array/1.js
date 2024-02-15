//sort an array without using inbuilt function/method

//input: [5,2,3,1]
//output:[1,2,3,5]

function sort(nums) {
    for (let i = 0; i < nums.length; i++){
        for (let j = i; j < nums.length; j++) {
              if(nums[i] > nums[j]) {
                let temp = nums[i]
                nums[i] = nums[j]
                nums[j] = temp
              }
        }
    }
   return nums
}
console.log(sort([5,1,1,2,0,0]))