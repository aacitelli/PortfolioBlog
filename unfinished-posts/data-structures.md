---
title: 'Data Structures | The Python Guide'
author: 'Anden Acitelli'
date: '2021-05-24'
---

## Intro 
Also check out the complementary article ["Algorithms"](/blog/algorithms) article. 

The guide I wish I had when I started seriously preparing for computer science interviews. It's an amazing jump start. 

What this guide is: 
- Python-focused. Feel free to 
- 
- An overview of the most important 80% of stuff you might see in a
- Focused on complexities and best use cases

What this guide isn't: 
- Short; I wanted a comprehensive 
- Super in-depth; expect an overview of the theory, but not an in-depth explanations. 

It is Python-focused. You can apply it to any langauges It is *not* short; however, I've intended this to be fairly comprehensive, and razor-focused on what you need to know in order to interview successfully. 

## Data Structures
### Common Structures 
These comprise about 80% of what you'll see in interviews: 

1. Arrays
2. Stacks
3. Queues
4. Linked Lists (Singly, Doubly)
5. Trees
6. Graphs
7. Tries
8. Hash Tables (Objects)

## Arrays
Arrays are one of the main collections used to store data. They are **ordered** and **indexable**. 

Python's implementation is [lists](https://www.w3schools.com/python/python_lists.asp). Lists can have anything in them, and each unit of the list does *not* have to be the same data type.

### Important Functions
- **Indexing**: Get a single element via `arr[i]`. `O(1)` behind the scenes (just pointer math).  
- **Slicing**: Get a slice of elements via `arr[i]`. `O(<length of slice>)`, as every element in the slice is copied into a new slice. 
- **Insertion**: Insertion is [amortized](https://stackoverflow.com/questions/33044883/why-is-the-time-complexity-of-pythons-list-append-method-o1) `O(1)` via `list.append()`.
- **Deletion**: Deletion of a given element is `O(n)` via `list.delete()`, which searches for an element. If you want to remove the last element, `list.pop()` can be used, which is `O(n)`. 
- **Sorting**: A given list can be sorted via `list.sort()`, which sorts in-place. Insertion sort is used for small lengths (<= 64), and merge sort is used for everything else. You can assume sorting is `O(nlog(n))` in the general case. 

## Queues (FIFO)
Queues are a [first in, first out](https://en.wikipedia.org/wiki/FIFO_(computing_and_electronics)) data structure, meaning you can only interface with the last element of the array, and supporting the following general operations:
- "enqueue" (putting something into the back of the queue)
- "dequeue" (taking something from the front of the queue). 

Python also has lists act as queues, offering `push()` and `pop()` functions. 

### Important Functions
- **Push**: Pushing is amortized `O(1)` via `list.append()`. 
- **Popping**: Popping is `O(1)` via `list.pop()`. 

## Stacks (LIFO)

## Linked Lists

## Trees

## Graphs

## Tries

## Hash Tables (Objects)

## Sources
- [Time Complexity Wiki Page](https://wiki.python.org/moin/TimeComplexity#list)