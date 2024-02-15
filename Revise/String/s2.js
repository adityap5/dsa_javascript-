// Input: queries = ["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"], pattern = "FB"
// Output: [true,false,true,true,false]
// Explanation: "FooBar" can be generated like this "F" + "oo" + "B" + "ar".
// "FootBall" can be generated like this "F" + "oot" + "B" + "all".
// "FrameBuffer" can be generated like this "F" + "rame" + "B" + "uffer".

function camel(queries ,pattern) {
    let c = 0
    let ans = []
    let p = pattern.toString().split('')
    for(let i = 0 ; i<queries.length; i++){
        let n = queries[i].toString().split('')
    for (let j = 0; j < p.length; j++) {
       if(n[i]=== j[i] ){
        c++
       }
        
    }
    if(c >= 2){
        ans.push(true)
    }else{
        ans.push(false)
    }
    }

   
    return ans
}
console.log(camel(["FooBar","FooBarTest","FootBall","FrameBuffer","ForceFeedBack"]  , "FB"))