---
title: 'Leetcode #1 - Two Sum | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-21'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1 - Two Sum](https://leetcode.com/problems/two-sum/)

## Solution

```python
class Solution(object):
    
    def twoSum(self, nums, target):
        
        number_indices = {}
        for i in range(len(nums)):
            num = nums[i]
            number_indices[num] = i
            
        for i in range(len(nums)):
            if (target - nums[i]) in number_indices and number_indices[target - nums[i]] != i:
                return [i, number_indices[target - nums[i]]]
            
        return -1 
```

Details: 
- **Summary:** Create a hash map from numbers to the indices they can be found. Then, iterate through again and look up whether the complement exists. If it does, that complement is our pair. 
- **Time Complexity:** `O(n)`
- **Space Complexity:** `O(n)`
- **Statistics:** Beat 20.33% in Time Complexity, Beat 13.74% in Space Complexity.

## Potential Optimization

## Thought Process
The naive approach is just two loops, easy enough. We can do better, though - see the solution. 