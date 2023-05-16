class Node {
    constructor(value){
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor(head = null){
        this.head = head
    }
    // Append new item to end of list
     append(value){
        let newNode = new Node(value)
        if (!this.head){
            this.head = newNode
            return this
        }
        else{
            let current = this.head
            while(current.nextNode){
                current = current.nextNode;
            }
            current.nextNode = newNode;
            return this;
        }
    }
// Prepend value to beginning of list
    prepend(value){
        let newNode = new Node(value)
        newNode.nextNode = this.head;
        this.head = newNode;
        return this;
    }
//Determine size of linked list
     size(){
        let count = 0;
        let current = this.head;
        while (current){
        count++;
        current = current.nextNode;
        }
        return count;
    }
//return first node in the list
    heads() {
        return this.head;
    }
//return last node in the list
    tail(){
        let current = this.head
        while (current.nextNode){
            current = current.nextNode;
        }
        return current
    }

// return the node at given index
    at(index){
        if (index > this.size() - 1){
            alert('index does not exist')
        }
        else{
        let current = this.head;
        
        let i = 0;

        for(i=0; i<=index-1; i++){
            current = current.nextNode
        }
        return current
    }
    }

    // remove last element from list
    pop(){
        let current = this.head
        while (current.nextNode.nextNode){
            current = current.nextNode;
        }
        current.nextNode = null;
        return this

    }

    // returns true if the passed in value is in the list and otherwise returns false
    contains(v){
        let current = this.head;
        while(current){
            if(current.value == v){
                return true;
            }
            current = current.nextNode;
        };
        return false;
    }

   // same but with recursion
    containsRec(v){
        
        let self = this;
        let current = self.head;
        console.log(current)
        if (!current){
            return false;
        }
        if(current.value == v){
            return true
        }
        return self.contains(v)
        
    }

    //returns the index of the node containing value, or null if not found
    find(v){
        let current = this.head;
        let count = 0
        while(current){
            if(current.value == v){
                return count;
            }
            current = current.nextNode;
            count++
        };
        return null;
    }

    toString(){
        let string = "";
        let current = this.head;
        while(current){
            string = `${string}`+ `(${current.value}) -> `
            current = current.nextNode;
        }
        
        return string + 'null';
    }
}

// Generate Test list
let node1 = new Node(1);
let node2 = new Node(2);
node1.nextNode = node2
let node3 = new Node(3);
node2.nextNode = node3
let node4 = new Node(4);
node3.nextNode = node4


let list = new LinkedList(node1);




// function at(list, index)



console.log(list.containsRec(2))


// class ListNode {
//     constructor(data) {
//         this.data = data
//         this.next = null                
//     }
// }

// class LinkedList {
//     constructor(head = null) {
//         this.head = head
//     }
// }

// let node1 = new ListNode(2)
// let node2 = new ListNode(5)
// node1.next = node2

// let list = new LinkedList(node1)

// console.log(list.head.next.data) 