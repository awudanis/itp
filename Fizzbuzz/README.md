# FizzBuzz


### What I did

I created a forloop to repeat all the actions until the number reached 100 with the statement `for (let num = 1; num <= 100; num++) {}`. Then in the loop, I want it to evaluate every time if the number is divisible by 5, or 3, or both. That way I can replace certain numbers with the word fizz/buzz. Then I wrote the 3 conditions: 

`if (num % 3 === 0 && num % 5 === 0) {console.log ("FizzBuzz");}`

`else if (num % 5 === 0){console.log ("Buzz");}`

`else if (num % 3 === 0) {console.log("Fizz");}`

The first one asks if the number is divisible by 3 and 5, if so, print FizzBuzz. The second asks if the number is divisible by 5, if so, print Buzz. The third asks if the number is divisible by 3, if so, print Fizz. Then I want it to print just the number when the number is not divisible by either:

`else {console.log(num);}`

### Debugging

This project was pretty clear for me but I did have certain times where the code didn't want to do what I wanted it to do. When I created this at first, I had the `if (num % 3 === 0 && num % 5 === 0) {console.log ("FizzBuzz");}` at the end of the loop instead of at the beginning, which meant that if a number was divisible by both 5 and 3, it would evaluate as only divisible by 5 and not that it was divisible by both. This meant that it completely skipped the 'check for both' if statement since it already evaluated as true when it checked if it was divisible by 5. I fixed this by moving that statement to the top so it would check for that before everything else. I also did this same project with a while loop in the beginning but ended up using a for loop because I found out that it is so much faster than doing it as a while loop.