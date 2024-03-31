//540
function search(nums,target) {
    let start= 0;
    let end = nums.length -1;
    while (start<=end) {
        let mid  = Math.floor(start + ((end - start) / 2));
       if(target < nums[mid]){
            end = mid -1;
        }else if(target > nums[mid]){
            start = mid +1;
        }else{
           return mid;
       }
    }
    return -1;
}


// console.log(search([1,2,3,4,5,6,7,8],3)) 