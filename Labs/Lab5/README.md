CS 262 - Lab 5


This lab is based on [CS-262, Lab 5](https://cs.calvin.edu/courses/cs/262/kvlinden/05design/lab.html)

Lab Q&A:

1. Of what benefit was the refactoring phase of this lab?

The refactoring phase of the lab clarified the structure of the code making it both easier to read and easier to adjust.

2. What do the export commands do?

The export commands tell the compiler to export the following function.

3. This application uses stack navigation. What does the stack do here? What is the deepest this stack can get in this application?

The stack navigation system provides a way for the app to transition between screens. A stack works with LIFO behavior, it allows us to go back to previous screens and forward to the screen we just were at (via pushing and popping off the top of the stack). In this application there are really only two levels the stack can go from the home screen to the details screen or the about screen, but there is no further depth.
