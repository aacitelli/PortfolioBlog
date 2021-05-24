---
title: 'Leetcode #1345 - Jump Game IV | Python Solution & Walkthrough'
author: 'Anden Acitelli'
date: '2021-05-24'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1345 - Jump Game IV](https://leetcode.com/problems/jump-game-iv/)

## Solution

```python

```

Details: 
- **Summary:** 
- **Time Complexity:** 
- **Space Complexity:** 
- **Statistics:** Beat <> in Time Complexity, Beat <> in Space Complexity.

## Potential Optimization

## Thought Process
First, I make sure I understand the problem. My understanding is that you're given an array, and you have a position in that array. You start at index 0, and your goal is to get to the last index. Your options to move are:

1. Move Left
2. Move Right
3. Move to any spot such that the value at the current spot is the same as the value at that spot. 

A naive approach would be to essentially recurse every single one of the three options. This would quickly lead to ~exponential runtime and would actually introduce infinite loops. 

To remove those infinite loops, we can essentially do something called **dynamic programming** where we track the minimum number of steps to get to the end from any given point, and cut off a given recursion chain if our steps to get to that point were actually more. I didn't explain that great, but that's the overall idea - cut off recursion if we get to a point where another recursion chain already got to that point with equal or better performance. 

As an aside, we also have to figure out the best way to track our movement options when exercising the third movement option. I think the cleanest way to track our movement options for each one is to first assemble a list of sets, where each index of the list corresponds to the same index of the input list, and the set is all indices we can get to from that spot. Assembling this the naive way seems `O(n^2)` to me - just iterate through the rest of the list for each one. As this precomputation will be *added* to the runtime from the rest of the algorithm, and I'm expecting the runtime of the rest to be less efficient than that, this is essentially free work for us. 

I feel like I need to flesh out the actual recursive part, still. I think what I need to do is go from the *end* spot and essentially do it backwards. I can do this because the movement options all seem to be commutative (i.e. I can move left *and* right, and the equality part can be done both ways). This is how I get a *minimum* amount of effort to get to this point. I'll have a function that essentially takes in the array, the current index, and the number of steps it took to get to this point. I'll also have an array that tracks the minimum amount of steps to get to the given point, which is what I compare against. 

I think I have a good enough idea of what's going on at this point to try and get something together, so I start writing everything out. Here's what I have before running any test cases:

```python
class Solution(object):
    
    def minJumps(self, arr):
        
        # This array tracks the minimum effort found to get from a given spot to the end
        self.min_efforts = [(5 * 10**4 + 1) for i in range(len(arr))]

        # Form array of movement options 
        movement_options = self.calc_movement_options(arr)

        # Call recursive method on last index to calculate effort from each point of the array 
        self.recurse_from_point(arr, movement_options, len(arr) - 1, 0)

        # Our answer is the first index of the previous returned array 
        return self.min_efforts[0]

    # For each index, calculate whether we can move to each of the other movement options
    def calc_movement_options(self, arr):
        output = []
        for i in range(len(arr)):
            output.append(set())
            if i > 0:
                output[i].add(i - 1)
            if i < len(arr) - 1:
                output[i].add(i + 1)
            
            # Iterate through array to check for equal numbers (skipping current)
            for j in range(len(arr)):
                if abs(i - j) <= 1: # Skip current, previous, next
                    continue 
                if arr[i] == arr[j]:
                    output[i].add(j)

        return output                     
    
    def recurse_from_point(self, arr, movement_options, i, effort):

        # Check that this is the most efficient way to get to the specified point
        if effort <= self.min_efforts[i]:
            self.min_efforts[i] = effort 
        else:
            return # If not most efficient, stop recursion 

        # If it is, recurse on all (in array bounds), adding one to the effort 
        # Our movement_options array already includes left/right, so we can lump this all into one loop 
        for option in movement_options[i]:
            self.recurse_from_point(arr, movement_options, option, effort + 1)
```

This actually worked for the example test case right off the bat, which I was *shocked* by. Went *right* to my ego. It also worked for the other example test cases. I take this as proof that the algorithm works; I'm a little concerned about runtime but I think it's moderately efficient and this is just practice for me so I figure I might as well just submit it and see how it does. 

It *did* give me time limit exceeded on submitting, unfortunately. Just an absolutely massive array. Time to figure out if I can make anything more efficient! 

- I know my first part is O(n^2). I can definitely make this more efficient, though not by a full level of complexity.
    - When adding the one to the right, I can add the current one to the movement options for the one to the right, then ignore the left check. 
    - When adding a pair of equal numbers, I can make it so you only have to iterate over elements *after* the current one by adding it to both movement options. 
    - I can also look into creating movement "sets". If a given array has like seven "7"s, I can make a pool for them with one iteration rather than requiring a search. I think this is actually O(n) which is much better than the O(n) I'm working with. I go ahead and implement this using a dictionary, with the number as the key and a set of indices having that number as the value. 

This change worked on all the example test cases, but still gives me a time limit error. O(n) is the most efficient I can get for the introductory loop, so let's examine the main part of the algorithm. 

- The second part recurses on itself, but would cut itself off immediately, so that's not an issue.
- Is there any case where I wouldn't want to jump to the earliest possible instance of a given number? Yes, I think there would be; maybe a value of that number in the middle has the same value as the 0th index or something. 
    - I don't think I can cut any of the actual calls out. While jumps are limited to that same set, moving one opens up new jumps, and later ones may have better jumps. 
- Can I somehow detect if a given solution for getting to the 0th would be most efficient?
- Maybe mine is infinite looping? 
    - Only place it could theoretically infinite loop is getting called on itself (either directly or passing through another one), but that would always have greater effort and wouldn't continue. 
    - I also probably would have run into an infinite loop in one of the other example test cases. 
- Maybe negative numbers are messing with it?
    - No, this isn't it; I never compare numbers except for checking equality. 
- Maybe I can prioritize pathways that lead to more optimal efforts? 
    - Honestly, I think this is it. The current implementation will go left all the way to the end, *then* look into jumps. I'll test out putting the jump code first, because I think it leads to something more optimal more frequently. 
    - This would calculate the entire effect of jumps before trying to do any shifting, which is actually *really* good. 
    - This still gives me "Time Limit Exceeded" but I think it's an improvement. 
- Maybe I can keep the list of indices in numerical order so that the earliest indices are tried first?
    - The initial optimization is cheap, so I implemented it. 
    - While I consider this an improvement, still gives me "Time Limit Exceeded". 
- My function can continue after it hits i == 0. It shouldn't, because going anywhere from i == 0 will be more expensive than the path we took to get to i == 0.
    - Time Limit Exceeded. Still an improvement, though, I think.
    - I also continued this logic to say that i == 1 and i == 2 should always go left, as going anywhere else is >= 2 steps. Still a time limit issue, though. Wasn't expecting edge cases to fix anything.  
- I feel like I can do something more efficient with the list of indices to recurse on. Maybe I can analyze which is most efficient?

I honestly feel like I'm at the limits of my algorithm. I've done a ton of optimization within the complexity and it still isn't enough. I think I have to look at things entirely differently or use a trick that I don't know. 

Alternate approaches I can think of:
- Figure out the jumps that are most efficient when it comes to cost to get to them vs. how much they cost. 

Gave up and looked at the solution. I think the optimization I detail here is really useful, though. 