# Additionless addition

## Description:

Create an addition function that does not utilize the `+` or `-` operators.

__Note__: You may not use the `+` and `-` operators within a subroutine, or use `eval` or `new Function`.


Kata taken from [here](http://www.codewars.com/kata/additionless-addition)

### Chosen Approach

For this challenge there are many different approaches out there. Some of the are very quick and smart 
way of dealing with the issue. On others approaches if you test some of them you may find many some issues. Like, for example, 
there's an approach that won't deliver the addition for big numbers. There's a case if you add a negative number you will get an small error yet imprecise result: `add(30, -1); //returns 29.0000004`. I simple wanted to take a different approach.

I chose to handle the numbers to add as binary and operate upon them using bit logic and binary operators, readable code, well named functions and variables. Enjoy!
