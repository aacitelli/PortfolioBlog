---
title: 'Leetcode #1725 - Number Of Rectangles That Can Form The Largest Square | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-21'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1725 - Number Of Rectangles That Can Form The Largest Square](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

Given a sentence, return True if every letter in the English language can be found in it.

## Solution

```python
def countGoodRectangles(self, rectangles):

        # Determine maximum rectangle size
        largest_size = -1 # Can make either first rectangle's size or a negative number
        for rectangle in rectangles:
            size = self.get_length_of_square(rectangle)
            if size > largest_size:
                largest_size = size 
        
        # Iterate through again and count all that have that size 
        num_largest = 0
        for rectangle in rectangles:
            if self.get_length_of_square(rectangle) == largest_size:
                num_largest += 1
        return num_largest
        
    # Returns the max square size of a given rectangle 
    def get_length_of_square(self, rectangle):
        return min(rectangle[0], rectangle[1])
```

Details: 
- **Summary:** Iterate through once to find largest square size, then iterate through again to count how many are that big.
- **Time Complexity:** O(n), where n is the size of the array. Simplified from O(n + n), as we iterate through the array twice. 
- **Space Complexity:** O(1), as we don't make any variables whose size scales with input size. 
- **Statistics:** Beat 18.70% in Time Complexity, Beat 35.50% in Space Complexity.

## Potential Optimization
Thinking about complexity, seems like you'd theoretically *need* to look at every rectangle at least once, so I highly doubt we can get lower than O(n), even with using more memory. Space complexity is also as good as you can get already. 

We can optimize a bit within O(n), though. You can do this in one iteration by keeping a count of the largest. If you find one larger than your current maximum size, this number becomes one. If you find one the same as your current maximum size, it stays zero. 

You can also keep an array that stores each rectangle's computed value to replace duplicate calls to the function, but that increases the space complexity and really just doesn't seem worth it when the function is very quick in the first place. 

## Thought Process
Simple enough that the algorithm was intuitive to think up. The helper function made it easier to get right first time through. 