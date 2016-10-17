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
  
  it('in order',function() {
    bst.inOrder(bst.root);
    expect(bst.inOrderArr).toEqual([-12,0,1,2,12,111,180,500]);
  })
  
  it('pre order',function() {
    bst.preOrder(bst.root);
    expect(bst.preOrderArr).toEqual([1, -12, 0, 111, 2, 12, 180, 500]);
  })
  
  it('post order',function() {
    bst.postOrder(bst.root);
    expect(bst.postOrderArr).toEqual([0, -12, 12, 2, 500, 180, 111, 1]);
  })
  
  it('remove node' ,function() {
    bst.remove(-12);
    expect(bst.findMin()).toEqual(0);
  })
  
  it('remove the max value' ,function() {
    bst.remove(500);
    expect(bst.findMax()).toEqual(180);
  })
  
  
  
})