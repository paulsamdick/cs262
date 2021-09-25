CS-262-Lab4


This lab was based on [CS262-Lab4](https://cs.calvin.edu/courses/cs/262/kvlinden/04analysis/lab.html).

Answers to lab questions:

What React construct is used to implement separate pages of an application (cf. separate webpages on the Web)?

 Answer #1:
 React Navigation uses the class idea from object oriented programing to implement depth in an application.

What is the React Navigation concept that is analogous to a URL/URI on the Web?

Answer #2:
React Navigation's stack navigator provides a way for your app to transition between screens and manage navigation history.

The onPress event handler for the home screen component is specified as () => navigation.navigate('Details'). Can we just say navigation.navigate('Details')? Why or why not?

Answer #3:
The  ()=> specifies a anonymous function, telling the button what to do "on press."

Answer #4:

a. The movies are displayed in a lsit using the FlatList command.

b. The detals displayed for a single movie by calling the title on press which opens up the rest of the item. It seems to be sort of like a python dictionary, where the movies all have keys, and when those keys are called, all the other information for that movie comes up.
