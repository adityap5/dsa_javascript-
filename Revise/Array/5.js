// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.
// Example 2:
// Input: nums = [0]
// Output: [0]

function arrange(nums) {
    let even = nums.filter((i) => i % 2 == 0)
    let odd = nums.filter((i) => i % 2 != 0)
    return even.concat(odd)

}
// console.log(arrange([3,1,2,4]))

// Input: player1 = [4,10,7,9], player2 = [6,5,2,3]
// Output: 1
// Explanation: The score of player1 is 4 + 10 + 2*7 + 2*9 = 46.
// The score of player2 is 6 + 5 + 2 + 3 = 16.
// Score of player1 is more than the score of player2, so, player1 is the winner, and the answer is 1.

function calculateScore(player) {
    let score = 0;
    let multiplier = 1;
    for (let i = 0; i < player.length; i++) {
        if (player[i] === 10) {
            score += player[i];
            multiplier = 2;
        } else {
            score += player[i] * multiplier;
            multiplier = 1;
        }
    }
    return score;
}

function winner(player1, player2) {
    const p1 = calculateScore(player1);
    const p2 = calculateScore(player2);
    if (p1 > p2) return 1;
    if (p1 < p2) return 2;
    return 0;
}

// console.log(winner([7, 8, 8, 5, 2], [10, 1, 4, 2, 6]));


// Example 2:
// Input: nums = [5,14,13,8,12]
// Output: 673
// Explanation: Before performing any operation, nums is [5,14,13,8,12] and concatenation value is 0.
// - In the first operation:
// We pick the first element, 5, and the last element, 12.
// Their concatenation is 512, and we add it to the concatenation value, so it becomes equal to 512.
// Then we delete them from the nums, so nums becomes equal to [14,13,8].
// - In the second operation:
// We pick the first element, 14, and the last element, 8.
// Their concatenation is 148, and we add it to the concatenation value, so it becomes equal to 660.
// Then we delete them from the nums, so nums becomes equal to [13].
// - In the third operation:
// nums has only one element, so we pick 13 and add it to the concatenation value, so it becomes equal to 673.
// Then we delete it from nums, so nums become empty.
// Since the concatenation value is 673 so the answer is 673.

function concatsum(nums) {
    let sum = 0
    let p = []
    let l = Math.floor(nums.length / 2)
    if (nums.length % 2 == 0) {
        for (let i = 0; i < nums.length; i++) {
            if (i === l) {
                break;
            } else {
                p.push(nums[i], nums[(nums.length - 1) - i])
                let k = Number(p.join(""))
                sum += k
                p = []
            }
        }
    } else {
        for (let i = 0; i < nums.length; i++) {
            if (i === l) {
                sum += nums[i]
                break;
            } else {
                p.push(nums[i], nums[(nums.length - 1) - i])
                console.log(p)
                let k = Number(p.join(""))
                sum += k
                p = []
            }
        }
    }
    return sum

}
// console.log(concatsum([5,14,13,8,12]))

// Input: nums = [9,4,1,7], k = 2
// Output: 2
// Explanation: There are six ways to pick score(s) of two students:
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 4 = 5.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 1 = 8.
// - [9,4,1,7]. The difference between the highest and lowest score is 9 - 7 = 2.
// - [9,4,1,7]. The difference between the highest and lowest score is 4 - 1 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 4 = 3.
// - [9,4,1,7]. The difference between the highest and lowest score is 7 - 1 = 6.
// The minimum possible difference is 2.

function minScore(nums, k) {
    if (nums.length === 1) return 0;
    nums.sort((a, b) => a - b)
    let ans = Infinity;
    for (let i = 0; i < nums.length - k + 1; i++) {
        ans = Math.min(ans, nums[i + k - 1] - nums[i])
    }
    return ans
}
// console.log(minScore([9,4,1,7], 2))


// Example 1:

