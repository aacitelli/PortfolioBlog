---
title: 'Leetcode #670 - Maximum Swap | Python Code, Thought Process, Explanation'
author: 'Anden Acitelli'
date: '2021-05-19'
---

Gave up on this one about 90% through, just started getting on my nerves after like half an hour. 

## Intro
Hey! The goal of my Leetcode series, rather than to just present the optimal solution, is to give you some background on my thought process, with the goal of making you better at thinking through fresh problems you've never seen before and coming up with a fairly good solution even if it isn't perfectly optimal. 

## Background

Leetcode Page: [Leetcode #670 - Maximum Swap](https://leetcode.com/problems/maximum-swap/)

Given an integer `num`, you may swap two digits at most once to get the maximum valued number. Return it. 

## Solution
If you just want to look at the solution, here you go! 

**Complexity:** Roughly O(n), where n is the number of digits in the number.
**Space Complexity**: O(n), as we need space to turn it into a string. Probably a way to do this in-place that works better, but I'm not too bothered. 

## Thought Process
Initially looking at this problem, I'd think that we'd always want to swap the number in the largest place with the largest number. For instance, given the number `1234`, we'd want to swap the `1` with something else. 

Let's first try and figure out if that falls apart anywhere. Here's some examples:
- `670` -> Swap the 6 and the 7, giving us 760. 
- `2345` -> Swap the 5 and the 2, giving us 5342.  
- `2534` -> Swap the 2 and the 5, giving us 5234. 

I just can't see a case where making the largest place value the largest number possible *doesn't* result in the largest number, because swapping anything else always results in a smaller number than the maximum. However, an interesting thought happens here. What happens in cases where there are two or more of the maximum number? Well, then we'd simply swap the place that comes latest in the number. For example, with `2773` we'd swap such that it becomes `7723`. 

I also have to consider whether or not the swap is *required*. This would happen in cases where the maximum value is already there (and the case where every other number was a zero, but that will never happen. Thankfully, it's not required that you swap, so we'd just return the current number. 

Now, how will we actually go about swapping the numbers? My first intuition would be to just turn them into strings and use string slicing to do that. String slicing takes time proportional to the amount of characters in the slice (as it's copied) so this will be `O(<length of the number>)`. I can't think of an easy way to do that with manipulating the numbers themselves, and this isn't too algorithmically complex in the first place (essentially `O(n)`) so I think I'm fine with just settling with my answer and getting to work. 

I first comment out the overall steps for this: 
```python
# 1. Figure out the last index of the maximum number, which is an O(n) loop.   
# 2. Swap the maximum value with the maximum place value, if that index isn't 0. 
# 3. Return the value. 
```

I then get to work. I end up with the following:

```python
def maximumSwap(self, num):
        """
        :type num: int
        :rtype: int
        """
        num_str = str(num)
        
        # 1. Figure out the last index of the maximum number, which is an O(n) loop.
        max_idx = 0
        max_val = num_str[0]
        
        for i in range(len(num_str)):
            if int(num_str[i]) >= max_val:
                max_idx = i
                max_val = num_str[i]
        
        # 2. Swap the maximum value with the maximum place value, if that index isn't 0. 
        if max_idx != 0:
            num_str = str(max_val) + num_str[1:max_idx] + num_str[0] + num_str[max_idx + 1:]
        
        # 3. Return the value. 
        return int(num_str)
```

However, weirdly enough, this isn't actually passing the condition in the loop. This ended up being an issue with the `max_val = num_str[i]` line, as I'm assigning it the character instead of the integer. This checks out on the basic test case I'm given. 

I submit, but get an error on the test case `98368`. I'm expected to output `98863`, which makes sense; I realize I don't account for cases where the first is the maximum value, but swapping other ones can have positive influence. I realize now that, if the first ends up being the maximum, I now essentially have to recurse on the second value and do the same kind of thing, which would come out to O(n^2). While this isn't great, it's still decent, and I want to get a solution down, so I end up implementing it. 

## Check Me Out
Thanks for reading! Click [here](/blog) for a list of everything I've written. 