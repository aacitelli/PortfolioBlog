---
title: 'Leetcode #760 - Find Anagram Mappings | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-24'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #760 - Find Anagram Mappings](https://leetcode.com/problems/find-anagram-mappings/)

## Solution

```python
class Solution(object):
    def anagramMappings(self, nums1, nums2):
        
        n2indices = {}
        
        # Make object tracking <number, {indices}> pairs for second one 
        for i in range(len(nums2)):
            num = nums2[i]
            if num in n2indices:
                n2indices[num].add(i)
            else:
                n2indices[num] = set([i])
                
        # Iterate through first one 
        output = []
        for num in nums1:
            indices_for_number = n2indices[num]
            first_index = n2indices[num].pop() # Also removes
            output.append(first_index)  
            
        return output 
```

Details: 
- **Summary:** Build a hash map of one of them to track indices that each number can be found at, then use that object to do `O(1)` lookups of where it is, deleting each once you find it to handle duplicates. 
- **Time Complexity:** `O(n)`. Building the object takes `O(n)` and iterating through the second is `O(n)`, but they are done sequentially, not one inside the other, so are added. 
- **Space Complexity:** `O(n)`. Hash map size scales by the size of each array. 
- **Statistics:** Beat 38.06% in Time Complexity, Beat 40.65% in Space Complexity.

## Potential Optimization
Think it's as efficient as you can get, at least in terms of overall time complexity. 

## Thought Process
Did this as part of a mock interview.

My first thought was the naive `O(n^2)` solution, where you'd essentially iterate through one array, then iterate through the other array to find the element in the first array. To handle duplicates, you can make an array full of boolean values, where True indicates you have already "used" that one. The iteration to find will skip it. 

However, I figured out pretty quickly a way to optimize that. A better, `O(n)` approach using what's essentially a hash map can be used. It's detailed more in-depth in the Solution section. 