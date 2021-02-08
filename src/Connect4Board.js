import { Y, R, ROWS, COLS } from './mcts/constants.json';

class Connect4Board {
  constructor(board=null, next_to_move=Y) {
    if(board === null) this.board = Array(ROWS).fill(Array(COLS).fill(0));
    else this.board = board;
    this.next_to_move = next_to_move;
  }

  doMove = (a) => {
    let board = JSON.parse(JSON.stringify(this.board));
    for(let i=ROWS-1; i>=0; --i) {
      if(board[i][a] === 0) {
        board[i][a] = this.next_to_move;
        break;
      }
    }
    let next_to_move = (this.next_to_move === Y) ? R : Y;
    let new_board = new Connect4Board(board, next_to_move);
    return new_board;
  }

  check4x4 = (x, y) => {
    let sum = 0;
    for(const sym of [Y, R]) {
      for(let i=0; i<4; ++i) {
        sum = 0;
        for(let j=0; j<4; ++j) sum += this.board[x+i][y+j];
        if(sum === sym * 4) return sym;
        
        sum = 0;
        for(let j=0; j<4; ++j) sum += this.board[x+j][y+i];
        if(sum === sym * 4) return sym;
      }

      sum = 0;
      for(let i=0; i<4; ++i) sum += this.board[x+i][y+i];
      if(sum === sym * 4) return sym;

      sum = 0;
      for(let i=0; i<4; ++i) sum += this.board[x+i][y+3-i];
      if(sum === sym * 4) return sym;
    }
    return 0;
  }

  checkDone = () => {
    for(let i=0; i<=ROWS-4; ++i) {
      for(let j=0; j<=COLS-4; ++j) {
        let c = this.check4x4(i, j);
        if(c !== 0) return c;
      }
    }
    for(let i=0; i<ROWS; ++i)
      for(let j=0; j<COLS; ++j)
        if(this.board[i][j] === 0)
          return 0;
    return 2;
  }

  getPossibleMoves = () => {
    let moves = [];
    for(let j=0; j<COLS; ++j)
      if(this.board[0][j] === 0)
        moves.push(j);
    return moves;
  }
}

export default Connect4Board;