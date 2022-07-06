class Node {
    constructor(value){
        this.value = value,
        this.next = null
    }
}

class LinkedList{    constructor(value){
        this.head = {
            value: value,
            next : null
        };
        this.tail = this.head;
        this.length = 1;
    }
    append(value){
        const newNode = new Node(value);
           if (this.head == null){
            this.head = node;
        }
        else{
         this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        }
        return this;
    }
    prepend(value){
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this;
    }
    insert(index, value){
        const newNode = new Node(value);
        let count = 1;
        let previousNode = this.head;
        while(count < index){
            previousNode = previousNode.next;
            count++;
        }
        newNode.next = previousNode.next;
        previousNode.next = newNode;
    }

    deleteHead(){
         this.head = this.head.next;
         this.length--;
    }

   deleteAtIndex(index){
       if(index === 0){
        this.head = this.head.next;
        this.length--;
        return this;
       }
    let count = 1;
    let previousNode = this.head;
    while(count < index){
        previousNode = previousNode.next;
        count++;
    }
    previousNode.next = previousNode.next.next;
    this.length--;
    return this;
    }

    printList(){
        let printArrayList = [];
        let currentNode = this.head;
        while(currentNode !== null){
            printArrayList.push(currentNode.value);
            currentNode = currentNode.next;
        }
        return printArrayList.join(' -> ');
    }
}
console.log('Creating a LinkList ');
const myLinkedList = new LinkedList(20);
console.log(myLinkedList.printList());
console.log('');

console.log('Appendding Node');
myLinkedList.append(40).append(50);
console.log(myLinkedList.printList());
console.log('');

console.log('Prepending Node');
myLinkedList.prepend(10);
console.log(myLinkedList.printList());
console.log('');

console.log('Inserting Node ');
myLinkedList.insert(2,30);
console.log(myLinkedList.printList());
console.log('Inserting at index 1: 15');
myLinkedList.insert(1,15);
console.log(myLinkedList.printList());
console.log('');

console.log('Deleting Node');
myLinkedList.deleteHead();
console.log(myLinkedList.printList());
console.log('');
