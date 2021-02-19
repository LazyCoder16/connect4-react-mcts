import React, { Component } from 'react';
import Box from './Box';
import { Y, R } from '../mcts/constants.json';
import Connect4Board from '../Connect4Board';
import Node from '../mcts/Node';
import mcts from '../mcts/mcts';

class Board extends Component {
  state = {
    board: new Connect4Board(),
    info: "",
    done: false,
    awaiting: false
  };
  colors = {'1': '#ff0', '-1': '#f00', '0': null};

  renderBox = (i, j) => {
    return <Box color={this.colors[this.state.board.board[i][j]]} 
            onClick={() => this.handleClick(j)}/>;
  }

  renderRow = (i) => {
    const l = [0, 1, 2, 3, 4, 5, 6];
    const row = l.map((j) => {
      return <div key={`${i}${j}`}>{this.renderBox(i, j)}</div>;
    });
    return (
      <div className="row">
        {row}
      </div>
    );
  }

  reset = () => {
    this.setState({done: false, info: ""});
    if(Math.random() > 0.5) {
      let board = new Connect4Board(null, R);
      this.setState({board: mcts(new Node(board), 500).board, awaiting: true});
      window.setTimeout(() => this.setState({awaiting: false}), 1000);
    }
    else {
      this.setState({board: new Connect4Board(), awaiting: false});
    }
  }

  updateInfo = (board) => {
    let res = board.checkDone();
    if(res === 0) return false;
    let info;
    if(res === Y) info = "This can't happen!";
    else if(res === R) info = "Better luck next time";
    else info = "It is a draw";
    this.setState({info, done: true});
    return true;
  }

  handleClick = (j) => {
    let {done, awaiting, board} = this.state;
    if(done || awaiting || board.board[0][j] !== 0) return;

    board = board.doMove(j);
    this.setState({board, awaiting: true});

    window.setTimeout(() => {
      let res = this.updateInfo(board);
      if(res) return;
      
      board = mcts(new Node(board), 500).board;
      this.setState({board});

      window.setTimeout(() => {
        res = this.updateInfo(board);
        if(res) return;;
        this.setState({awaiting: false});
      }, 1000);
    }, 1000);
  }
  
  render() {
    return (
      <div style={{textAlign: 'center', marginTop: '50px'}}>
        <div id="board">
          {this.renderRow(0)}
          {this.renderRow(1)}
          {this.renderRow(2)}
          {this.renderRow(3)}
          {this.renderRow(4)}
          {this.renderRow(5)}
        </div>
        <p id="info">{this.state.info}</p>
        <button id="reset-btn" onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default Board;