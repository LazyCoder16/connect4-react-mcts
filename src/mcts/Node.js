import Connect4Board from '../Connect4Board';
import { Y, R, C } from './constants.json';

class Node {
  constructor(board=null, parent=null) {
    if(board === null) this.board = new Connect4Board();
    else this.board = board;
    this.parent = parent;
    this.n = 0;
    this.results = { [Y]: 0, [R]: 0, 2: 0 };
    this.children = [];
    this.moves_left = this.board.getPossibleMoves();
  }

  get q() {
    let wins = this.results[this.parent.board.next_to_move];
    let loses = this.results[-this.parent.board.next_to_move];
    return (wins - loses);
  }

  is_fully_expanded = () => {
    return (this.moves_left.length === 0);
  }

  is_terminal_node = () => {
    return (this.board.checkDone() !== 0);
  }

  rollout = () => {
    let cur_board = new Connect4Board(JSON.parse(JSON.stringify(this.board.board)), this.board.next_to_move);
    while(cur_board.checkDone() === 0) {
      let moves = cur_board.getPossibleMoves();
      let a = moves[Math.floor(Math.random() * moves.length)];
      cur_board = cur_board.doMove(a);
    }
    return cur_board.checkDone();
  }

  bestChild = (c_param=C) => {
    let best_child, max_val = -Infinity;
    for(const c of this.children) {
      let a = c.q / (c.n || 1);
      let b = c_param * Math.sqrt(Math.log(this.n) / ((c.n) || 1));
      let val = a + b;
      if(val > max_val) {
        max_val = val;
        best_child = c;
      }
    }
    return best_child;
  }

  expand = () => {
    let a = this.moves_left.pop();
    let new_board = this.board.doMove(a);
    let new_node = new Node(new_board, this);
    this.children.push(new_node);
    return new_node;
  }

  backprop = (res) => {
    ++this.n;
    ++this.results[res];
    if(this.parent !== null)
      this.parent.backprop(res);
  }

  getProbs = () => {
    let probs = [];
    for(const c of this.children) {
      probs.push(c.q / (c.n || 1));
    }
    return probs;
  }
}

export default Node;