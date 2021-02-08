import React, { useState } from 'react';
import Box from './Box';
import { Y, R } from '../mcts/constants.json';
import Connect4Board from '../Connect4Board';
import Node from '../mcts/Node';
import mcts from '../mcts/mcts';

function Board() {
  const [board, setBoard] = useState(new Connect4Board());
  const [info, setInfo] = useState("");
  const [done, setDone] = useState(false);
  const [awaiting, setAwaiting] = useState(false);
  const colors = {'1': '#ff0', '-1': '#f00', '0': '#EEFBFB'};

  const renderBox = (i, j) => {
    return <Box color={colors[board.board[i][j]]} 
            onClick={() => handleClick(j)}/>;
  }

  const renderRow = (i) => {
    const l = [0, 1, 2, 3, 4, 5, 6];
    const row = l.map((j) => {
      return <div key={`${i}${j}`}>{renderBox(i, j)}</div>;
    });
    return (
      <div className="row">
        {row}
      </div>
    );
  }

  const reset = () => {
    setDone(false);
    setInfo("");
    if(Math.random() > 0.5) {
      let board = new Connect4Board(null, R);
      setBoard(board);
      setAwaiting(() => true);
      setBoard(mcts(new Node(board), 200).board);
      setAwaiting(false);
    }
    else {
      let board = new Connect4Board(null, Y);
      setBoard(board);
      setAwaiting(false);
    }
  }

  const updateInfo = (board) => {
    let res = board.checkDone();
    if(res === 0) return false;
    if(res === Y) setInfo(() => "This can't happen!");
    else if(res === R) setInfo(() => "Better luck next time");
    else setInfo(() => "It is a draw");
    setDone(true);
    return true;
  }

  const handleClick = (j) => {
    if(done || awaiting || board.board[0][j] !== 0) return;
    setAwaiting(() => true);
    let new_board = board.doMove(j);
    setBoard(new_board);
    let res = updateInfo(new_board);
    if(res) return;

    new_board = mcts(new Node(new_board), 500).board;
    setBoard(new_board);
    res = updateInfo(new_board);
    if(res) return;

    setAwaiting(false);
  }

  return (
    <div style={{textAlign: 'center', marginTop: '50px'}}>
      <div id="board">
        {renderRow(0)}
        {renderRow(1)}
        {renderRow(2)}
        {renderRow(3)}
        {renderRow(4)}
        {renderRow(5)}
      </div>
      <p id="info">{info}</p>
      <button id="reset-btn" onClick={reset}>Reset</button>
    </div>
  );
}

export default Board;