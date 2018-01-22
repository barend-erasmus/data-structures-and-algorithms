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