import React from 'react'

export default function RulesAndAbout() {
  return (
    <div>
      <h2>Rules</h2>
      <p><strong>Rules of the game: </strong>Connect Four (also known as Four Up, Plot Four, Find Four, Four in a Row, Drop Four, and Gravitrips in the Soviet Union) is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs.</p>
      <p><strong>How to play: </strong>When you click on any cell on the board a yellow coin is dropped in the column in which the cell is present and then the AI who is using red coins does its move.</p>
    
      <h2>About</h2>
      <p>
      Algorithm used for the AI: <a href="https://towardsdatascience.com/monte-carlo-tree-search-158a917a8baa">https://towardsdatascience.com/monte-carlo-tree-search-158a917a8baa</a><br/>
      Source code: <a href="https://github.com/LazyCoder16/connect4-react-mcts">https://github.com/LazyCoder16/connect4-react-mcts</a><br/>
      Project by Abhishek Jain
      </p>
    </div>
  )
}
