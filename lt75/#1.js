//162
function peak(nums) {
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i+1] && nums[i] > nums[i-1]) {
            return i
        }
    }
}
// console.log(peak([1,2,3,1]))
//1768
function mer(word1,word2) {
    let op =""
    if(word1.length<word2.length){

    
    for (let i = 0; i < word2.length; i++){
        if (!word1[i]) {
            op+=word2[i]
        }else{
            op += word1[i] + word2[i] ;
        }
    }
}else{
    for (let i = 0; i < word1.length; i++){
        if (!word2[i]) {
            op+=word1[i]
        }else{
            op += word1[i] + word2[i] ;
        }
    }
}
    return op
}
// console.log(mer("abcd","pq"))
//1071
function com( str1, str2) {
    let op=""
   for (let i = 0; i < str1.length; i++) {
    if (str1[i] ===str2[i]) {
        op+=str1[i]
    }
   }
   for (let i = 0; i < op.length; i++) {
    for (let j = i+1; j < op.length; j++) {
        
        if (op[i] ===op[j]){
            return op.slice(0,j)
        }
    }
   }
   return op
   
}
// console.log(com( "LEET","CODE"))

//238

function self(nums) {
//     let output = []
//     for (let i = 0; i < nums.length; i++) {
//         let p =1
//         for (let j = nums.length-1; j >=0 ; j--) {
//        if(j!=i){
//         p*=nums[j]
//     }
//        }
//         output.push(p)
//     }
//  return output

//efficient way
let output = [];
    let left = 1;
    for (let i = 0; i < nums.length; i++) {
        output[i] = left;
        left *= nums[i];
    }
    let right = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        output[i] *= right;
        right *= nums[i];
    }
    return output;
}
// console.log(self([1,2,3,4]))
//443

function s(chars) {
    let op = [];
    let count = 1;

    for (let i = 0; i < chars.length; i++) {
        if (i + 1 < chars.length && chars[i] === chars[i + 1]) {
            count++;
        } else {
            op.push(chars[i]);
            if (count > 1) {
                op.push(count);
            }
            count = 1;
        }
    }
    return op.length
}
console.log(s(["a","a","b","b","c","c","c"])) 

//605

function flower(flowerbed,n) {
    let i = 0;
    while (i < flowerbed.length) {
        if (flowerbed[i] === 0 && (i === 0 || flowerbed[i - 1] === 0) && (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)) {
            flowerbed[i] = 1;
            n--;
            i += 2; 
        } else {
            i++; 
        }
        if (n <= 0) return true; 
    }
    return false;
}
// console.log(flower([1,0,0,0,1],2))