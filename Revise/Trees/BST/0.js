class Node {
    constructor(val) {
        this.value = val;
        this.right = null;
        this.left = null;
    }
}

class BSTree {
    constructor() {
        this.root = null;
    }

    isEmpty() {
        return this.root === null;
    }
    makeTree(val) {
        let newnode = new Node(val);
        if (this.root === null) {
            this.root = newnode;
        } else {
            this.insertNode(this.root, newnode);
        }
    }

    insertNode(root, newnode) {
        if (root.value > newnode.value) {
            if (root.left === null) {
                root.left = newnode;
            } else {
                this.insertNode(root.left, newnode);
            }
        } else {
            if (root.right === null) {
                root.right = newnode;
            } else {
                this.insertNode(root.right, newnode);
            }
        }
    }
    search(root, val) {
        if (root === null) {
            return false;
        } else if (root.value === val) {
            return true
        } else if (root.value > val) {
            return this.search(root.left, val)
        }
        else {
            return this.search(root.right, val)
        }
    }
    preOrder(root) {
        if (root) {
            console.log(root.value)
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }
    inOrder(root) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value)
            this.inOrder(root.right)
        }
    }
    postOrder(root) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value)
        }
    }
    bfsTraversing() {
        let queue = [];
        queue.push(this.root)
        while (queue.length) {
            let current = queue.shift()
            if (current.left) {
                queue.push(current.left)
            } if (current.right) {
                queue.push(current.right)
            }
            console.log(current.value)
        }
    }
    minValue(root) {
        if (!root.left) {
            return root.value
        } else {
            return this.minValue(root.left)
        }
    }
    maxValue(root) {
        if (!root.right) {
            return root.value
        } else {
            return this.maxValue(root.right)
        }
    }
    removeData(value) {
        this.root = this.delete(this.root, value)
    }
    delete(root, value) {
        if (root === null) {
            return null
        }
        if (value < root.value) {
            root.left = this.delete(root.left, value)
        } else if (value > root.value) {
            root.right = this.delete(root.right, value)
        }else{
            if (!root.left && !root.right) {
                return null;
            }else if (!root.left){
                    return root.left
            }else if (!root.right){
                return root.right
        }
        root.value = this.minValue(root.right)
        root.right = this.delete(root.right, root.value)
        }
        return root
    }
}


const bst = new BSTree();
bst.makeTree(50);
bst.makeTree(100);
bst.makeTree(40);
bst.makeTree(90);
bst.makeTree(30)
bst.makeTree(110)
bst.makeTree(45)
console.log(bst.isEmpty())
console.log(bst)
console.log(bst.search(bst.root, 30))
// bst.preOrder(bst.root)
// bst.inOrder(bst.root)
// bst.postOrder(bst.root)
// bst.bfsTraversing()
// console.log(bst.minValue(bst.root))
// console.log(bst.maxValue(bst.root))
bst.removeData(90)
bst.bfsTraversing()
