//STACK IMPLEMENTATION
class Stack{
    constructor(){
        this.stack = []
    }
     push(element){
        return this.stack.push(element)
     }
     pop(element){
        return this.stack.pop(element)
     }
     peek(element){
        if(this.isEmpty()){
            return "Stack is empty!"
        }else return this.stack[this.size() - 1]
        
     }
     isEmpty(){
        return this.size().length == -1
          
     }
     size(element){
        return this.stack.length
     }
     print(element){
       for (let i = 0; i <this.size(); i++) {
        const val = this.stack[i];
       }
       return this.stack
}
     }
    
const stack = new Stack()
stack.push(78)
stack.push(69)
stack.push(88)
stack.push(57)
stack.push(80)

// console.log(stack.peek())
// stack.pop()
// console.log(stack.peek())
// console.log(stack.size())
// console.log(stack.isEmpty())
// console.log(stack.print())
// console.log(stack)

let data = []
let currentsize = data.length;
let max = 5 ;
function push(newval){
   if (currentsize >= max) {
      console.log("Stack is full")
   }else{
      data[currentsize] = newval ;
      currentsize ++;
   }
 
}
function pop(){
 if(currentsize === 0 ){
   console.log("stack is empty")
}
else{
   currentsize-=1;
   data.length = currentsize
}
}




push(2)
push(23)
push(22)
push(24)
push(26)
push(29)
push(69)
pop()
console.log(data)