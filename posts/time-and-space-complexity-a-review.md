---
title: 'Time & Space Complexity | A Review'
author: 'Anden Acitelli'
date: '2021-05-21'
---

## Intro 
Time Complexity is possibly *the* most important concept to understand when it comes to coding challenges and technical interviews. Interviewers want to know that you approach algorithm design with a focus on efficiency. 

This article is intended as a refresher on the concepts; it doesn't go extremely in-depth, but should get you feeling 90% ready for interviews. Lets get started! 

## Time Complexity
### Overview 
Time Complexity is a way to describe how fast an algorithm runs. We do this by "bounding" the runtime by a given amount. We generally bound by magnitudes of certain variables in the function (Ex: length of an array, length/width of a grid, length of an input string, etc.). Always make sure you state what the variables you are using *mean* - this will become clearer shortly. 

We have a few ways to bound the runtime of algorithms: 

1. Ω is a **lower bound**. If your algorithm is in Ω(n), that means the algorithm's runtime is *lower bounded* by Ω(n).
2. O is an **upper bound**. If your algorithm is in O(n^2), that means the algorithm's runtime is *upper bounded* by O(n).  
2. θ is a lower **and** upper bound. If your algorithm is in θ(n), that means the algorithm's runtime is *lower and upper bounded* by θ(n). This means it 

Note that Ω(n) (and every other given complexity through this article) is representative of a **set**. It is the set of *all* algorithms who have runtime that scale *as fast* or *faster* than an algorithm that scales linearly with n. 

**The industry commonly uses the term "Big O" AKA O(n-whatever) to mean the same thing as Big Theta here**. They want to hear something that is both a lower and upper bound. I'll ignore Sigma and Theta from here on out. 

### Common Runtimes
Various common runtimes, accompanied by common algorithms that have those runtimes: 

- **O(1)**: Constant-time, meaning it doesn't scale with the size of any input.
    - Math Operations
    - Array Accesses (i.e. `arr[i]`). (More Detail: These are just pointer math: `address of beginning of array` + `i * size of each element in the array`.)
- **O(log(n))**: Scales logarithmically with the size of a given input of size n.
    - Binary Search. (Refresher: Given a sorted list, binary search keeps intelligently dividing the array in half until it finds a given element)
- **O(n)**: Scales linearly with the size of the input.
    - Iterating through basically anything of a given size `n`
- **O(nlog(n))**: Both linearly and logarithmically.
    - Efficient search algorithms like Merge Sort and Quick Sort. This means, if your algorithm is `O(nlogn)` or worse, sorting everything beforehand using basically any language's `sort()` implementation will effectively be free in terms of time complexity, which can often help simplify the rest of the function. 
- **O(n^2)**: Quadratically.
    - Often comes up when you have to compare every element of a collection with every other element of the collection.
- **O(2^N)**: Exponential.
    - Also comes up frequently with recursive stuff. *If you come up with this in an interview, they can almost always be optimized.*
- **O(n!)**: Factorial.
    - Often comes up with naive, non-optimized version of recursive stuff. *If you come up with this in an interview, they can almost always be optimized.*
    - The "easy" Fibbonaci Sequence implementation. Note that Fibbonaci can be made O(n) very easily by using [memoization](https://en.wikipedia.org/wiki/Memoization), which is essentially just caching already-calculated values. 

For more help with figuring out algorithmic complexity: 
- [My guide on Coding Challenges & Whiteboarding](/post/coding-challenges-a-comprehensive-guide)
- [This guide that looks pretty good](https://adrianmejia.com/how-to-find-time-complexity-of-an-algorithm-code-big-o-notation/)
- [This other guide that looks pretty good](https://medium.com/dataseries/how-to-calculate-time-complexity-with-big-o-notation-9afe33aa4c46)

### Math Simplification
A few important rules:

1. If anything's getting added, the dominant term wins.
    - `O(n + 23)` => `O(n)`
    - `O(n^3 + n^2 + 5n)` => `O(n^3)`
    - `O(n^2 + n^2 * log(n)) => `O(n^2 * log(n))
2. Multiplication does *not* follow the same rule, but you can take out anything that's a constant. 
    - `O(n * m)`, when n/m are both variables, *cannot* be simplified. 
    - `O(23n + 5)` => O(n)` 

## Space Complexity
### Overview
Space complexity is similar to time complexity, but measures how quickly the amount of memory a given algorithm will take scales. It's more rarely asked about, but many employers, especially prestigious ones, will ask for both space and time complexity. 

Space complexity *doesn't usually include the input*. Sometimes the term **auxilary space** is used to distinguish this - it refers to just new memory allocated by the function, including whatever it returns or outputs. 

Calculating this is usually pretty intuitive, so I won't go very in-depth. I usually just figure out what the greatest amount of stuff in memory at any given time will be and figure out what it scales by. 

More resources on space complexity: 
- [A good guide](https://www.faceprep.in/data-structures/space-complexity/)
- [Another good guide](https://www.studytonight.com/data-structures/space-complexity-of-algorithms), which looks at it in terms of actual memory. Interviewers are generally just curious by what magnitude it scales, but it's useful (and often mandatory) to know what's going on behind the scenes in things like loops. 