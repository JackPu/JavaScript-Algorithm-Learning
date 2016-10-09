/**
 * Binary Search Tree(BST or Ordered Binary Tree)
 **/

class Node {
  constructor(data, left, right) {
    this.data = data;
    this.left = left;
    this.right = right;
  }

  show() {
    return this.data;
  }

  class BinarySearchTree {

    constructor() {
      this.root = null;
    }

    insert(data) {
      let n = new Node(data, null, null);
      if (!this.root) {
        return this.root = n;
      }
      let cureentNode = this.root;
      let parent = null;
      while (1) {
        parent = cureentNode;
        if (data < currentNode.data) {
          current = currentNode.left;
          if (current === null) {
            parent.left = n;
            break;
          }
        }else{
          cureentNode = cureentNode.right;
          if(cureentNode===null) {
            parent.right = null;
            break;
          }
        }
      }
    }




  }


}