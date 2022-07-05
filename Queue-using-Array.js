
class Queue {

  constructor() {

    this.items = [];

  }
  enqueue(element) {

    console.log(element + " is added to queue.");

    this.items.push(element);

  }
    dequeue() {

  return this.items.shift();

  }
  length() {

    return this.items.length;

  }
  peek() {

    return this.items[0];

  }
  print() {

    var str = "";

    for (var i = 0; i < this.items.length; i++)

      str += this.items[i] + " ";

    return str;

  }
  clear() {

    console.log("Queue is cleared");

    this.items.length = 0;

  }
  isEmpty() {

    return this.items.length === 0;

  }

}
var queue= new Queue();
queue.enqueue(40);
queue.enqueue(50);
queue.enqueue(60);
console.log(queue.length());
console.log(queue.dequeue() + " is removed from the queue");
console.log(queue.length());
console.log("Queue elements are " + queue.print());
