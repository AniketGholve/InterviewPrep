# Day 3 

### Q1 What is Props Drilling Concept ?What is State Uplifting ?
    Props Drilling - It is issue in React occurs when a parent component passes data down to its children and then those children pass the same data down to their own children. This process can continue indefinitely. At the end, it's a long chain of component dependencies that can be difficult to manage and maintain.This can be overcome by Context Api , Redux .

    State Uplifting - As we know in react we have one way data binding we can send data fron parent to child but some time we need data from child in parent component.State Uplifting is a concept in React in which you can transfer the data from child to parent. We have to pass a function as a props and set the data using that function of parent variable. 