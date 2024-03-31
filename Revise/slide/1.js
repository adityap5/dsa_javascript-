function slide(nums,k) {
    let n = nums.length
    let result = []
    for (let i = 0; i <= n-k; i++) {
      let max = nums[i]
      for (let j = 1; j < k; j++) {
        if (nums[i+j] > max) {
            max = nums[i+j]
        }
      }

        result.push(max)
    }
    return result
}
// console.log(slide([1,3,-1,-3,5,3,6,7],3))
function slide2(nums,k) {
    let deque = []
    let result = []
    for (let i = 0; i < nums.length; i++) {
      if(deque.length > 0 && deque[0] <= i-k) {
        deque.shift();
      }
     while(deque.length > 0 && nums[deque[deque.length -1]] < nums[i]){
        deque.pop();
     }
     deque.push(i);
     if (i>=k-1) {
        result.push(nums[deque[0]])
     }
    }
    return result
}
//  console.log(slide2([1,3,-1,-3,5,3,6,7],3))

//80

function duo(nums) {
  let k=1;

  for(let i=0;i<nums.length-1;i++){
      if(nums[i]!==nums[i+1]){
          nums[k]=nums[i+1];
          k++;
      }
  }
return k;

}

// console.log(duo([1,1,1,2,2,3]))