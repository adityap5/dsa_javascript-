// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.

function add(li,l2) {
   return Number(li.reverse().join("")) + Number(l2.reverse().join(""))
}
console.log(add( [2,4,3],[5,6,4]))