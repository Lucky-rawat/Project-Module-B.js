class MaxHeap{

	constructor(){
		this.data = [];
		this.position = 1;
	}
	
	insert(value){

		this.data[this.position] = value;
		
		
		var bubbleCounter = this.position;
		while(bubbleCounter > 1){
		
		    var parentIndex = ((bubbleCounter)/2 )|0;
		    if(this.data[bubbleCounter] > this.data[parentIndex]){
		    	//swap
		    	var temp = this.data[parentIndex];
		    	this.data[parentIndex] = this.data[bubbleCounter];
		    	this.data[bubbleCounter] = temp;
		    
		    }
		    
		    bubbleCounter = parentIndex;
		    
		}
		
		this.position++;
	}
}


var maxHeap = new MaxHeap();
maxHeap.insert(1);
maxHeap.insert(10);
maxHeap.insert(3);
maxHeap.insert(4);
maxHeap.insert(40);
maxHeap.insert(12);

console.log(maxHeap);
