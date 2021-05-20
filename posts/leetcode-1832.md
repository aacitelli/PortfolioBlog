---
title: 'Leetcode #1832 - Check if the Sentence Is Pangram | Python Code, Thought Process, Explanation'
author: 'Anden Acitelli'
date: '2021-05-19'
---

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution that doesn't need to be perfectly optimal. 

## Background

Leetcode Page: [Leetcode #1832 - Check if the Sentence Is Pangram](https://leetcode.com/problems/check-if-the-sentence-is-pangram/)

Given a sentence, return True if every letter in the English language can be found in it.

## Solution
```python
def checkIfPangram(self, sentence):        
    alphabetMap = {
        "a": False, 
        "b": False, 
        "c": False, 
        "d": False, 
        "e": False, 
        "f": False, 
        "g": False, 
        "h": False, 
        "i": False, 
        "j": False, 
        "k": False, 
        "l": False, 
        "m": False, 
        "n": False, 
        "o": False, 
        "p": False, 
        "q": False, 
        "r": False, 
        "s": False, 
        "t": False, 
        "u": False, 
        "v": False, 
        "w": False, 
        "x": False, 
        "y": False, 
        "z": False, 
    }
    
    for letter in sentence:
        alphabetMap[letter] = True
        
    for key, value in alphabetMap.items():
        if value == False:
            return False
    return True 
```

**Summary:** Make a map to track whether each letter has been found, then iterate through the sentence, setting each one to indicate it was found. If any are still False at the end, return False. 

**Time Complexity:** O(n) - simplified from O(n + 26), as we iterate once through the sentence and once through a dictionary of size 26. You can eliminate the +26 by keeping a set of all the letters of the alphabet, removing them when they're found, then returning True if the set is empty at the end, which is presumably a constant time operation. 

**Space Complexity:** O(1), as we simply make a 26-size map, which is constant size.

## Thought Process
Seems pretty easy surface-level. Some form of iterating through and just modifying a list should be fine.

My initial thought is to make a map of the alphabet, something like this, where you track whether you found it yet:

```python
{
    "a": False, 
    "b": False, 
    ...
}
```

After iterating through and checking every letter, you then iterate through this alphabet map, returning False if you find even a single False, and returning True if they were all true. I programmed this and it ended up being pretty easy; see the "solution" section. 

Probably would have been cleaner to just make a set of the alphabet letters and remove each letter from the set as it was found, then return True if the set was empty at the end. 

## Check Me Out
Thanks for reading! Click [here](/blog) for a list of everything I've written. 