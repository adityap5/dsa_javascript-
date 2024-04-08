//4
function mediann(nums1, nums2) {
    let nums = nums1.concat(nums2).sort((a, b) => a - b);
    let half = Math.floor(nums.length / 2)
    if (nums.length % 2 !== 0) {
        return nums[half]
    }
    return (nums[half - 1] + nums[half]) / 2
}
// console.log(mediann([1,3],[2]))

//11.
function water(height) {
    let left = 0, right = height.length - 1, maxarea = 0;

    while (left < right) {
        let area = Math.min(height[left], height[right]) * (right - left);

        maxarea = Math.max(maxarea, area)
        if (height[left] < height[right]) {
            left++
        } else right--
    }
    return maxarea
}
// console.log(water([1,1]))

//15
// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation: 
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].

function triplet(nums) {
    let output = []
    nums = nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            for (let k = 0; k < nums.length; k++) {
                if (i != j && i != k && j != k) {
                    if (nums[i] + nums[j] + nums[k] === 1) {
                        let ans = [nums[i], nums[j], nums[k]].sort((a, b) => a - b)

                        let isPresent = output.some(subarray =>
                            subarray.length === ans.length &&
                            subarray.every((element, index) => element === ans[index])
                        );

                        if (!isPresent) {
                            output.push([nums[i], nums[j], nums[k]]);
                            // console.log(output)
                        }
                    }
                }
            }

        }

    }

    return output;
}
// console.log(triplet([-1,0,1,2,-1,-4]))

//alternate

function triplet(nums) {
    let output = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {
            let left = i + 1;
            let right = nums.length - 1;
            let target = 0 - nums[i];

            while (left < right) {
                const sum = nums[left] + nums[right];
                if (sum === target) {
                    output.push([nums[i], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) left++
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    left++
                    right--
                } else if (sum < target) {
                    left++
                } else {
                    right--
                }
            }
        }
    }

    return output;
}
// console.log(triplet([-1,0,1,2,-1,-4]))

//49
// Input: strs = ["eat","tea","tan","ate","nat","bat"]
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

function anan(strs) {
    const ans = Object.values(strs.reduce((acc, str) => {
        const sortstr = str.split('').sort().join('');
        acc[sortstr] = (acc[sortstr] || []).concat(str);
        return acc;
    }, {}));

    return ans;
}
// console.log(anan(["eat","tea","tan","ate","nat","bat"]))

//167

// Input: numbers = [2,7,11,15], target = 9
// Output: [1,2]
// Explanation: The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].

function addt(numbers, target) {
    let ans1 = {};
    for (let i = 0; i < numbers.length; i++) {
        let ans2 = target - numbers[i];
        if (ans1.hasOwnProperty(ans2)) {
            return [ans1[ans2] + 1, i + 1];
        }
        ans1[numbers[i]] = i;
    }
}
// console.log(addt([0,0,3,4],0))

//164

// Input: nums = [3,6,9,1]
// Output: 3
// Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

function difference(nums) {
    let maxDiff = 0
    nums = nums.sort((a, b) => a - b)
    for (let i = nums.length; i >= 0; i--) {
        if (nums[i] - nums[i - 1] > maxDiff) {
            maxDiff = nums[i] - nums[i - 1]
        }

    }
    return maxDiff
}
// console.log(difference([10]))

//198

// Input: nums = [2,7,9,3,1]
// Output: 12
// Explanation: Rob house 1 (money = 2), rob house 3 (money = 9) and rob house 5 (money = 1).
// Total amount you can rob = 2 + 9 + 1 = 12.

function rob(nums) {
    if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0];
    let amount1 = 0;
    let amount2 = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            amount2 += nums[i];
            amount2 = Math.max(amount2, amount1);
        } else {
            amount1 += nums[i];
            amount1 = Math.max(amount1, amount2);
        }
    }
    return Math.max(amount1, amount2);
}
// console.log(rob([1,2,3,1]))

//153
// Input: nums = [11,13,15,17]
// Output: 11
// Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 

function minim(nums) {
    let min = Infinity
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i]
        }

    }
    return min
}
// console.log(minim([11,13,15,17]))

//152
// Input: nums = [2,3,-2,4]
// Output: 6
// Explanation: [2,3] has the largest product 6.
function pro(nums) {
    let maxP = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] * nums[i + 1] >= maxP) { }
        maxP = nums[i] * nums[i + 1]
        console.log(maxP)
    }
    return maxP
}
// console.log(pro([2,3,-2,4]))

//2529

function count(nums) {
    let p = 0, n = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] + (-0) != nums[i]) {
            p++
        } else {
            n++
        }
    }
    return Math.max(p, n)
}
// console.log(count([-2,-1,-1,1,2,3]))

//347

function fre(nums, k) {
    let myMap = {};
    let result = []
    let b = []
    for (let i = 0; i < nums.length; i++) {
        if (!myMap[nums[i]]) {
            myMap[nums[i]] = 1
        } else {
            myMap[nums[i]]++
        }
    }
    for (let [num, val] of Object.entries(myMap)) {
        if (!b[val]) {
            b[val] = new Set().add(num)
        } else {
            b[val] = b[val].add(num)
        }
    }
    for (let i = b.length - 1; i >= 0; i--) {
        if (b[i]) result.push(...b[i]);
        if (result.length === k) break;
    }
    return result
}
// console.log(fre([[1,1,1,2,2,3]],2))

//674
function longg(nums) {
    let c = 1;
    let k = 1
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i + 1] > nums[i]) {
            c++
        } else {
            if (c > k) {
                k = c;
                c = 1
            }
        }
    }
    if (c > k) {
        return c
    }
    else { return k }
}
console.log(longg([3, 0, 6, 2, 4, 7, 0, 0]))