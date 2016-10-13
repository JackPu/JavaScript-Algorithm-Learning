let BST = require('../code/binary-search-tree.js');

let arr = [1, 111, 2, 12, 180, 500, -12, 0];
describe('binary search tree', function () {
  let bst = new BST();
  
  it('insert', function () {
    arr.forEach((item) => {
      bst.insert(item);  
      
    })
    expect(bst.root.data).toEqual(1);
  });
  
   it('find some value', function() {
    
    expect(bst.find(111)).toEqual(111);
  })
  
  it('find min', function() {
    
    expect(bst.findMin()).toEqual(-12);
  })
  
  it('find max', function() {
    
    expect(bst.findMax()).toEqual(500);
  })
  
  
})