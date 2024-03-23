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
    nums.sort((a, b) => b - a)
    return Math.max(nums[0] * nums[1] * nums[2], nums[0] * nums[nums.length - 1] * nums[nums.length - 2])
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
    let arr1 = [], arr2 = []
    arr1.push(nums[0])
    arr2.push(nums[1])

    for (let i = 2; i < nums.length; i++) {
        if (arr2[arr2.length - 1] < arr1[arr1.length - 1]) {
            arr1.push(nums[i]);
        } else {
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

function apples(apple, capacity) {
    let a = apple.reduce((acc, val) => acc += val)
    let c = capacity.sort((a, b) => b - a)
    let x = 0;
    for (let i = 0; i < c.length; i++) {
        if (c[i] >= a) {
            return 1
        } else {
            x += c[i]
            console.log(x)
            if (x >= a) {
                return i + 1
            }
        }
    }
}
// console.log(apples([5,5,5],[2,4,2,7]))

// Input: nums = [1,1,2,4,9], k = 9
// Output: 4

function chota(nums, k) {
    let c = 0
    for (let i = 0; i < nums.length; i++) {
        if (k > nums[i]) {
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
    let newnums = nums.sort((a, b) => a - b);
    for (let i = 0; i < newnums.length - 2; i++) {
        if (newnums[i] === newnums[i + 2]) return false

    }
    return true
}
// console.log(hota([2,10,2,7,8,9,7,6,6,9]))

// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
var removeDuplicates = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i + 2]) {
            nums.splice(i, 1)
            console.log(nums.splice(i, 0))
        }
    }
    return nums
};
//  console.log(removeDuplicates([0,0,1,1,1,1,2,3,3]))

function nope(nums) {
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] !== nums[i + 1]) {
            return nums[i]
        }
    }

}
// console.log(nope([1,1,2,2,5,4,4]))

// Example 1:
// Input: nums = [3,2,3]
// Output: 3
// Example 2:
// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

function majority(nums) {
    let majority = nums[0];
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        if (count === 0) {
            majority = nums[i];
            count = 1;
        } else if (nums[i] === majority) {
            count++;
        } else {
            count--;
        }
    }
    count = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === majority) {
            count++;
        }
    }

    if (count > Math.floor(nums.length / 2)) {
        return majority;
    } else {

        return null;
    }

}
// console.log(majority([2,2,1,1,1,2,2])); // 2

//     Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:
// Input: nums = [0]
// Output: [0]

function moves(nums) {
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] === 0) {
            nums.push(nums.splice(i, 1))
        }
    }
    return nums.flat(Infinity)
}
// console.log(moves([0,1,0,3,12]))

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2,2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [4,9]
// Explanation: [9,4] is also accepted.

function dono(nums1, nums2) {
    let output = []
    if (nums1.length > nums2.length) {
        nums2.forEach((num) => {
            if (nums1.includes(num)) {
                output.push(num)
                nums1.splice(nums1.indexOf(num), 1);
            }
        })
    } else {
        nums1.forEach((num) => {
            if (nums2.includes(num)) {
                output.push(num)
                nums2.splice(nums2.indexOf(num), 1);
            }
        })
      
   }
   return output
}
// console.log(dono([43,85,49,2,83,2,39,99,15,70,39,27,71,3,88,5,19,5,68,34,7,41,84,2,13,85,12,54,7,9,13,19,92],[10,8,53,63,58,83,26,10,58,3,61,56,55,38,81,29,69,55,86,23,91,44,9,98,41,48,41,16,42,72,6,4,2,81,42,84,4,13]))

// Example 1:
// Input: nums = [1,2,2,4]
// Output: [2,3]
// Example 2:
// Input: nums = [1,1]
// Output: [1,2]

function dupili(nums) {
    let result =[]
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] ===nums[i + 1]) {
          result.push(nums[i], nums[i]+1);
        }
    }
    return result;
}
// console.log(dupili([1,1]));

// Example 1:
// Input: arr = [2,6,4,1]
// Output: false
// Explanation: There are no three consecutive odds.
// Example 2:
// Input: arr = [1,2,34,3,4,5,7,23,12]
// Output: true
// Explanation: [5,7,23] are three consecutive odds.

function oddd(arr) {
    for (let i = 0; i < arr.length - 2; i++) {
        if (arr[i] % 2 !== 0 && arr[i + 1] % 2 !== 0 && arr[i + 2] % 2 !== 0) {
            return true;
        }
    }
    return false;
}
// console.log(oddd([2, 6, 4, 1]));