# Data Structures and Algorithms

## Algorithms

An algorithm is an unambiguous specification of how to solve a class of problems.

## Measuring the running time of an algorithm.

* Experimental / Empirical Method
* Analytical Method (Asymptotic analysis)

### Big O  Notation

#### Definition

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
#### Common Asymptotic Functions

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

#### Finding Big O

* Keep the fastest growing term and discard the lower terms and constants.
* Ignore coefficients.
* Base of logarithm is not important.

#### Worst, Average and Best Case Analysis

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