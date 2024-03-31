//49
function ana(strs) {
    let myMap = new Map();

    for (const words of strs) {
        
        const sort = words.split("").sort().join('');

        if(myMap.has(sort)){
            myMap.get(sort).push(words)
        }else{
            myMap.set(sort, [words])
        }
    }
   
    return Array.from(myMap.values());
}
console.log(ana(["eat","tea","tan","ate","nat","bat"]))