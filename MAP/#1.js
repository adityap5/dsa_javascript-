let myMap = new Map();
myMap.set("1", "One");
myMap.set("2", "Two");
myMap.set("3", "Three");

// console.log(myMap);

for(let[key ,value ]of myMap) {
    console.log(`Key is ${key} and value is ${value}`);
  }

console.log(myMap);
