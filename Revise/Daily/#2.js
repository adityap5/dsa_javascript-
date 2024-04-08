//1614
function nest(s) {
    s= s.split('')
    let c = 0,k=0
    for (let i = 0; i < s.length; i++) {
        if (s[i]==="("){
            c++

        }else if (s[i]==")"){
            c--
        }
        if(c>k) k =c
    }
    return k
}
// console.log(nest("(1)+((2))+(((3)))"))

//1544
function great(s) {
    let a = []
    for (let i = 0; i < s.length; i++) {
        if (s[i+1] !== s[i].toLowerCase()){
           a.push(s[i])
        }
    }
    return a.join("")
}
// console.log(great("abBAcC"))
//334

function triplet(nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let secmin = Number.MAX_SAFE_INTEGER; 
    for (let num of nums) {
        if (num <= min) {
            min = num; 
        } else if (num <= secmin) {
            secmin = num;
        } else {
            return true; 
        }
    }
    
    return false;
}
// console.log(triplet([2,1,5,0,4,6]))
//392
function subs(s,t) {
    for (let i = 0; i < s.length; i++) {
        let c =0
       for (let j=0 ; j < t.length; j++) {

      if (s[i] === t[j] && i >= j) {
       c++
      }
    } 
    if (c == 0) {
        return false
    }
}
    return true
}

console.log(subs("abc","ahbgdc"))