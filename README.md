# Connect 4 vs AI

## Description

This is a game of Connect 4 vs AI made in React js created by Abhishek Jain.  
You can see the app running live at [https://connect4-mcts-react.web.app/](https://connect4-mcts-react.web.app/)  
Here is a screenshot of the app:
![Alt text](assets/screenshot.png?raw=true "Title")

## Code structure

The public folder contains the html file, manifest and the app logo.  
The src folder contains the main code :-  
`Connect4Board.js` Contains the game logic  
`mcts/constants.json` Contains some constants  
`mcts/Node.js` Contains the node class for the monte carlo tree search  
`mcts/mcts.js` Contains the main function in which the AI chooses its move  
`components/Navbar.js` Component for the navbar  
`components/RulesAndAbout.js` The rules and about page of the app  
`components/Box.js` The component for each cell in the board  
`components/Board.js` The main game which the user sees  
