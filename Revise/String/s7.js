//43
function mul(num1, num2) {
    return (BigInt(num1) * BigInt(num2)).toString();
}
// console.log(mul("123456789","987654321"))

//383
function ran(ransomNote, magazine) {
    const myMap = {};

    for (let char of magazine) {
        myMap[char] = (myMap[char] || 0) + 1;
    }
    for (let char of ransomNote) {
        if (!myMap[char]) {
            return false; 
        } else {
            myMap[char]--;
            if (myMap[char] < 0) {
                return false; 
            }
        }
    }
    
    return true;
}
console.log(ran("bg", "ab"))