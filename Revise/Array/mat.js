// Input: mat = [[1,2,3],
//               [4,5,6],
//               [7,8,9]]
// Output: 25
// Explanation: Diagonals sum: 1 + 5 + 9 + 3 + 7 = 25
// Notice that element mat[1][1] = 5 is counted only once.

function matdiagonal(mat) {
    let sum = 0
    for(let i=0; i<mat.length ; i++){
       sum += mat[i][i] + mat[i][(mat.length-1 )- i]
    }
    
   if ((mat.length -1 )% 2 ===0) {
    return sum -=  mat[Math.floor(mat.length/2)][Math.floor(mat.length/2)]
   }else{
    return sum
   }

}
// console.log(matdiagonal([[1,2,3],
//                    [4,5,6],
//                    [7,8,9]]))

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

function osum(nums) {
    let ans =[]
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i]
        ans.push(sum) //sum =3
        nums[i] = sum
    }
    return ans
}

// console.log(osum([1,2,3,4]))

// Input: nums = [1,2,3,1,1,3]
// Output: 4
// Explanation: There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.

function pair(nums) {
    let c =0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i+1; j < nums.length; j++) {
            if (nums[i] ==nums[j] ) {
                c++
            }
        }
    }
    return c
}

// console.log(pair([1,2,3]))

// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

function addToArrayForm(num , k) {
    let s = BigInt(num.join('')) + BigInt(k)

    return s.toString().split("")
}
// console.log(addToArrayForm([1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3] , 516))