// Input: s = "Hello"
// Output: "hello"

function tolower(s) {

    return s.toLowerCase();
}
// console.log(tolower("Hello"))

// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

function ipv4(address) {
    // let temp = address.split('')
    let replace = "[.]"
    let newAddress = []
    for (let i = 0; i < address.length; i++) {
        if (address[i] == ".") {
            newAddress.push(replace)
        } else {
            newAddress.push(address[i])
        }

    }
    return newAddress.join('')
}

// console.log(ipv4("1.1.1.1"))

// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

function shuffle(s, indices) {
    let arr = new Array(indices);
    let temp = s.split('')
    for (let i = 0; i < temp.length; i++) {
        arr[indices[i]] = temp[i]

    }
    return arr.join('')
}
// console.log(shuffle("codeleet",[4,5,6,7,0,2,1,3]))

// Input: command = "G()(al)"
// Output: "Goal"
// Explanation: The Goal Parser interprets the command as follows:

function interpret(command) {
    return command.split("()").join('o').split("(al)").join('al')
}
// console.log(interpret("G()(al)"))

// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

function alike(s) {
    let half = parseInt(s.length / 2)
    let s1 = s.slice(0, half).split('')
    let s2 = s.slice(half, s.length).split('')
   let vowels = new Set(["a", "e", "i", "o", "u", "A", "U", "E", "I", "O"]);
    let c1 = 0;
    let c2 = 0;
    for (let i = 0; i < s1.length; i++) {
        if (vowels.has(s1[i])) {
            c1+=1
        } 
    }
    for (let j = 0; j < s1.length; j++) {
        if (vowels.has(s2[j])) {
            c2+=1
        } 
    }
   if (c1 ==c2) {
    return true
   }else{
    return false
   }

}
// console.log(alike("textbook"))

function areHalvesEqual(s) {
    const vowels = new Set(["a", "e", "i", "o", "u", "A", "U", "E", "I", "O"]);
    const half = s.length / 2;
    let c1 = 0, c2 = 0;

    for (let i = 0; i < half; i++) {
        if (vowels.has(s[i])) {
            c1++;
        }
    }

    for (let j = half; j < s.length; j++) {
        if (vowels.has(s[j])) {
            c2++;
        }
    }

    return c1 === c2;
}

// console.log(areHalvesEqual("book"))

// Input: patterns = ["a","abc","bc","d"], word = "abc"
// Output: 3
// Explanation:
// - "a" appears as a substring in "abc".
// - "abc" appears as a substring in "abc".
// - "bc" appears as a substring in "abc".
// - "d" does not appear as a substring in "abc".
// 3 of the strings in patterns appear as a substring in word.

function numDistinct(patterns, word) {
 return patterns.filter((i)=>word.includes(i)).length
}
console.log(numDistinct(["a","abc","bc","d"],"abc"))