class Stack {
    constructor(){
        this.data = [];
        this.top = 0;
    }
    push(element) {
      this.data[this.top] = element;
      this.top = this.top + 1;
    }
   length() {
      return this.top;
   }
   peek() {
      return this.data[this.top-1];
   }
   isEmpty() {
     return this.top === 0;
   }
   pop() {
    if( this.isEmpty() === false ) {
       this.top = this.top -1;
       return this.data.pop();
     }
   }
   print() {
      var top = this.top - 1;  
      while(top >= 0) { 
          console.log(this.data[top]);
           top--;
       }
    }
  
}
let s=new Stack();
s.push(10);
s.push(20);
s.push(30);
console.log("Inserted elements = ",s.top);
console.log("Lenghth of Stack = ",s.length());
console.log("Elements in Stack  :")
s.print();
s.pop();
console.log("After Pop element , Top  = ",s.top)
console.log("Elements of Stack are after pop:")
s.print();
