---
title: 'Leetcode #200 - Number of Islands | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-20'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #200 - Number of Islands](https://leetcode.com/problems/number-of-islands/)

## Solution

```python
# After we start exploration from a given island, we add it to this
    # If recursing from a new point ever goes to something that's already in there, we know that that new one we
    # started recursing at is part of a preexisting island and we shouldn't treat it as a new island 
    found = set()
    found_this_iteration = set()
    
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        
        self.found = set()
        self.found_this_iteration = set()
        
        # One approach is to modify the grid so that there's zeroes along the rim, but it's doable 
        # and more optimal to just add edge cases for the "edge" logic in the other function  
        num_islands = 0
        for x in range(len(grid[0])):
            for y in range(len(grid)):
                                
                # Check if current island is in a new island
                if grid[y][x] == "1" and self.isNewIsland(x, y, grid):
                    num_islands += 1 
                    
                # Shift tiles found this iteration to the overall record of things that are in an island 
                for elem in self.found_this_iteration:
                    self.found.add(elem)
                self.found_this_iteration = set()
            
        return num_islands
        
    # Returns False if we find an already existing land block, True otherwise
    def isNewIsland(self, x, y, grid):
        
        # Check all four corners (respecting edge cases); recurse on anything that's a 1
        # If the current x/y is already in `found`, return False
        # If any of them return `False`, whole function returns False
        # Only return True if none of the paths led to something already part of an Island 

        # If we already covered this one in the current recursive cycle, ignore it
        if (x, y) in self.found_this_iteration:
            return True 
        
        # If this one belongs to a preexisting island, return False 
        if (x, y) in self.found:
            return False 
        
        # Otherwise, this belongs to the current recursion chain's island
        self.found_this_iteration.add((x, y))
        
        # Left
        if x > 0:
            if grid[y][x - 1] == "1" and not self.isNewIsland(x - 1, y, grid):
                return False
        
        # Right
        if x < len(grid[0]) - 1:
             if grid[y][x + 1] == "1" and not self.isNewIsland(x + 1, y, grid):
                return False
        
        # Top
        if y > 0:
             if grid[y - 1][x] == "1" and not self.isNewIsland(x, y - 1, grid):
                return False 
        
        # Bottom
        if y < len(grid) - 1:
             if grid[y + 1][x] == "1" and not self.isNewIsland(x, y + 1, grid):
                return False
        
        return True 
```

**Summary:** Essentially a DFS. Start recursion on each 1 in the array. Track which islands we've seen during the current "recursion chain" and ignore them if we find them again. If, during a recursion chain, we find one we've found in a previous recursion chain, we are part of the same chain as that one.  

**Time Complexity:** `O(n x m)`, where n is width and m is height. 

**Space Complexity:** O(n x m), as we need to make sets that are of magnitude <number of elements in the grid>. 

**Statistics**: Faster than 6.70%, Memory Usage less than 6.27%. 

**Future Optimization**: Honestly not sure. There's some redundancy in there, and it's probably possible to not keep these gigantic sets every time. 

## Thought Process
After reading the question a few times, the first solution that pops into my head is something akin to graph traversal. You iterate through each part of the grid, then essentially recurse on every neighbor. You count this as on a new island if none of the other ones you find are already on an island. The important thing is that you have to keep a cache of which islands you've already started the recursion on, as if you find an island that was already the same, that means the one you just started on is part of a different, already-found island. 

I outlined the functions (one is the start, one is the recursive part) and it looks something like this: 

