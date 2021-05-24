---
title: 'Leetcode #1314 - Matrix Block Sum | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-23'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1314 - Matrix Block Sum](https://leetcode.com/problems/matrix-block-sum/)

## Solution
I didn't actually program the solution for this one, but [this page covers the concept](https://www.geeksforgeeks.org/prefix-sum-array-implementation-applications-competitive-programming/). Here's an overview of it in my own words. 

The common solution entails something called `prefix sum` which basically entails precomputing a separate array, of the same size as the original, where each element is the sum of the array up to that point (top to bottom, left to right). Then, when you need to calculate the sum of a given cube, go row by row and subtract the value at the beginning of your range from the value at the end of your range; you know your range so summing each row becomes constant time. This reduces it to roughly `O(m x n)` (for iteration through `answer`) * O(`k`), rather than a k^2 term like you get with the naive solution. The initial loop sum through the array is `O(m x n)`, but is *added* to our term, so doesn't affect overall algorithmic complexity, as the overall algorithm's complexity becomes the dominant term.  

Here's my "Time Limit Exceeded" Brute Force approach, if you're curious or it helps you understand the problem better: 

```python
def matrixBlockSum(self, mat, k):
        
        answer = [[0 for col in range(len(mat[0]))] for row in range(len(mat))]
        
        # First round of iteration
        for i in range(len(answer)):
            for j in range(len(answer[0])):
                
                # Instead of iterating through and checking positions, we're basically given the condition
                # as the check 
                for r in range(max(0, i - k), min(i + k + 1, len(mat))):
                    for c in range(max(0, j - k), min(j + k + 1, len(mat[0]))):
                        answer[i][j] += mat[r][c]         
        
        return answer 
```

Details: 
- **Summary:** Iterate through each slot in `answer`. For each, iterate through its expected range, summing up.
- **Time Complexity:** `O(m x n x k^2)`. 
- **Space Complexity:** `O(m x n)`. 
- **Statistics:** Time Limit Exceeded.

## Thought Process
Initially, the wording is pretty confusing, so I read through it a few times. It's essentially asking you to output a matrix where each element is the sum of every block of the matrix where those conditions are true. 

The naive algorithm would be this:
1. Iterate through each space in the grid (i, j). For each:
    - Iterate through each space in the grid (r, c), checking if it passes the checks. If it does, add it. 

This would be `O(m x n)` for the original iteration, then `(2k)^2` for the iteration we do inside each elementmaking it `O((m x n) * 4k^2)` overall. This isn't great but isn't awful. 

You can probably optimize this by going backwards (checking the conditions first, then seeing where they would then be added, or something like that) but this question feels convoluted in the first place and thinking through that feels too complicated to reliably get done in an interview, so I decide to just get started on the naive way. 

After programming it the naive way with four loops, I realize you can do a little optimization because they essentially *give* you the bounds that will succeed the check, so you just turn it into a range (and do some bounds checking, which is all the `min()`, `max()`)

```python
def matrixBlockSum(self, mat, k):
        
        answer = [[0] * len(mat[0])] * len(mat)

        # First round of iteration
        for i in range(len(answer)):
            for j in range(len(answer[0])):
                
                # Instead of iterating through and checking positions, we're basically given the condition
                # as the check 
                for r in range(max(0, i - k), min(i + k + 1, len(mat))):
                    for c in range(max(0, j - k), min(j + k + 1, len(mat[0]))):
                        answer[i][j] += mat[r][c]           
        
        return answer 
```

However, just like the naive implementation, this does not give correct results. I've checked some output and I think the best way to debug is to try and calculate a given point in the matrix using my implementation. 

Turns out the line `answer = [[0] * len(mat[0])] * len(mat)` introduces aliasing across the rows - my issue was that I was basically adding to the same row each time, across different rows. Fixing that gives me the correct answer for the example test cases. 

However, as I expected, I get a "time limit exceeded" error for large test cases. I'm sure mine *works*, it just scales pretty poorly. I'm pretty sure the answer is going to be something that I just don't want to think through mathematically, but I'll follow my optimization process ([detailed here](/blog/coding-challenges-and-whiteboarding-a-comprehensive-guide)) and see if anything comes from it. 

First, unnecesssary work. Do we ever do the same calculation twice? Suppose we're at [0, 0] with a k-value/range of 50. We're going to add the [25, 25] value to that one. We are going to add it to the [0, 1] value as well, because the range is big enough. This gets me thinking - is it more efficient to instead iterate through (r, c) values? No, we don't have any empty loops where we do nothing, so I don't think that would help. 

I wasn't feeling a ton of math so I ended up just looking it up; you can view it in the "Solution" part of this page. 