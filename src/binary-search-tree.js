const { NotImplementedError } = require("../lib/errors");
const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null;
  }

  root() {
    return this.node;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.node === null) {
      this.node = newNode;
      return;
    }
    let parentNode = null;
    let currentNode = this.node;
    while (currentNode !== null) {
      parentNode = currentNode;
      if (data < parentNode.data) {
        currentNode = parentNode.left;
      } else {
        currentNode = parentNode.right;
      }
    }
    if (data < parentNode.data) {
      parentNode.left = newNode;
    } else {
      parentNode.right = newNode;
    }
  }

  find(data) {
    let currentNode = this.node;
    while (currentNode !== null) {
      if (currentNode.data === data) {
        break;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return currentNode;
  }

  has(data) {
    let currentNode = this.node;
    while (currentNode !== null) {
      let currentValue = currentNode.data;
      if (data === currentValue) {
        return true;
      }
      if (data < currentValue) {
        currentNode = currentNode.left;
      }
      if (data > currentValue) {
        currentNode = currentNode.right;
      }
    }
    return false;
  }

  remove(data) {
    let parentNode = null;
    let currentNode = this.node;
    while (currentNode !== null) {
      let currentValue = currentNode.data;

      if (data === currentValue) {
        let removedNode = currentNode;
        currentNode = removedNode.left;
        let maxCurrentChild = this.max(removedNode.left);
        maxCurrentChild.right = removedNode.right;
        if (parentNode !== null) {
          if (parentNode.data > currentNode.data) {
            parentNode.left = currentNode;
          } else {
            parentNode.right = currentNode;
          }
        }
        return;
      }
      parentNode = currentNode;
      if (data < currentValue) {
        currentNode = currentNode.left;
      }
      if (data > currentValue) {
        currentNode = currentNode.right;
      }
    }
  }
  max(childNode) {
    if (childNode === null) {
      return null;
    }
    let currentNode = childNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode;
  }

  min() {
    if (this.node === null) {
      return null;
    }
    let currentNode = this.node;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
    return currentNode.data;
  }

  max() {
    if (this.node === null) {
      return null;
    }
    let currentNode = this.node;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree,
};
