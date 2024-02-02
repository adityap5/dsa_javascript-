//1. palindrome number :- 121 = 121
function palindrome(num) {
return num == num.toString().split('').reverse().join('') ? true : false
}
// console.log(palindrome(121));


//2. fibonacci Series:-
// 0,1,1,2,3,5,8,13
// f(0)=0 , f(1)=1 
// f(2)=f(1) + f(0)
// f(n)= f(n-1) +f(n-2) for n > 1


function fibonacci(n) {
    const arr = [0,1]
    for (let i = 2; i <=n; i++) {
       arr.push(arr[i-1]+arr[i-2])
    }
    return arr
}
// console.log(fibonacci(7))

//question 2 by Recursion
function fibonacci(n) {
   if(n <= 1) return n;

    return  fibonacci(n-1) + fibonacci(n-2)
}
// console.log(fibonacci(7))

//3. Valid Anagram

// s = anagram == t = nagaram

function anagram(s,t){
    s = s.split('').sort().join('')
    t = t.split('').sort().join('')
 return s.length == t.length ? true : false
}
// console.log(anagram('anagram','nagaram'))

//4. Two Sum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

function ts(nums,target){
 for (let i = 0; i < nums.length; i++) {
    for (let j = i+1; j < nums.length; j++) {
       
        if(nums[i] + nums[j] === target) return [i,j]
    } 
 }
}
// console.log(ts([2,7,7,15],14))

//5. Best Time To Buy and Sell Stock
// prices = [7,1,5,3,6.4] , output:5;

function mp(prices){
    
    let gp = 0;
    for (let i = 0; i < prices.length-1; i++) {
    for (let j = i+1; j < prices.length; j++) {
        const cp = prices[j] - prices[i] ;
        if(cp > gp ) gp = cp;
}
}
return gp;

} // not optimized
// console.log(mp([7,1,5,3,6,4]))

//Greedy Algorithm for ques 5

function Greedy(prices) {
    let maxpurchaseprice = prices[0] || 0;
    let profit = 0;
    for (let i = 1; i < prices.length; i++) {
        if(prices[i]< maxpurchaseprice){
            maxpurchaseprice=prices[i];
        }
        profit = Math.max(profit , prices[i] - maxpurchaseprice)
    }
    return profit;
}
// console.log(Greedy([7,1,5,3,6,4]))

// nums = [1,2,3,4]
function runningSum(nums) {
    const arr = []
    const sum =0
    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        arr.push(sum)
    }
    return arr
};
// console.log(runningSum([1,2,3,4])) 
