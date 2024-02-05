function multiply(arr) {
    if(arr.length <=0){
        return 1
    }else return arr[arr.length-1] * multiply(arr.slice(0, arr.length-1))
}
// console.log(multiply([1,2,3,4]))

//most ask question of recursion
//factorial

function factorial(n) {
      if (n <= 0 ) {
        return 1;
      }else return n * factorial(n - 1)
}
// console.log(factorial(7))

//create an array with range of numbers 
// input : start =0, end=5 

function createArray(start, end){
       if(end <start){
        return [];
       }else{
        const arr = createArray(start, end -1);
        arr.push(end);
    return arr

    } 
}
// console.log(createArray(0, 5))

// given an integer x, returns true if x is a palindrome, and false otherwise
//input x =121 

// function palindrome(x) {

    
// }
// console.log(palindrome(121))

//fibonacci

// 1,1,2,3,5,8,13

function fib(n) {
    
}



