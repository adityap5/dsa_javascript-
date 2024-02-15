class Queue {
    constructor() {
        this.queue = []
    }

    enQueue(element) {
        return this.queue.push(element);
    }
    deQueue(element) {
        if (this.isEmpty()) {
            return "Underflow"
        }
        return this.queue.shift();
    }
    isEmpty() {
        return this.size() == 0;
    }
    size(element) {
        return this.queue.length
    }
    front(element) {
        if (this.isEmpty()) {
            return "Underflow"
        } return this.queue[0];
    }
    print() {
        let queueString = "";
        for (let i = 0; i < this.size(); i++) {
            queueString += this.queue[i] + ", ";
        }
        console.log("Queue: " + queueString);
    }
    rear(element) {
        if (this.isEmpty()) return "Underflow";
        return this.queue[this.size() - 1]
    }
}

const myQueue = new Queue()


myQueue.enQueue(3)
myQueue.enQueue(69)
myQueue.enQueue(76)
myQueue.enQueue(88)
// console.log(myQueue) //
myQueue.deQueue()
// console.log(myQueue) //
// console.log(myQueue.size())  //
// console.log(myQueue.isEmpty()) //
// console.log(myQueue.print()) 
console.log(myQueue.rear())
console.log(myQueue.front())


