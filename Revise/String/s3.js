// 5. Longest Palindromic Substring
// Input: s = "babad"
// Output: "bab"
// Explanation: "aba" is also a valid answer.
function longestPalindromeSubstring(s) {
    if (s.length <= 1) return s;

    let longestPalindrome = "";
    for (let i = 0; i < s.length; i++) {
        // Find palindrome substrings with odd length
        let oddPalindrome = expandAroundCenter(s, i, i);
        if (oddPalindrome.length > longestPalindrome.length) {
            longestPalindrome = oddPalindrome;
        }

        // Find palindrome substrings with even length
        let evenPalindrome = expandAroundCenter(s, i, i + 1);
        if (evenPalindrome.length > longestPalindrome.length) {
            longestPalindrome = evenPalindrome;
        }
    }

    return longestPalindrome;
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}
// console.log(longestPalindromeSubstring("aacabdkacaa"));


// 13. Roman to Integer
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

function roi(s) {
   
    let ans = 0;
    const sym = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for (let i = 0; i < s.length; i++) {
        const c = sym[s[i]] 
        const next = sym[s[i + 1]];

        if (c<next ){
              ans += next -c
              i++;
        }else{
            ans+=c
        }
    }
 return ans
}
// console.log(roi("LVIII"))


// Example 1:
// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.

// Example 2:
// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

function contain(haystack,needle) {
    return haystack.indexOf(needle)
}
// console.log(contain("leetcode","leeto"))

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:
// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:
// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
function length(s) {
    
    let ns = s.replace(/\s+/g, ' ').trim();
    if (ns.length === 1) return ns.length ;
    let index = 0 ;
    let arr =  ns.split('') ;
    for (let i = arr.length; i >= 0 ; i--) {
       if (arr[i] ===" ") {
        return ns.slice( i,ns.length-1).length
       }
        
    }
   

}
// console.log(length("    day"))

// Input: num1 = "456", num2 = "77"
// Output: "533"
function add(num1,num2) {
   let ans = (BigInt(num1) + BigInt(num2)).toString() ;
   return ans
}
console.log(add("456","77"))


