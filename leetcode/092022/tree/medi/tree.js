class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
    this.node = null
  }
}

// Binary Search tree class
class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null
  }

  // function to be implemented
  // insert(data)
  // remove(data)

  // Helper function
  // findMinNode()
  // getRootNode()
  // inorder(node)
  // preorder(node)
  // postorder(node)
  // search(node, data)

  // helper method which creates a new node to
  // be inserted and calls insertNode
  insert(data) {
    // Creating a node and initialising
    // with data
    var newNode = new Node(data)

    // root is null then node will
    // be added to the tree and made root.
    if (this.root === null) this.root = newNode
    // find the correct position in the
    // tree and add the node
    else this.insertNode(this.root, newNode)
  }

  // Method to insert a node in a tree
  // it moves over the tree to find the location
  // to insert a node with a given data
  insertNode(node, newNode) {
    // if the data is less than the node
    // data move left of the tree
    if (newNode.data < node.data) {
      // if left is null insert node here
      if (node.left === null) node.left = newNode
      // if left is not null recur until
      // null is found
      else this.insertNode(node.left, newNode)
    }

    // if the data is more than the node
    // data move right of the tree
    else {
      // if right is null insert node here
      if (node.right === null) node.right = newNode
      // if right is not null recur until
      // null is found
      else this.insertNode(node.right, newNode)
    }
  }

  // returns root of the tree
  getRootNode() {
    return this.root
  }

  // helper method that calls the
  // removeNode with a given data
  remove(data) {
    // root is re-initialized with
    // root of a modified tree.
    this.root = this.removeNode(this.root, data)
  }

  // Method to remove node with a
  // given data
  // it recur over the tree to find the
  // data and removes it
  removeNode(node, key) {
    // if the root is null then tree is
    // empty
    if (node === null) return null
    // if data to be delete is less than
    // roots data then move to left subtree
    else if (key < node.data) {
      node.left = this.removeNode(node.left, key)
      return node
    }

    // if data to be delete is greater than
    // roots data then move to right subtree
    else if (key > node.data) {
      node.right = this.removeNode(node.right, key)
      return node
    }

    // if data is similar to the root's data
    // then delete this node
    else {
      // deleting node with no children
      if (node.left === null && node.right === null) {
        node = null
        return node
      }

      // deleting node with one children
      if (node.left === null) {
        node = node.right
        return node
      } else if (node.right === null) {
        node = node.left
        return node
      }

      // Deleting node with two children
      // minimum node of the right subtree
      // is stored in aux
      var aux = this.findMinNode(node.right)
      node.data = aux.data

      node.right = this.removeNode(node.right, aux.data)
      return node
    }
  }

  inorder(node) {
    if (node !== null) {
      this.inorder(node.left)
      console.log(node.data)
      this.inorder(node.right)
    }
  }

  postorder(node) {
    if (node !== null) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data)
    }
  }

  // search for a node with given data
  search(node, data) {
    // if trees is empty return null
    if (node === null) return null
    // if data is less than node's data
    // move left
    else if (data < node.data) return this.search(node.left, data)
    // if data is less than node's data
    // move left
    else if (data > node.data) return this.search(node.right, data)
    // if data is equal to the node data
    // return node
    else return node
  }

  // finds the minimum node in tree
  // searching starts from given node
  findMinNode(node) {
    // if left of a node is null
    // then it must be minimum node
    if (node.left === null) return node
    else return this.findMinNode(node.left)
  }
  // Performs postorder traversal of a tree
  postorder(node) {
    if (node !== null) {
      this.postorder(node.left)
      this.postorder(node.right)
      console.log(node.data)
    }
  }

  // Performs preorder traversal of a tree
  preorder(node) {
    if (node !== null) {
      console.log(node.data)
      this.preorder(node.left)
      this.preorder(node.right)
    }
  }
}

// create an object for the BinarySearchTree
var BST = new BinarySearchTree()

// Inserting nodes to the BinarySearchTree
BST.insert(15)
BST.insert(25)
BST.insert(10)
BST.insert(7)
BST.insert(22)
BST.insert(17)
BST.insert(13)
BST.insert(5)
BST.insert(9)
BST.insert(27)

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 / \ /
// 5 9 17

var root = BST.getRootNode()

// prints 5 7 9 10 13 15 17 22 25 27
BST.inorder(root)

// Removing node with no children
BST.remove(5)

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 7 13 22 27
//	 \ /
//	 9 17

var root = BST.getRootNode()

// prints 7 9 10 13 15 17 22 25 27
BST.inorder(root)

// Removing node with one child
BST.remove(7)

//		 15
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27
//		 /
//		 17

var root = BST.getRootNode()

// prints 9 10 13 15 17 22 25 27
BST.inorder(root)

// Removing node with two children
BST.remove(15)

//		 17
//		 / \
//	 10 25
//	 / \ / \
//	 9 13 22 27

var root = BST.getRootNode()
console.log("inorder traversal")

// prints 9 10 13 17 22 25 27
BST.inorder(root)

console.log("postorder traversal")
BST.postorder(root)
console.log("preorder traversal")
BST.preorder(root)

// JavaScript Program to print binary tree in 2D

let COUNT = 10

// A binary tree node
// class Node {
//   constructor(data) {
//     this.data = data
//     this.left = null
//     this.right = null
//   }
// }

// Function to print binary tree in 2D
// It does reverse inorder traversal
function print2DUtil(root, space) {
  // Base case
  if (root == null) return

  // Increase distance between levels
  space += COUNT

  // Process right child first
  print2DUtil(root.right, space)

  // Print current node after space
  // count
  // document.write("<br>")
  console.log("--------------------------------")
  // for (let i = COUNT; i < space; i++) document.write(" ")
  // document.write(root.data + "\n")
  console.log(" ")
  console.log(root.data + "\n")
  // Process left child
  print2DUtil(root.left, space)
}

// Wrapper over print2DUtil()
function print2D(root) {
  // Pass initial space count as 0
  print2DUtil(root, 0)
}

// Driver code
let root2 = new Node(1)
root2.left = new Node(2)
root2.right = new Node(3)

root2.left.left = new Node(4)
root2.left.right = new Node(5)
root2.right.left = new Node(6)
root2.right.right = new Node(7)

root2.left.left.left = new Node(8)
root2.left.left.right = new Node(9)
root2.left.right.left = new Node(10)
root2.left.right.right = new Node(11)
root2.right.left.left = new Node(12)
root2.right.left.right = new Node(13)
root2.right.right.left = new Node(14)
root2.right.right.right = new Node(15)

print2D(root2)

// This code is contributed by patel2127
