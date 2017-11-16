/**
* Queue FIFO
**/

class Queue {
  constructor() {
    this.dataSource = [];
  }
  
  enqueue(el) {
    this.dataSource.push(el);
  }
  
  dequeue(el) {
    this.dataSource.shift(el);
  }
  
  front() {
    return this.dataSource[0];
  }
  
  back() {
    return this.dataSource[this.dataSource.length-1];
  }
  
  clear() {
    this.dataSource = [];
  }
}