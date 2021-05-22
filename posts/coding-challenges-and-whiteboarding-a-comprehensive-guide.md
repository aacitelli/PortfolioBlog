---
title: 'Coding Challenges & Whiteboarding - A Comprehensive Guide'
author: 'Anden Acitelli'
date: '2021-05-22'
---

## Intro 
Writing code in an assessment environment is a source of anxiety for a lot of people. I've done more research into it than the average person, so I figured I'd summarize all the advice I've internalized up to this point. This guide is intended as a concise overview of my recommended strategies, both before and during the interview. 

## Before the Interview
Follow these steps:

1. Make sure you have Time/Space complexity down. You *need* to be able to program with that in mind. 
    - [I have a guide on it](/blog/time-and-space-complexity-a-review); there are lots of great guides out there on the internet as well.
2. Study your Data Structures & Algorithms. You don't need to be perfect, but you should understand the major ones and the general circumstances where you'd want to use them (i.e. use a set when order doesn't matter, )

## During the Interview
### Coding Challenges
For coding challenges, you want to submit something that works, then work on optimizing it. Something that works is generally prioritized over something super efficient, but with a lot of higher-tier companies especially you'll need to get them all working *and* have something pretty efficient to get through their screening rounds. 

My general process is the following:

1. Check all the questions and get a rough idea of how tough they all are.
    - Your exact process may vary, but I generally go easiest to hardest. 
2. Read the question carefully, check constraints, and figure out edge cases so they don't bite you later.  
3. Figure out an algorithm for it, conceptually; this first algorithm will likely be something naive, and that's fine.
4. Spend a bit of time thinking on optimization. If you think you'll be able to code something more efficient without the time sabotaging the rest of the challenge for you, do so. If you're stuck on the fence, I recommend implementing the naive algorithm, moving to the other ones, then coming back. 
5. Write the algorithm and debug until it works.
    - For test cases, use all the example ones, and then think of some of your own if the example ones don't cover certain circumstances. Your testing process is heavily dependent on how sure you are and on how much time you have left. 

After you get something working, here are the steps I recommend to optimize:
1. Look for duplicated or unnecessary work.
    - For instance, a key optimization to turning the Fibonacci sequence from something exponential to linear is implementing [memoization](https://en.wikipedia.org/wiki/Memoization), which is essentially caching the result of a specific `fibonnaci(n)` call.
2. Check to see if you can do any analysis at the beginning of the function that makes more algorithmically complex work later in the function easier.
    - If the overall function is `O(nlog(n))`, you can get away with sorting at the beginning, as sorting is `O(nlogn)` and won't change the overall time complexity.
    - You can often use things like hash maps or sets for this. Assembling them is generally roughly O(n). 
3. Check if you can use data structures to speed anything up.
    - Sometimes, putting your data in a heap at the beginning then pulling it out in a sorted manner can be more efficient than searching through your collection in the middle. Things like that present themselves more than you'd think.
    - Check out my [Data Structures Guide](/blog/data-structures-a-comprehensive-guide) for a good overview of the most prominent ones and the situations they really shine! 

### Whiteboarding
Whiteboarding borrows most of the same advice as Coding Challenges. However, one major difference - **you get to talk to the interviewer**. This is incredibly important. The interviewer is focused on your problem solving process and the ideas going through your head, *not* if you're able to remember some random fact that makes the problem super easy. They are looking to see that you can reason your way to a solution. 

This is huge for people that know their stuff or learned well from classes, but aren't great at actually writing the code. You can (and should) spend *much* more time in whiteboarding just talking through your process for thinking through an algorithm to implement. They will be much more sympathetic on someone that they know understands the concepts behind what they're writing and struggles with the code than someone that started coding right away and isn't really explaining their thoguth process. 