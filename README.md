# Data Structures and Algorithms

## Data Structures

### Linked Lists

* Dynamic data structure made up of nodes.
* Data is not stored in contiguous memory locations.
* Insertion and deletion of elements is easier.
* Can be used to implement abstract data types list, stakc and queue.
* Efficient random access is not possible.
* Implementation requires extra memory.

**Single Linked List**

A single linked list contains two parts:

* Info
* Link

`Info` is the data and `Link` is a reference to the next node.

**Double Linked List**

A double linked list contains three parts:

* Info
* Link to previous node.
* Link to next node.

Advantages over single linked list:

* Can be travesed in bith foward and backward directions.
* Implementation of some operations is easier; insertion, deletion can be done with single reference.

Disadvantages over a single linked list:

* Extra space is required for storing previous link.
* While inserting and deleting, some extra steps are required for maintaining the previous link.

**Circular Linked List**

Uses:

* Implementation of a queue.

**Trees**

* Non linear data structures.
* A tree sturcture represents hierarchical relationship among its elements.

A `node` is a element of a tree.
A `edge` is line connection the nodes.
A `parent node` is the immediate predecessor of a node.
A `child node` is the immediate successor of a node.
A `root node` designated node that does not have any parent.
A `leaf node` is a node that does not have any child.
The `level` is the distance of that node form the root.
The `height` is the total number of levels in a tree.
`Siblings` are two or more nodes which has the same parent.
The `degree` is the number of subtrees or children of a node.

**Binary Trees**

A binary tree is a finite set of nodes that is:

* either empty or
* consists of a distinguished node known as root and remaining nodes are partition into two disjoint sets T1 and T2 and both of then are binary tree. T1 is called left subtree and T2 is called right subtree.

| General Tree | Binary Tree |
| ------------ | ----------- |
| A general tree is a data structure in that each node can have infinite number of children. | A Binary tree is a data structure in that each node has at most two nodes left and right.|
| A General tree can’t be empty. | 	A Binary tree can be empty. |
| There is no limit on the degree of node in a general tree. | Nodes in a binary tree cannot have more than degree 2. |
| Subtree of general tree are not ordered. | Subtree of binary tree are ordered. |
| In general tree, root have in-degree 0 and maximum out-degree n. | In binary tree, root have in-degree 0 and maximum out-degree 2. |
| In general tree, each node have in-degree one and maximum out-degree n. | In binary tree, each node have in-degree one and maximum out-degree 2. |

Binary tree can be represented in two ways.

* Sequential Representation
* Linked Representation

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems.

## Measuring the running time of an algorithm.

* Experimental / Empirical Method
* Analytical Method (Asymptotic analysis)

## Big O  Notation

### Definition

`f(n) is O(g(n))` if there exist constants `c` and `n0` such that

`f(n) < c g(n)` for all `n > n0`

Example 1:

```
f(n) = 5n + 4
g(n) = n

5n + 4 <= cn for all n >= n0

c = 6
n0 = 4

5n + 4 <= 6n for all n >= 4

5n + 4 is O(n)

``` 

Example 2:

```
f(n) = 3n ^ 2 + 4n + 7
g(n) = n ^ 2

c = 5
n0 = 6

3n ^ 2 + 4n + 7 <= 5n ^ 2 for all n >= 6

3n ^ 2 + 4n + 7 is O(n ^ 2)

``` 
### Common Asymptotic Functions

Ordered from slow to fast growing.

* 1
* log n
* n
* n log n
* n ^ 2
* n ^ k
* 2 ^ n
* k ^ n
* n!

These functions are used to specify a upper bound using g(n).

### Finding Big O

* Keep the fastest growing term and discard the lower terms and constants.
* Ignore coefficients.
* Base of logarithm is not important.

### Worst, Average and Best Case Analysis

* Worst Case
    * Maximum runinng time that an algorithm will take for input size.
    * Consider an input for which the algorithm takes the longest time.
    * Informative and is easily done.
* Best Case
    * Minimum running time that an algoritm will take for input size.
    * Consider an input for which the algorithm takes the shortest time.
    * Not very informative.
* Average Case
    * Average running time that an algoritm will take for input size.
    * Consider all possible inputs and compute an average.
    * Generally very difficult.

### Common Complexities

* O(1) -> Constant
* O(log n) -> Logarithmic
* O(n) -> Linear
* O(n log n) -> Linear logarithmic
* O(n ^ 2) -> Quadratic
* O(n ^ 3) -> Cubic
* O(n ^ k) -> Polynomial
* O(a ^ n) -> Exponential

## Recursion

### Tail Recursive Call

A tail recursive call is a recursive call executed as the last statement.

Example of tail recursive call:

```javascript
function print(n: number) {
    if (n == 0) {
        return;
    }

    console.log(n);
    print(n - 1); // Tail recursive call
}
```

Example of a non tail recursive call:

```javascript
function print(n: number) {
    if (n == 0) {
        return;
    }

    print(n - 1); // Not a tail recursive call
    console.log(n);
}
```

In methods that return a value, a tail recursive call is a recursive calls that appears in the return statement but is not part of an expression.

Example of tail recursive call:

```javascript
function gcd(a: number, b: number): number {
    if (b == 0) {
        return a;
    }

   return gcd(b, a % b); // Tail recursive call
}
```

Example of a non tail recursive call:

```javascript
function factorial(n: number): number {
    if (n === 0) {
        return 1;
    }

    return n * factorial(n - 1); // Not a tail recursive call
}
```

### Tail Recursive Method

A tail recursive method is a method where all recursive calls are tail recursive calls.

Example of tail recursive method:

```javascript
function binarySearch(arr: number[], item: number, low: number, high: number): number {
    let mid: number = 0;

    if (high < low) {
        return -1;
    }

    mid = (low + high) / 2;

    if (item > arr[mid]) {
        return binarySearch(arr, item, mid + 1, high); // Tail recursive call
    } else if (item < arr[mid]) {
        return binarySearch(arr, item, low, mid - 1); // Tail recursive call
    } else {
        return mid;
    }
}
```

In a tail recursive method, there is nothing to be done in the unwinding phase.

### Iteration vs. Recursion

| Iteration | Recursion |
| --------- | --------- |
| Repetition occurs when the block of code finishes or a continue statement is encountered. | Repetition occurs when the function calls itself. |
| Variables inside the loop are modified using update statement. | New values ae passed as parameters to the next recursive call. |
| There is a terminating condition and the loop proceeds in such a way that this condition becomes false at some point. | Recursive functions proceeds in such a way that we finally reach the base case. |
| No such time or memory overhead. | Pushing and poppoing activation records. |
| Iterative algorithms are harder to implement. | Simplify the code and make it compact. |