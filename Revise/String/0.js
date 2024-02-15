// Input: s = "abcdefg", k = 2
// Output: "bacdfeg"
let s = "abcdefg"

// console.log()
function reverseString(s,k) {
    let news =s.slice(k , s.length)
 let char = s.slice(0,k).split('').reverse().join('')

//    return char.concat(news)
  return news
}
    

// console.log(reverseString("abcdefg",2))

let str = "eat"
let str2 = "tea"
// console.log(str.localeCompare(str2));

// Input: s = "Hello how are you Contestant", k = 4
// Output: "Hello how are you"

let se = "Hello how are you Contestant"

const k = se.split() ;

console.log()

