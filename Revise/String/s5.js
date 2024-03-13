// 796
//Example 1:
// Input: s = "abcde", goal = "cdeab"
// Output: true
// Example 2:
// Input: s = "abcde", goal = "abced"
// Output: false

function rotate(s, goal) {
    let start = s.slice(s.indexOf(goal[0]), s.length)
    let end = s.slice(0, s.indexOf(goal[0]))
    return start + end === goal
}
// console.log(rotate( "abcde", "abced"))
// Example 1:
// Input: s = "abab"
// Output: true
// Explanation: It is the substring "ab" twice.
// Example 2:
// Input: s = "aba"
// Output: false
// Example 3:
// Input: s = "abcabcabcabc"
// Output: true
// Explanation: It is the substring "abc" four times or the substring "abcabc" twice.
function cut(s) {
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            s.slice(i, i + 1)
            return s
        }

    }
}
// Example 1:
// Input: s = "PPALLP"
// Output: true
// Explanation: The student has fewer than 2 absences and was never late 3 or more consecutive days.
// Example 2:
// Input: s = "PPALLL"
// Output: false
// Explanation: The student was late 3 consecutive days in the last 3 days, so is not eligible for the award.

function stu(s) {
    let absent = 0
    let late = 0

}
// console.log(stu("PPALLL"))

//1160
// Example 1:

// Input: words = ["cat","bt","hat","tree"], chars = "atach"
// Output: 6
// Explanation: The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.
// Example 2:

// Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
// Output: 10
// Explanation: The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

function has(words, chars) {
    let mat = chars.split("")
    let answer = 0
    for (let i = 0; i < words.length; i++) {
        let k = words[i].split("")
        console.log(k)
        let count = 0
        for (let j = 0; j < k.length; j++) {
            for (let l = 0; l < mat.length; l++) {
                if (k[j] === mat[l]) {
                    count++
                    break
                }
            }
            if (count === k.length) {
                answer += count
            }
        }
    }
    return answer
}
// console.log(has(["hello","world","leetcode"], "welldonehoneyr"))

// Input: s = "abbaca"
// Output: "ca"

function dupe(s) {
  let s1= s.split("").sort()
  let ans = []
  let count = 0
        for (let i = 0; i < s1.length; i++) {
           for (let j = 0; j < s1.length; j++) {
            if (s1[i] === s1[j]){
                count++;
            }else{
                j++
            }
          
            console.log(count)
           }
            if (count === 1) {
                ans.push[s1[i]]
            }
            count = 0
        }
return ans
}
console.log(dupe("abbaca"))