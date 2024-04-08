// Example 1:
// Input: n = 1
// Output: true
// Explanation: 20 = 1
// Example 2:
// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3
// Input: n = 3
// Output: false
function power(n) {
    return Math.log2(n) % 1 == 0;
}
// console.log(power(4))

// Example 1:
// Input: nums = [-4,-1,0,3,10]
// Output: [0,1,9,16,100]
// Explanation: After squaring, the array becomes [16,1,0,9,100].
// After sorting, it becomes [0,1,9,16,100].
// Example 2:
// Input: nums = [-7,-3,2,3,11]
// Output: [4,9,9,49,121]

function square(nums) {
    return nums.map((i) => i * i).sort((a, b) => a - b)
}
// console.log(square([-7,-3,2,3,11]))

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]
// Example 2:
// Input: list1 = [], list2 = []
// Output: []
// Example 3:
// Input: list1 = [], list2 = [0]
// Output: [0]

function match(list1, list2) {
    return list1.concat(list2).flat(Infinity).sort((a, b) => a - b)
}
// console.log(match([1,2,4],[1,3,4]))

// Example 1:
// Input: nums = [2,2,1]
// Output: 1
// Example 2:
// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:
// Input: nums = [1]
// Output: 1

function one(nums) {
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if (nums[i] === nums[j]) {
    //            break;
    //         }else{
    //             return nums[i];
    //         }
    //     }
    // }
  
}
// console.log(one([2, 2, 1]))

//287.
function duplicate(nums) {
    let i = 0;
    while (i < nums.length){ 
        if (nums[i] != i +1){
             let correct = nums[i]-1;
             if(nums[i] != nums[correct]){
            swap(nums,i,correct);
             } else{
           return nums[i] ; 
        }
        }else{
            i++;
        }
    }
    return -1;
   function swap(nums ,i,correct){
    let temp = nums[i];
    nums[i] = nums[correct];
    nums[correct] = temp;
}
}
// console.log(duplicate([1,3,4,2,2]))

//442

function alld(nums) {
    let counts = {};
    let output = [];

    for (let i of nums) {
        counts[i] = (counts[i] || 0) + 1;
    }
    for (let i in counts) {
        if (counts[i] > 1) {
            output.push(parseInt(i));
        }
    }
    return output;
}
// console.log(alld([4,3,2,7,8,2,3]))

//41

function find(nums) {
    let count = 0;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        if (nums[i] <= 0) {
            
            nums[i] = n+1
        }  
    }
    for (let i = 0; i < n; i++) {
        let index = Math.abs(nums[i]) - 1;
       if (index < n){
        nums[index] *= -1;
       }
       if(nums[index]>0) {nums[index] *= -1 ; }
    }
  
    for (let i = 0; i < n; i++) {
     if (nums[i] > 0 ) {
        return i +1
     }
     
    }
    return n+1
}
// console.log(find([1,1]))

//713

function subarr(nums,k) {
    let n = nums.length;
    if (k<=1) {
        return 0;
    }
    let i =0 , j=0, count =0 ,product =1
    while (j<n) {
        product *=nums[j]
        while (product >= k) {
            product /=nums[i]
            i++;
        }
        count += (j-i+1);
        j++
    }
return count

}
// console.log(subarr([10,5,2,6],100))
//2958

function subb(nums,k) {
    let start = 0
    let end = 0
    let maxL = 0
    let n = nums.length
    let myMap = new Map()

    while (end<n) {
        myMap.set(nums[end],myMap.get(nums[end] ?? 0)+1);
      
        while (myMap.get(nums[end])>k) {
            myMap.set(nums[start],myMap.get(nums[start] ?? 0)-1);
            start++
        }
        maxL = Math.max(maxL,(end-start+1))
        end++
    }
    return maxL
}
// console.log(subb([1,2,3,1,2,3,1,2],2))
//678

function valid(s) {
    let c = 0, k = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            c++;
        } else if (s[i] === ')') {
            if (c === 0 && k === 0) {
                return false;
            } else if (c > 0) {
                c--;
            } else {
                k--;
            }
        } else if (s[i] === '*') {
            k++;
        }
    }

    while (c > 0) {
        if (k === 0) {
            return false;
        } else if (c > k) {
            return false;
        } else {
            c--;
            k--;
        }
    }

    return true;
}
console.log(valid("(*))"))