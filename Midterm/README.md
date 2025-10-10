# Midterm

### What I did/Debugging 

#### Phase 1

For Phase 1, I wanted to make a heart so I drew 2 circles to make the curves and a square to make the bottom. There wasn't a lot of troubleshooting for this phase since it was just drawing the shape. 

#### Phase 2

For phase 2, I just drew the shapes out with code similar to the example given to us on github. There wasn't anything that I really needed to debug, mostly just tweaking the shapes and where I wanted them. 

Using the example code as reference, I really only changed the x,y of the eclipses and made them the same size. `ellipse(30, 50, 50, 50);` and `ellipse(70, 50, 50, 50);`. Then I made a square below that with:

 `push();`
 `translate (50, 35)`
 `rotate(PI / 4);`
 `rect(0, 0, 50, 50);`
 `pop();`

I did have some trouble rotating the square though when I had to make the bottom of the heart. At first I used the rotate function but it didn't move the square at all. I then searched it up on the [p5js website](https://p5js.org/reference/p5/rotate/) to see how they used the function.


I saw that they used PI/4 to rotate things by 45 degrees so I also used that to rotate my square. After I did that I realized it still didn't effect the square at all so I read through the website and found them mentioning [Push()](https://p5js.org/reference/p5/push/) and[pop()]() functions. I read that it is useful to separate different parts of your drawing (distingushing between the beginning and end of a drawing group). I used that to separate my square from the other things I was drawing just so it wouldn't get confused on what I was trying to rotate and it ended up working.

#### Phase 3

For phase 3, I still created everything while referencing the code given in the [assignment page](https://github.com/rdwrome/261fa25/blob/main/06Midterm/README.md). To make my drawing into a function I first made a function called drawObject(). Then in the setup I also made sure to make the canvas size 400 by 400 as the assignment asks. In my drawObject() function, I copied the code from Phase 2 and then added: 

`translate(x, y);
 scale(s);`
 
I needed to put this because I created the function saying that I needed 3 variables so I could scale the picture as well as move its x,y cordinates. This was actually the only debugging I needed to do since it was actually giving me an error that my variables weren't defined. To fix this I just had to say in the function that I am looking for x,y for my translate function, `translate(x, y);` and s for my scale function `scale(s);`. This is because of the scope of the function we talked about in class, similar to having an accidental only change that note for the bar it occured.
  

#### Phase 4

For phase 4, I just had to create a nested forloop to make the tiles. Before making the loop I knew that I wanted it to make a row every 20 hearts and that there should be a total of 20 rows which means a total of 400 hearts. Like a normal forloop I started by making the condition for the loop which was `let i = 0; i <= n-1; i++`. This just means that for everytime that i, the counter, is smaller or equal to n-1 it will repeat the loop. n-1 in this case is just 399 since I set n as 400 when I called the function in the setup. Then inside the loop I called for my drawing function `drawObject(x, y, s);` and also `x += 20;` to print the next heart to the right. I came up with the number 20 because the canvas size is 400, if I wanted to divide them into 20 per row it means that each heart tile is 20 x 20. 

There is also an if statement inside:

`if ((i+1)%20 === 0){
      y += 20;
      x = 0;
    }`

This statement checks if there is 20 in a row, if there is, then it moves onto the row. I did i+1 here because i starts at 0 and because 0 divided by anything is still 0 so it would make a new row after the first heart, which is not what I want. Then I also set the x as 0 so the row gets created from the beginning each time.

Looking back actually think I should have set i = 1 when I made the forloop but to me it makes more sense if I see the code like this since everything is standard for a forloop and I can easily see what someone changed. 

As for debugging, I had some trouble figuring out how I wanted to do the tiles and got too stuck up on making each heart perfectly 20 x 20 but its actually a lot easier to make the loop first, then adjust the size of the hearts. While making the loop, I had some minor problems but I solved them quickly. For example, the hearts kept on making a seperate row after the first or when i forgot to put () over i+1 and it ended up doing 1%20 instead of (i+1)%20. In general it went pretty well.

