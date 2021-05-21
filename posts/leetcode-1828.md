---
title: 'Leetcode #1828 - Queries on Number of Points Inside a Circle | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-21'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1725 - Queries on Number of Points Inside a Circle](https://leetcode.com/problems/queries-on-number-of-points-inside-a-circle/)

## Solution

```python
def countPoints(self, points, queries):
        """
        :type points: List[List[int]]
        :type queries: List[List[int]]
        :rtype: List[int]
        """
        
        # For each circle, loop through each point and calculate queries[j]
        answer = []
        for query in queries:
            
            # Check each point 
            points_in_this_circle = 0
            for point in points:
                if self.distance(point[0], point[1], query[0], query[1]) <= query[2]:
                    points_in_this_circle += 1
                    
            # Append for this circle to output array
            answer.append(points_in_this_circle)
            
        return answer
                
    def distance(self, x1, y1, x2, y2):
        return sqrt((x2 - x1)**2 + (y2 - y1)**2)
```

Details: 
- **Summary:** Naive algorithm. Iterate through each circle, then iterate through each point for that given circle.
- **Time Complexity:** `O(n * m)`, where `n` is the number of queries and `m` is the number of points. 
- **Space Complexity:** `O(n)`, where `n` is the number of queries.
- **Statistics:** Beat 15.48% in Time Complexity, Beat 14.97% in Space Complexity.

## Potential Optimization
My steps for optimization: 

1. **Does it seem theoretically possible to make time complexity lower?**: Oftentimes it's physically impossible to, especially if making it quicker means you can't even look at all the elements. 
    - I don't think we're theoretically bounded by the current complexity, so I'll look at ways to improve it. 
2. **Duplicate or Unnecessary Work**: Self-explanatory. 
    - We could probably scan for duplicate circles or duplicate points first, which would simply add n/m to our complexity, which wouldn't change it overall.
3. **Time-Space Tradeoff**: Can we save any data to certain data structures in order to decrease time complexity? 

After struggling for a bit, I looked this up and it doesn't look like there's a way to do this that entirely changes the time complexity. You can do some small things to better it within the same time complexity, though. At least this serves as a good guide for how to approach them! 

## Thought Process
My first thought is the "naive" algorithm - just iterate through each query and check each point for proximity to that circle. I program this, and it works fine. 