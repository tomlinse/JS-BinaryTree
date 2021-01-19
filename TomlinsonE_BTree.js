


/**
 * Ed Tomlinson
 * CSI 311 Assignment 5
 * Javascript Binary Tree
 */


// Create Node object, contains node constructor
class Node{
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

//Binary Search Tree
class BinarySearchTree{

    //Contructor for tree
    constructor() {
        this.root = null;
    }

    // Method to insert value into a tree
    insert(value)
    {
        //Creates new node of specified value
        var newNode = new Node(value);

        //Checks if tree is empty
        if(this.root === null)
            this.root = newNode;

        //If tree exists inserts node into existing tree
        else
            this.insertNode(this.root,newNode);
    }

    //Inserts node created in insert method into an existing tree
    insertNode(root, newNode){

        //If node value is less than root value put in left tree.
        if (newNode.value < root.value){
            if(root.left === null)
                root.left = newNode;
            else
                this.insertNode(root.left, newNode);
        }

        //If node is greater than root value put in right tree
        else {
            if(root.right === null)
                root.right = newNode;
            else
            this.insertNode(root.right, newNode);
        }
    }

    //Helper for removeNode method.
    remove(value){
        this.root = this.removeNode(this.root, value);
    }

    //Method removes a specified value from the tree
    removeNode(root, value){

        //Check if tree is empty
        if (root === null){
            return null;
        }

        //Check left side of tree for value if its less than the root value
        else if(value < root.value){
            root.left = this.removeNode(root.left, value);
            return root;
        }

        //Check right side of tree for value if its greater than the root value
        else if(value > root.value){
            root.right = this.removeNode(root.right, value);
            return root;
        }

        // When value is found.
        else{
            //If no children are present, set the node to null.
            if (root.left === null && root.right === null){
                root = null;
                return root;
            }

            //If only one child is present shift the other child up.
            if(root.left === null){
                root = root.right;
                return root;
            }

            else if(root.right === null) {
                root = root.left;
                return root;
            }

            //If both children exist find the successor node of the value, swap the value, and delete the successor node
            var minVal = this.minValue(root.right);
            root.value = minVal.value;

            root.right = this.removeNode(root.right, minVal.value);
        }
        return root;
    }

    //Method to find minimum value of root.
    minValue(root){
        if(root.left === null)
            return root;
        else
            return this.minValue(root.left);
    }

    //Returns the root of the tree
    getRoot(){
        return this.root;
    }

    //Prints the inorder traversal of the tree
    inorder(root){

        if(root != null){
            //Go down left side of tree
            this.inorder(root.left);

            //If no children found, print node value and "(nil, nil)"
            if(!root.left && !root.right) {
                console.log(root.value + " (nil, nil)");
            }

            //If one child is found, print node value, and the value of the child.
            else if(!root.left && root.right) {
                console.log(root.value + " (nil, " + root.right.value + ")");
            }
            else if(root.left && !root.right) {
                console.log(root.value + " (" + root.left.value + ", nil)");
            }

            //If both children are present print node value and (left child value, right child value).
            else {
                console.log(root.value + " (" + root.left.value + "," + root.right.value + ")");
            }

            //Check right side of tree.
            this.inorder(root.right);
        }
    }
}

var bst = new BinarySearchTree();//Create new tree

var i = 0;//Integer used for counting
var nodeArray = [];//Array to hold all the values.
var nodeValue = 0;//Variable to hold the value of a node

//Insert 20 random values into tree.
while (i < 20) {
    nodeValue = Math.floor((Math.random()*100)+1);//Create random value between 1 and 100.
    bst.insert(nodeValue);//Insert value into BST.
    nodeArray.push(nodeValue);//Push value onto array.
    i++;
}

var root = bst.getRoot();//Create variable to hold root node

console.log("Node(LeftChild, RightChild)");//Prints format of tree

bst.inorder(root);//Prints the Binary search tree
console.log("Root value is: " + bst.getRoot().value);//Prints the root value of the tree
console.log("\rTree has " + nodeArray.length + " nodes");//Prints how many nodes are in the tree

console.log("\r");

bst.remove(nodeArray[5]);//Remove the fifth node from the BST.
nodeArray.splice(5,1);//Remove the value from the array

root = bst.getRoot();
bst.inorder(root);//Print out the new tree.
console.log("Root value is: " + bst.getRoot().value);
console.log("\rTree has " + nodeArray.length + " nodes");

console.log("\r");

//Insert new node into the BST
nodeValue = Math.floor((Math.random()*100)+1);
bst.insert(nodeValue);
nodeArray.push(nodeValue);

//Print out new BST.
root = bst.getRoot();
bst.inorder(root);
console.log("Root value is: " + bst.getRoot().value);
console.log("\rTree has " + nodeArray.length + " nodes");