```python
# After we start exploration from a given island, we add it to this
    # If recursing from a new point ever goes to something that's already in there, we know that that new one we
    # started recursing at is part of a preexisting island and we shouldn't treat it as a new island 
    found = set()
    
    def numIslands(self, grid):
        """
        :type grid: List[List[str]]
        :rtype: int
        """
        
        # One approach is to modify the grid so that there's zeroes along the rim, but it's doable 
        # and more optimal to just add edge cases for the "edge" logic in the other function  
        num_islands = 0
        for x in range(len(grid)):
            for y in range(len(grid[0])):
                if self.isNewIsland(x, y, grid):
                    num_islands += 1 
                found.add((x, y))
            
        return num_islands
        
    # Returns False if we find an already existing land block, True otherwise
    def isNewIsland(x, y, grid):
        
        # Check all four corners (respecting edge cases); recurse on anything that's a 1
        # If the current x/y is already in `found`, return False
        # If any of them return `False`, whole function returns False
        # Only return True if none of the paths led to something already part of an Island 
        
        # Left
        if x > 0:
            if not self.isNewIsland(x - 1, y, grid):
                return False
        
        # Right
        if x < len(grid) - 1:
             if not self.isNewIsland(x + 1, y, grid):
                return False
        
        # Top
        if y > 0:
             if not self.isNewIsland(x, y - 1, grid):
                return False 
        
        # Bottom
        if y <= len(grid[0]) - 1:
             if not self.isNewIsland(x, y + 1, grid):
                return False
        
        return True 
```

Time to try it out and see how it does! 

Fixes: 

1. Syntax Error: Adding `self` as an argument to `isNewIsland()` 
2. Max Recursion Depth Exceeded: I realize quickly that the function will just alternate between two land segments. With recursion, you have to consciously make the problem a little smaller each call, but I never do that. Potential fixes:
    - Don't call it on the direction that it "came from". This can still result in square-based loops, but it's a thought. 
    - Adjust `found` inside the loop itself. I think this is the best approach; I figure out I'll have to do the "does this exist checK" at the beginning of the function, then add this. 
3. Not Giving Any Results
    - To test this, I add print statements for what "cell" it's starting on and to view what "found" looks like after each call 
    - After a bit of debugging, I figure out that, even after I set found, it can go in a circle and essentially just say "yeah, this is in the same island as itself, so it's not a new island". A clean way to do this would be to keep a set of land covered *during this recursive cycle* and only add that set to `found` after we're entirely done recursing. We then only check for the island thing in `found` so that we aren't checking against the current island. 

After these fixes, it passes the basic test case. I test it with the other sample test cases provided, and I get a pretty generic error. I return 2 islands, when the right result is 3. My thoughts when debugging: 

1. I see from my output that I detected the very last island (3, 3) as a new island. This seems a little happenstance, so I reexamine how I handle edge cases. 
    - I realize pretty quickly that I mixed up rows and columns, meaning it would mess up on anything that didn't have the same number of rows and columns. 
    - Switching that instead gives me a "list index out of range" question, so I double-check that len(grid) and len(grid[0]) are giving me what they should; this would be the height and width of the grid, respectively. 
    - I realize the error is that I have x and y switched. Oops. 

2. That doesn't fix everything; the following array gives me 2 as an answer rather than 3: 
   
```python
[ 1 1 0 0 0
1 1 0 0 0
0 0 1 0 0
0 0 0 1 1]
```
- It seems to be completely skipping the top-left island, for some reason. 
- The issue ended up being something specific to Leetcode. They were feeding in several consecutive inputs, and my class variables weren't being reset, so it was starting out at (0, 3) because everything before was already in `self.found`. 

Upon submitting it, Leetcode gives me a "Time Limit Exceeded" when it gives me an input of a bunch of zeroes on a row, then a bunch of ones in a row, then keeps going for a *long* time. I take this as tacit proof that mine works, just isn't as efficient as they'd like it to be. Guess it's time to figure out if I can optimize! It *should* currently just be one iteration per tile, which I'd imagine is as efficient as you can fundamentally get, so I'm a little puzzled. 

Speed-up attempts:

- A few times when I check for a given coordinate more than once in `self.found`
- The `self.found_this_iteration` check is likely much quicker than the `self.found` check, so I switched the order 

Those fixes were enough to push this to an Accepted answer. 