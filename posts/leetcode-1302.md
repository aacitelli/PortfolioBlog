---
title: 'Leetcode #1302 - Deepest Leaves Sum | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-24'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1302 - Deepest Leaves Sum](https://leetcode.com/problems/deepest-leaves-sum/)

## Solution

```python
class Solution(object):
    def deepestLeavesSum(self, root):
        return self.helper(root, 0)[1]
    
    # Returns (deepestDepth, value)
    def helper(self, root, currentDepth):
        
        # If no children, means this is a leaf. Return a (current depth, value) tuple
        if root.left == None and root.right == None:
            return (currentDepth, root.val)
        
        # Otherwise, at least one child. Can probably condense these cases but this is readable and just as efficient.
        # If depths are not the same, only take deepest depth 
        if root.left != None and root.right == None:
            return self.helper(root.left, currentDepth + 1)
        if root.right != None and root.left == None:
            return self.helper(root.right, currentDepth + 1)
        else:
            output = 0
            left_depth, left_val = self.helper(root.left, currentDepth + 1)
            right_depth, right_val = self.helper(root.right, currentDepth + 1)
            if left_depth == right_depth:
                return (left_depth, left_val + right_val)
            elif left_depth > right_depth:
                return (left_depth, left_val)
            else:
                return (right_depth, right_val) 
```

Details: 
- **Summary:** Use a helper function to pass the current level we are on down; return a tuple of the maximum depth of children, and the value associated with it. If two children, return only the value of the deeper one. 
- **Time Complexity:** `O(n)`, where n is the number of nodes in the tree. 
- **Space Complexity:** `O(n)`, as we create one variable (output) and a finite set of parameters (~2) for each node in the tree.
- **Statistics:** Beat 36.02% in Time Complexity, Beat 74.95% in Space Complexity. 

## Potential Optimization
Think it's as efficient as you can get, at least in terms of overall time complexity. I don't see a way to check if a given branch of the tree has deeper children without examining every child in it.  

## Thought Process
Got this during a mock interview, so just recapping my overall thought process. 

This one didn't look too hard coming in - recursing on trees isn't difficult once you get the general paradigm down. My initial thoughs would just be this:

- **Base Case**: If no children (meaning it's a leaf), return the value at the current node. 
- **General Case**: Add result of recursive call on any children.

After writing this, I realized the question was asking for only children that *were on the very bottom level of the tree*, not *all children*. I made a helper function that passed the current "level" of the tree as a parameter, then whenever a given node had two children, it would either take the value returned by the "deeper" side, or add them together if they returned the same thing. The function would return the level of the deepest child. 