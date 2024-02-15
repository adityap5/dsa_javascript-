// Input: nums1 = [4,1,2], nums2 = [1,3,4,2]
// Output: [-1,3,-1]

function compare(nums1, nums2) {
    let result =[]
    for (let i = 0; i < nums1.length; i++) {
        let k = -1;
        for(let j = nums2.indexOf(i)+1; j < nums2.length; j++) {
            if(nums2[j] > nums1[i] ){
                k = nums2[j]
                break;
            }
          }
          
        result.push(k)
    }
    return result;
}
console.log(compare([4,1,2], [1,3,4,2]))