// Input: s = "iloveleetcode", words = ["i","love","leetcode","apples"]
// Output: true
// Explanation:
// s can be made by concatenating "i", "love", and "leetcode" together.
// Example 2:

// Input: s = "iloveleetcode", words = ["apples","i","love","leetcode"]
// Output: false
// Explanation:
// It is impossible to make s using a prefix of arr.

function match(s, words) {
    let ans = ''
    for (let i of words) {
        ans += i
        if (ans === s) {
            return true
        }
    }
    return false
}
// console.log(match("iloveleetcode", ["i", "love", "leetcode","apples"]))

// Input: nums1 = [4,1,3], nums2 = [5,7]
// Output: 15
// Explanation: The number 15 contains the digit 1 from nums1 and the digit 5 from nums2. It can be proven that 15 is the smallest number we can have.

// Example 2:
// Input: nums1 = [3,5,2,6], nums2 = [3,1,7]
// Output: 3
// Explanation: The number 3 contains the digit 3 which exists in both arrays.


function ans(nums1, nums2) {
    let s = Infinity
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                if (s > nums1[i]) {
                    s = nums1[i]
                }
            }
        }
        return s
    }
    let a = []
    a.push(small(nums1))
    a.push(small(nums2))
    function small(num) {
        let s1 = Infinity;
        for (let i = 0; i < num.length; i++) {
            if (num[i] < s1) {
                s1 = num[i];
            }
        }
        return s1;
    }
    return a.join('');
}

// console.log(ans([6, 4, 3, 7, 2, 1, 8, 5], [6, 8, 5, 3, 1, 7, 4, 2]))

// Input: nums1 = [4,3,2,3,1], nums2 = [2,2,5,2,3,6]
// Output: [3,4]
// Explanation: We calculate the values as follows:
// - The elements at indices 1, 2, and 3 in nums1 occur at least once in nums2. So the first value is 3.
// - The elements at indices 0, 1, 3, and 4 in nums2 occur at least once in nums1. So the second value is 4

function hai(nums1, nums2) {
    let ans = []
    ans.push(match(nums1, nums2))
    ans.push(match(nums2, nums1))
    function match(n1, n2) {
        let c = 0
        for (let i = 0; i < n1.length; i++) {
            for (let j = 0; j < n2.length; j++) {
                if (n1[i] === n2[j]) {

                    c += 1

                    console.log(i)
                    break;
                }
            }
        }
        return c
    }
    return ans
}
// console.log(hai([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]))
// Example 1:
// Input: nums = [1,2,2,3]
// Output: true
// Example 2:
// Input: nums = [6,5,4,4]
// Output: true
// Example 3:
// Input: nums = [1,3,2]
// Output: false [5,3,2,4,1]

// function monotonic(nums) {
//     for (let i = 0; i < nums.length; i++) {
//        for (let j = i+1; j < nums.length; j++) {
//        if (nums[i]>=nums[j]) {
//         if (nums[j]>=nums[j+1]) {
//             if (nums[j+1]>=nums[j+2]) {
//                 return true;
//             }
//         }else {return false;}
//        }else if (nums[i]<=nums[j]){
//         if (nums[j]<=nums[j+1]) {
//             return true;
//         }else {return false;}
//        }

// }
// }
// }
// console.log(monotonic([5,3,2,4,1]))

function monotonic(nums) {
    let inc = true;
    let dec = true;
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            inc = false;
        } else if (nums[i] < nums[i + 1]) {
            dec = false;
        }
    }
    return inc || dec
}
// console.log(monotonic( [1,2,2,3]))

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.

function decck(deck) {
    // if (deck.length === 1) return false
    // let n = deck.length;
    // let e = 0
    // for (let i = 0; i < n; i++) {
    //     for (let j = i + 1; j < n; j++) {
    //         if(deck[i] === deck[j]) {
    //             e += 1
    //             console.log(e)
    //            break
    //         }
    //     }
    // }
    // return n % e == 0
    // return e
    
}
// console.log(decck([1,1,2,2,2,2]))