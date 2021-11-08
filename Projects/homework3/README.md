## Homework #3

This project, based on [Homework 3](https://cs.calvin.edu/courses/cs/262/kvlinden/09is/homework.html), launched my data service (from [Lab 9](https://cs.calvin.edu/courses/cs/262/kvlinden/09is/lab.html))  onto the homework client
created in [Homework 2](https://cs.calvin.edu/courses/cs/262/kvlinden/06hci/homework.html). 

### Answers to Homework Questions:

## 1.a Active Links for server:

https://cryptic-mesa-88162.herokuapp.com/

https://cryptic-mesa-88162.herokuapp.com/players

https://cryptic-mesa-88162.herokuapp.com/:id

https://cryptic-mesa-88162.herokuapp.com/join

## 1.b Which of these endpoints implement actions that are idempotent? nullipotent?

### idempotent: 

https://cryptic-mesa-88162.herokuapp.com/players/:id

https://cryptic-mesa-88162.herokuapp.com/players 

(the above links are those which can allow us to edit the database: adding/editing/deleting a player)

### nullipotent:

https://cryptic-mesa-88162.herokuapp.com/

https://cryptic-mesa-88162.herokuapp.com/players

https://cryptic-mesa-88162.herokuapp.com/players/:id

https://cryptic-mesa-88162.herokuapp.com/join

## 1.c Is the service RESTful? If not, why not? If so, what key features make it RESTful.

Yes the service is restful. The features that make it restful are, as described in class:

Stateless,

Cacheable,

Layered,

Uniform Interface

(https://en.wikipedia.org/wiki/Representational_state_transfer) for further information.

## 1.d  Is there any evidence in your implementation of an impedance mismatch?
 An impedence mismatch results because the database is not based on an object oriented design. I think the simple implementation I have created works fairly well regardless of the mismatch.





