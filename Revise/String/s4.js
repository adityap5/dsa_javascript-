// Example 1:
// Input: nums = [10,2]
// Output: "210"
// Example 2:
// Input: nums = [3,30,34,5,9]
// Output: "9534330" 9534303
function largestno(nums) {
    nums.sort((a, b) => {
        let order1 = '' + a + b;
        let order2 = '' + b + a;
        return order2.localeCompare(order1);
    });
    if (nums[0] === 0) return ""

    return nums.join('');
}
// console.log(largestno([3,30,34,5,9]))

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true

function contains(ransomNote, magazine) {
    let n = ransomNote.split('').sort().join("")
    let m = magazine.split('').sort().join("")
    return m.includes(n)

}
console.log(contains("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))