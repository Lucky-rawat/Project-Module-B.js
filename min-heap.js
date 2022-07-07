function MinHeap() {
  this.data = [];
}
MinHeap.prototype.insert = function(val) {
  this.data.push(val);
  this.bubbleUp(this.data.length-1);
};
MinHeap.prototype.bubbleUp = function(index) {
  while (index > 0) {
    var parent = Math.floor((index + 1) / 2) - 1;
    
    if (this.data[parent] > this.data[index]) {
      var temp = this.data[parent];
      this.data[parent] = this.data[index];
      this.data[index] = temp;
    }
    
    index = parent;
  }
};

MinHeap.prototype.extractMin = function() {
  var min = this.data[0];
  this.data[0] = this.data.pop();
  this.bubbleDown(0);
  
  return min;
};

MinHeap.prototype.bubbleDown = function(index) {
  while (true) {
    var child = (index+1)*2;
    var sibling = child - 1;
    var toSwap = null;
    if (this.data[index] > this.data[child]) {
      toSwap = child;
    }
    if (this.data[index] > this.data[sibling] && (this.data[child] == null || (this.data[child] !== null && this.data[sibling] < this.data[child]))) {
        toSwap = sibling;
    }
    if (toSwap == null) {
      break;
    }
    
    var temp = this.data[toSwap];
    this.data[toSwap] = this.data[index];
    this.data[index] = temp;
    
    index = toSwap;
  }
};
var heap = new MinHeap();
heap.insert(5);
heap.insert(4);
heap.insert(8);
heap.insert(6);
heap.insert(1);
heap.insert(14);
heap.insert(2);
heap.insert(7);

console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
console.log(heap.extractMin());
