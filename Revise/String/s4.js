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
// console.log(contains("bg","efjbdfbdgfjhhaiigfhbaejahgfbbgbjagbddfgdiaigdadhcfcj"))

// Example 1:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation: 
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"), 
// and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"


function occurs(paragraph, banned) {
  let p = paragraph.split("").filter((i) => i != "" && i != "," && i != "." && i != "!").join("").toLocaleLowerCase()
  let b = banned.filter((i) => i != "" && i != "," && i != "." && i != "!").join("").toLocaleLowerCase()
  if (banned.length === 0) return p
  if (!p.includes(b)) return p
  let np = p.split(" ")
  let newp = []
  for (let i = 0; i < np.length; i++) {
    for (let j = 0; j < banned.length; j++) {
      if (np[i] != banned[j]) {
        newp.push(np[i])
      }
    }
  }
  const wordFreqMap = {};
  newp.forEach(word => {
    wordFreqMap[word] = (wordFreqMap[word] || 0) + 1;
  });

  const duplicates = [];
  for (const word in wordFreqMap) {
    if (wordFreqMap.hasOwnProperty(word) && wordFreqMap[word] > 1) {
      duplicates.push(word);
    }
  }

  return duplicates.toString()

}
// console.log(occurs("Bob. hIt, baLl", ["bob","hit"]))
// function findDuplicateWords(paragraph , banned) {
//     let p = paragraph.split("").filter((i) => i != "" && i != "," && i != "." && i != "!").join("").toLocaleLowerCase()
//     if (banned.length === 0) return p
//     if(!p.includes(banned)) return p
//     let str = p.replaceAll(banned, "").toLocaleLowerCase().split("").filter((i) => i != "" && i != "," && i != "." && i != "!").join("")
//     const words = str.split(/\s+/);

//     const wordFreqMap = {};
//     words.forEach(word => {
//       wordFreqMap[word] = (wordFreqMap[word] || 0) + 1;
//     });

//     const duplicates = [];
//     for (const word in wordFreqMap) {
//       if (wordFreqMap.hasOwnProperty(word) && wordFreqMap[word] > 1) {
//         duplicates.push(word);
//       }
//     }

//     return duplicates.toString()

//   }

// console.log(findDuplicateWords("Bob. hIt, baLl",["bob", "hit"]))


// 'I': 1,
//   'V': 5,
//   'X': 10,
//   'L': 50,
//   'C': 100,
//   'D': 500,
//   'M': 1000
// Example 1:
// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:
// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
function k(s) {
  let ans = 0;
  let symbol = {
      'I': 1,
      'V': 5,
      'X': 10,
      'L': 50,
      'C': 100,
      'D': 500,
      'M': 1000
  }
  for (let i = 0; i < s.length; i++) {
      const c = symbol[s[i]] 
      const next = symbol[s[i + 1]];
      if (c<next ){
            ans += next -c
            i++;
      }else{
          ans+=c
      }
  }
return ans

}
// console.log(k("MCMXCIV"))



