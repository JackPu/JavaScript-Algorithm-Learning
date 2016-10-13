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
    let currentNode = this.root;
    let parent = null;
    while (1) {
      parent = currentNode;
      if (data < currentNode.data) {
        currentNode = currentNode.left;
        if (currentNode === null) {
          parent.left = n;
          break;
        }
      } else {
        currentNode = currentNode.right;
        if (currentNode === null) {
          parent.right = n;
          break;
        }
      }
    }
  }
  
  remove(data) {
    root = removeNode(this.root,data)
  }
  
  removeNode(node,data) {
    if(node == null) {
      return null;
    }
    
    if(data == node.data) {
      // no children node
      if(node.left == null && node.right == null) {
        return null;
      }
      if(node.left == null) {
        return node.right;
      }
      if(node.right == null) {
        return node.left;
      }
      
      
    }
  }
  
  find(data) {
    var current = this.root;
    while (current != null) {
      if(data==current.data) {
        break;
      }
      if(data < current.data) {
        current = current.left;
      }else{
        current = current.right
      }
    }
    return current.data;  
  }

  findMax() {
    var current = this.root;
    while (current.right != null) {
      current = current.right;
    }
    return current.data;
  }
  
  findMin() {
    var current = this.root;
    while (current.left != null) {
      current = current.left;
    }
    return current.data;
  }

  inOrder() {

  }

  preOrder() {

  }

}

module.exports = BinarySearchTree;





