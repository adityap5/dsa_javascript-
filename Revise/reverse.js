// Input: num = 526
// Output: true
// Explanation: Reverse num to get 625, then reverse 625 to get 526, which equals num.


function rno(num) {
    if(num===0) return true;
    let n1 = num.toString().split('').reverse().join('')
    let n2 = n1.toString().split('').reverse().join('');
    let n = String(num)
    if (n[n.length-1]==="0") return false;
    return n2 == num;
}
// console.log(rno(1800))

// Input: target = [1,2,3,4], arr = [2,4,1,3]
// Output: true
// Explanation: You can follow the next steps to convert arr to target:
// 1- Reverse subarray [2,4,1], arr becomes [1,4,2,3]
// 2- Reverse subarray [4,2], arr becomes [1,2,4,3]
// 3- Reverse subarray [4,3], arr becomes [1,2,3,4]
// There are multiple ways to convert arr to target, this is not the only way to do so.


// Input: n = 00000010100101000001111010011100
// Output:    964176192 (00111001011110000010100101000000)

function ra(n) {
//    return n.reverse()
    return n.split('').reverse().join('')
     
}
// console.log(ra('00000010100101000001111010011100'))


function reverseBits(n) {
    const string = n.toString(2);
    const arrayString = string.split('');
    const length = arrayString.length;
    for (let i = 0; i < (32 - length); i++) {
        arrayString.unshift('0');
    }
    return parseInt(arrayString.reverse().join('').toString(2), 2);
};

// console.log(reverseBits(00000010100101000001111010011100))

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

function reverseInteger(x) {
    let nx = x.toString().split('');
    let n1 = []
    let n2 =[]
for (let i = 0; i < nx.length; i++) {
    if (nx[i] === '-') {
            n1.push(nx[i]);
    }else if(nx[i] !== '0' ){ n2.push(nx[i]);}
    
}
let nn1 = n1.join('');
let nn2 = n2.reverse().join('')
// 

return nn1.concat(nn2);
}
// console.log(reverseInteger(901000))

function ri(x) {
    let result = 0
while (x !== 0) {
    let digit = x % 10;
        result = result * 10 + digit;
        x = Math.floor(x / 10);
}
if (result < Math.pow(-2, 31) || result > Math.pow(2, 31) - 1) {
    return 0;
}
return result;
};
// console.log(ri(901000))

// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

function linkreverse(head) {
    // return head.reverse()
    let ans = []
for (let i = head.length -1; i >= 0 ; i--) {
   ans.push(head[i])
}

    return ans

}
// console.log(linkreverse([1,2,3,4,5]))

// Input: word = "abcdefd", ch = "d"
// Output: "dcbaefd"

function se(word , ch) {
   let  index = word.indexOf(ch)
   let rn = word.substr(0 ,index +1)
   let rl = word.substr(index +1)
   let rp =rn.split('').reverse().join('')
//    return 
return rp.concat(rl)
}
console.log(se("abcd", "z"))
// Input: word = "abcd", ch = "z"
// Output: "abcd"
// Explanation: "z" does not exist in word.


// Example 1:
// Input: s = "hello"
// Output: "holle"

// Example 2:
// Input: s = "leetcode"
// Output: "leotcede"

function rv(s) {
    let ns = s.split('');
    for (let i = 0; i < ns.length; i++) {
        for (let j = i+1; j < ns.length; j++) {
            if(ns[i] =='a' || ns[i] =='e'|| ns[i] =='i'|| ns[i] =='o'|| ns[i] =='u' ||
            ns[i] =='A' || ns[i] =='E'|| ns[i] =='I'|| ns[i] =='O'|| ns[i] =='U'
            ){
                if(ns[j] =='a' || ns[j] =='e'|| ns[j] =='i'|| ns[j] =='o'|| ns[j] =='u'  ||
                ns[j] =='A' || ns[j] =='E'|| ns[j] =='I'|| ns[j] =='O'|| ns[j] =='U'){
                    let temp = ns[i];
                    ns[i] = ns[j]
                    ns[j] = temp
                }
            }
            
        }
        
    }
    return ns.join('')
}
// console.log(rv("leetcode"))

function rv1(s) {
let vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    let ns = s.split('');
    let i =0
    let j = ns.length -1
    while (i<j) {
        if (vowels.has(ns[i]) && vowels.has(ns[j])) {
            let temp = ns[i];
                    ns[i] = ns[j]
                    ns[j] = temp
            i++;
            j--;
    }else if(!vowels.has(ns[i])){
        i++
        
    }else if(!vowels.has(ns[j]))(
        j--
    )
}
    return ns.join('')
}
// console.log(rv1("leetcode"))