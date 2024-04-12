// s = "hello how are you"

function reversseString(s) {
    let arr = s.split(" ");
    let stack = [];
    for (let i of arr) {
        stack.push(i);
    }
    let str = "";
    while (stack.length) {
        const next = stack.pop();
        if (next) {
            str += next + ' ';
        }
    }
    return str;

}
// console.log(reversseString("hello how are you"))

//1047

function remo(s) {
    let stack = s.split("");
    let final = []

    while (stack.length) {
        const next = stack.shift();

        if (next !== final[final.length - 1]) {
            final.push(next);
            console.log(final[final.length - 1])
        } else {
            final.shift();
        }
    }
    return final;
    // return stack
}
// console.log(remo("azxxzy")) not solved

//496
function nge(nums1, nums2) {
    let op = []
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                for (let k = j; k < nums2.length; k++) {
                    if (nums2[j] < nums2[k]) {
                        op.push(nums2[k])
                        break;
                    } else {
                        op.push(-1)
                    }
                }
            }
        }
    }
    return op
}
// console.log(nge([2, 4], [1, 2, 3, 4])) not solved

function lvp(s) {
    let open =0 , close =0, maxlen = 0
    for (let i = 0; i < s.length; i++) {
     if (s[i]==="("){
         open++
     }else if (s[i]===")"){
         close++
     }
     if (open===close){
         maxlen = Math.max(maxlen,open + close)
     }else if (close > open){
         open = close = 0
     
    }
 
 }
 open = close = 0
 for (let i = s.length-1; i >=0 ; i--) {
     if (s[i]==="("){
         open++
     }else if (s[i]===")"){
         close++
     }
     if (open===close){
         maxlen = Math.max(maxlen,open + close)
     }else if ( open > close){
         open = close = 0
     
    }
 
 }
 return maxlen
}
// console.log(lvp("(()"))
//1021
function rop(s) {
    let c = 0
    let op =[]
    for (let i = 0; i < s.length; i++) {
       if (s[i]==="(") {
        if(c>0){
            op.push(s[i])
        }
        c++
       }else{
        c--
        if (c > 0) {
            op.push(s[i])
        }
       }
        
    }
    return op.join("")
}
console.log(rop("(()())(())"))

//1209

function test(s,k) {
    
}
// console.log(test("deeedbbcccbdaa",3))
