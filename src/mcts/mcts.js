function treePolicy(root) {
  let cur_node = root;
  while(!cur_node.is_terminal_node()) {
    if(!cur_node.is_fully_expanded())
      return cur_node.expand();
    cur_node = cur_node.bestChild();
  }
  return cur_node;
}

function mcts(root, n_simulations) {
  while(n_simulations--) {
    let v = treePolicy(root);
    let res = v.rollout();
    v.backprop(res);
  }
  return root.bestChild(0);
}

export default mcts;
