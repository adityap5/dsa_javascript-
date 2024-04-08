//1679

function ksum(nums , k) {
    let c = 0;
    nums.sort((a, b) => a - b);
    let left = 0, right = nums.length - 1;
    
    while (left < right) {
        const sum = nums[left] + nums[right];
        if (sum === k) {
            c++;
            left++;
            right--;
        } else if (sum < k) {
            left++;
        } else {
            right--;
        }
    }
    
    return c;
}
// console.log(ksum([3,1,3,4,3],6))