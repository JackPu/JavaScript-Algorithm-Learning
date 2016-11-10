/**
* stack LIFO
**/

class Stack {
  constructor() {
    this.dataSource = [];
    this.top = 0;
  }
  
  push(el) {
    this.dataSource[this.top++] = el;
    
  }
  
  pop() {
    return this.dataSource[--this.top]
  }
  
  peek() {
    return this.dataSource[this.top-1]
  }
  
  clear() {
    this.dataSource = [];
  }
  
}

module.exports = Stack;