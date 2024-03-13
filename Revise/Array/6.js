// Input: score = [5,4,3,2,1]
// Output: ["Gold Medal","Silver Medal","Bronze Medal","4","5"]
// Explanation: The placements are [1st, 2nd, 3rd, 4th, 5th].
// Example 2:

// Input: score = [10,3,8,9,4]
// Output: ["Gold Medal","5","Bronze Medal","Silver Medal","4"]
// Explanation: The placements are [1st, 5th, 3rd, 2nd, 4th].

function medal(score) {
    let s = score
    let output = ["Gold Medal", "Silver Medal", "Bronze Medal", "4", "5"]
    let ans = []
    s.sort((a, b) => a - b)
    for (let i = 0; i < score.length; i++) {
        for (let j = s.length - 1; j >= 0; j--) {
            if (score[i] === s[j]) {
                ans.push(output[i]);
            }
        }
    }
    return ans;
}
// console.log(medal([10, 3, 8, 9, 4]))

// Input: n = 19
// Output: true
// Explanation:
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// Example 2:

// Input: n = 2
// Output: false

function happy(n) {
    let n1 = n.toString().split('').map((i) => i * i)

    let n2 = n1.reduce((a, b) => a += b)
    return n2

}
// console.log(happy(19))
// Example 1:
// Input: nums = [2,5,6,0,0,1,2], target = 0
// Output: true
// Example 2:
// Input: nums = [2,5,6,0,0,1,2], target = 3
// Output: false

function found(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === target) {
            return true
        }
    }
    return false
}
// console.log(found([2,5,6,0,0,1,2], 3))

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.
// Example 2:

// Input: nums = [10]
// Output: 0
// Explanation: The array contains less than 2 elements, therefore return 0.
function sorted(nums) {
    let ans = 0
    let n1 = nums.sort((a, b) => a - b)
    for (let i = 0; i < n1.length; i++) {
        for (let j = i + 1; j < n1.length; j++) {
            if (n1[j] - n1[i] >= ans) {
                ans = n1[j] - n1[i];
                i++
            }
        }
    }
    return ans
}
// console.log(sorted([15252,16764,27963,7817,26155,20757,3478,22602,20404,6739,16790,10588,16521,6644,20880,15632,27078,25463,20124,15728,30042,16604,17223,4388,23646,32683,23688,12439,30630,3895,7926,22101,32406,21540,31799,3768,26679,21799,23740]))

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4
// Example 3:

// Input: nums = [1]
// Output: 1

function sooo(nums) {
    if (nums.length === 1) return nums[0]
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                break;
            } else {
                return nums[i]
            }
        }
    }
}
// console.log(sooo([4,1,2,1,2]));

// Example 1:
// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:
// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.

function inter(nums1, nums2) {
    let ans = []
    if (nums1.length > nums2.length) {
        for (let i = 0; i < nums2.length; i++) {
            for (let j = 0; j < nums1.length; j++) {
                if (nums2[i] === nums1[j]) {
                    ans.push(nums2[j]);
                    break;
                }
            }
        }
    } else {
        for (let i = 0; i < nums1.length; i++) {
            for (let j = 0; j < nums2.length; j++) {
                if (nums1[i] === nums2[j]) {
                    ans.push(nums1[i]);
                    break;
                }
            }
        }
    }
    return ans
}
// console.log(inter([1,2,2,1],[2,2]))

// Input: words = ["adsdf","sfd"]
// Output: ["adsdf","sfd"]
function conn(words) {
    let q ="qwertyuiopQWERTYUIOP"
    let a ="asdfghjklASDFGHJKL"
    let z="zxcvbnmZXCVBNM"
    let ans = []
   for (let i = 0; i < words.length; i++) {
   if (words[i].localeCompare(q) ||  words[i].localeCompare(a) || words[i].localeCompare(z)) {
    ans.push(words[i])
   }
   }

return ans
}
console.log(conn(["Hello","Alaska","Dad","Peace"]))