//rotate an array by k steps
//arr = [1,2,3,4] k= 1
function rotate(array,k) {
   let c = 0
   let a = 0
  while (c < k){
   a = array.pop()
    array.unshift(a)
    c++ 
   }
   return array
}
console.log(rotate([1,2,3,4],3))