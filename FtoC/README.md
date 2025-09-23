# FtoC Assignment

### What I did

For this assignment I first created the variable f and set it to 99 with the line `const f = 99;`. Then the next line I used the same way to create the variable c, but this time I used `const c = ((f-32)*5)/9;` which was the equation given to us on the assignment page. This means that c is now equal to f after doing all the expressions. Then I used `console.log(c)` to see if it outputs anything. I then copied it in the EJS website to check that it gave me a number. I then checked if that number was correct by doing it on the calculator and it was. After that I decided to change up the console.log output to make it more obvious what the number means. I used the line `console.log(f + " degrees in Fahrenheit is " + c + " in Celsius.");`.

### Debugging

In this project I didn't have much trouble with the actual calculation but when I tried to combine strings and numbers in the console.log, I didn't realize that it would paste the variable with no spacing to the next string. To make it more legible, I ended up putting spaces in the strings for example `" degrees in Fahrenheit is "`, to compensate for the lack of space between the string and variable.