// Input: s = "abcdefghij", k = 3, fill = "x"
// Output: ["abc","def","ghi","jxx"]

function s(s, k, fill) {
    let ans = [];
    ans.push(s.slice(0, k))

    return ans
}
// console.log(s("abcdefghij", 3,"x"))

// Input: arr = ["d","b","c","b","c","a"], k = 2
// Output: "a"
// Explanation:
// The only distinct strings in arr are "d" and "a".
// "d" appears 1st, so it is the 1st distinct string.
// "a" appears 2nd, so it is the 2nd distinct string.
// Since k == 2, "a" is returned.

function distinct(arr, k) {
    let count = 0;
    let distinct = 0
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                count++
            }
        }
        if (count === 1) {
            distinct++;
            if (distinct === k) {
                return arr[i]
            }
        }
        count = 0;
    }
    return " "
}
// console.log(distinct(["a","b","a"], 3))

// Input: words1 = ["leetcode","is","amazing","as","is"], words2 = ["amazing","leetcode","is"]
// Output: 2
// Explanation:
// - "leetcode" appears exactly once in each of the two arrays. We count this string.
// - "amazing" appears exactly once in each of the two arrays. We count this string.
// - "is" appears in each of the two arrays, but there are 2 occurrences of it in words1. We do not count this string.
// - "as" appears once in words1, but does not appear in words2. We do not count this string.
// Thus, there are 2 strings that appear exactly once in each of the two arrays.
function appear(words1, words2) {
    let output = 0;
    function check(arr) {
        let count = 0, word = []
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arr.length; j++) {
                if (arr[i] === arr[j]) {
                    count++
                }
            }
            if (count === 1) {
                word.push(arr[i])
            }
            count = 0;
        }
        return word
    }
    let a = check(words1)
    let b = check(words2)
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                output++;
            }
        }
    }
    return output
}

// console.log(appear(["a", "ab"], ["a", "a", "a", "ab"]))

// Input: words = ["abc","bcd","aaaa","cbc"], x = "a"
// Output: [0,2]
// Explanation: "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.

function conn(words, x) {
    let output = [];
    for (let i = 0; i < words.length; i++) {
        if (words[i].includes(x)) {
            output.push(i);
        }
    }
    return output
}
// console.log(conn(["leet","code"], "e"))

// Input: details = ["7868190130M7522","5303914400F9211","9273338290F4010"]
// Output: 2
// Explanation: The passengers at indices 0, 1, and 2 have ages 75, 92, and 40. Thus, there are 2 people who are over 60 years old.
function aged(details) {
    let output = 0
    for (let i = 0; i < details.length; i++) {
        if (details[i].slice(11, 13) > 60) {
            output++
        }
    }
    return output
}
// console.log(aged(["7868190130M7522","5303914400F9211","9273338290F4010"]))


// Input: sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
// Output: 6
// Explanation: 
// - The first sentence, "alice and bob love leetcode", has 5 words in total.
// - The second sentence, "i think so too", has 4 words in total.
// - The third sentence, "this is great thanks very much", has 6 words in total.
// Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.

function maxx(sentences) {
    let output = 0;
    for (let i = 0; i < sentences.length; i++) {
        if (sentences[i].split(" ").length > output) {
            output = sentences[i].split(" ").length
        }
    }
    return output;
}
// console.log(maxx(["alice and bob love leetcode", "i think so too", "this is great thanks very much"]))

// Input: words = ["pay","attention","practice","attend"], pref = "at"
// Output: 2
// Explanation: The 2 strings that contain "at" as a prefix are: "attention" and "attend".

function pre(words, pref) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
        if (words[i].slice(0, pref.length) === pref) {
            count++
        }
    }
    return count
}
// console.log(pre(["pay", "attention", "practice", "attend"], "at"))

// Input: words = ["a","b","c","ab","bc","abc"], s = "abc"
// Output: 3
// Explanation:
// The strings in words which are a prefix of s = "abc" are:
// "a", "ab", and "abc".
// Thus the number of strings in words which are a prefix of s is 3.

function prff(words, s) {
    let count = 0
    for (let i = 0; i < words.length; i++) {
      if (words[i].charAt(0) === s[0]){
count++
      }
    }
    return count
}

// console.log(prff(["a","b","c","ab","bc","abc"], "abc"));

function palindrome(s) {  
  s= s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let c =Math.floor(s.length/2)
  for (let i = 0; i <s.length; i++) {
    if (s[i] !== s[s.length -1 -i]) {
        return false
      }
  }
  return true
}
// console.log(palindrome( "race a car"))

// Example 1:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// Example 2:
// Input: ransomNote = "aa", magazine = "ab"
// Output: false

// Example 3:
// Input: ransomNote = "aa", magazine = "aab"
// Output: true
function made(ransomNote,magazine) {
// magazine =magazine.split("").sort().join("")
// ransomNote = ransomNote.split("").sort().join("")
    return magazine.includes(ransomNote)
   

}
// console.log(made("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))

// Input: s = "Hello, my name is John"
// Output: 5
// Explanation: The five segments are ["Hello,", "my", "name", "is", "John"]

function splitingss(s) {
  
s= s.split(" ")
let count = 0
for (let i = 0; i < s.length; i++) {
    if (s[i] !== " " && s[i] !== '') {
        count++
    }
}
return count
}
// console.log(splitingss("Hello, my name is John, "))

