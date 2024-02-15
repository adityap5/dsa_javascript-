//Given an input string s, reverse  the order of the word
//input  : "the sky is blue"  output : "blue is the sky"

function reversString(s) {
    return s.split(" ").reverse().join(" ") // "  hello world  " not work for this
 
}
// console.log(reversString("  hello world  "))

function reverseStack(s) {
    let ns = s.split(" ")
    let stack = []
    for(let i of ns){
        stack.push(i)
    }
    let finalns ="";

    while (stack.length) {
        const current = stack.pop() 
        if (current) {
            finalns += " " + current;
          }
    }
   
     return finalns.trim()
    // return stack 
}
// console.log(reverseStack("  hello world  "))

//Valid Parentheses
// Input: s = "()[]{}" // Output: true ✔
// Input: s = "(]" // Output: false ✔

function validParentheses(s){
    let st = []
    for (let i = 0; i < s.length; i++) {
        let  c = s[i];
        if (c === "(" || c === "[" || c ==="{") {
            st.push(c)
        }else if (c=== ")" || c === "]" || c ==="}") {
            if (st.length === 0){
                return false
            }
            const top = st.pop()
            if (c ===")" && top !=="(" || 
                 c ==="}" && top !== "{"|| 
                 c==="]" && top !== "["
            ){
return false
            }
        }
    }
   
    return st.length ===0 ;
}
// console.log(validParentheses( "(]"))


//hello olleh

function reversString(s) {
    let ns = s.split("")
    let stack = []
    let ans = " "
    for (let i = 0; i < ns.length ; i++) {
        stack.push(ns[i])
    }
    while(stack.length) {
        let c = stack.pop()
        ans += "" + c 
    }
    return ans.trim()
}
// console.log(reversString("hello  "))

function reverseonlyletters(s) {
    let ns = s.split("")
    let stack = []
    let ans = " "
    for (let i = 0; i < ns.length ; i++) {
        if(ns[i] ==='!' &&ns[i] === '@' &&
         ns[i] ==='#' &&ns[i] === '&' &&
        ns[i] ==='$' &&ns[i] === '*' &&
        ns[i] ==='%' &&ns[i] === '-' &&
        ns[i] ==='^' &&ns[i] === '_'
        ){
           stack.push(ns[i]);
        }else{
            stack.push(ns[i])
        }
        while(stack.length) {
            let c = stack.pop()
            ans += "" + c 
        }
       
    }
   
    return ans.trim()
}
// console.log(reverseonlyletters("Test1ng-Leet=code-Q!"))
//"Qedo1ct-eeLg=ntse-T!"
//"a-bC-dEf-ghIj"
//"j-Ih-gfE-dCba"

// Input: s = "Mr Ding"
// Output: "rM gniD"

function rl(s){
    let ns = s.split(' '); 
    for (let i = 0; i < ns.length; i++) {
        ns[i] = ns[i].split('').reverse().join('');
    }
    return ns.join(' ');
}
// console.log(rl("Mr Ding"))

// Input: num = 443
// Output: true
// Explanation: 172 + 271 = 443 so we return true.

function rsum(num) {
    if(num==0) return true
    // let n1 = Math.floor(num/2);
    for (let i = 1; i < num; i++){
       if(Number(i)+Number(i.toString().split('').reverse().join(''))) return true;   
    }
    return false;
}
console.log(rsum(181))