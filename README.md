Name of Project:Dev Stack
Description: Dev Stack is such as website where we track what we have skilled. which type of skill i have and can comapre with based on difficulty and catagory.
Technology Used: React
tailedwind css Daisy ui Reacttoster Reacticon

3-Feature of my project:
1.Tech Card where all about the Technologies have some little information
2.Add and Remove Button to stack the technologies
3.Your Stack option where you can see what type of technlogies you have added and can remove also.





1. What is JSX, and why is it used in React?
   jsx is such as language where we can write html type code in javscript to design the website.to combined ui design with the logics.its easier to read and understand code
   
2. What is the difference between props and state?
props is unidirectional data where its goes toward parents to child component. Child can't change anything in that system. in State we can change data and store.

3.What does the useState hook do, and where did you use it in this project?
useState hook used to store and update data,when we change anything or we do anything we can mark it and store it in different process

4.What does the useEffect hook do, and why did you need it to load the JSON data?
use effect is a hook to load data, nd when the server delay to load data it shows a loading state like a spinner or text to keep the user distracted from delaying.

5.Why does every item in a .map() list need a unique key prop?
map need unique key to have an update to map other data,key said map that is already map or not if its map ,map wont map the data 
6.What is conditional rendering? Show one place you used it (example: the empty stack message).
 {stackedTechs.length === 0 ? "No technology selected yet." : `${stackedTechs.length} Technology Selected.`} 
 in this place i have been use condition of the length of selected tech item if there is no selected item it will render No technology selected yet and if the one of tech item is select it will render the number of selected item and some txt.

7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
we pass data from parents to child by props .child cant send data directly to parent.

