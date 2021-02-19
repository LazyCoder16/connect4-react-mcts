(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{1:function(e){e.exports=JSON.parse('{"e":1,"c":-1,"d":6,"b":7,"a":1.4}')},21:function(e,t,n){e.exports=n(32)},26:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(17),i=n.n(o),c=(n(26),n(7));function l(){return r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper",id:"nav"},r.a.createElement("a",{href:"#",className:"brand-logo"},"Connect 4 vs AI"),r.a.createElement("ul",{className:"right"},r.a.createElement("li",null,r.a.createElement(c.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/rules-and-about"},"Rules and About")))))}var s=n(5),u=n(8),d=n(19),h=n(20);function f(e){var t=e.onClick,n=e.color;return r.a.createElement("div",{className:"box",onClick:t},null!==n&&r.a.createElement("div",{className:"coin",style:{backgroundColor:n}}))}var m=n(1),v=function e(){var t=this,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:m.e;Object(s.a)(this,e),this.doMove=function(n){for(var a=JSON.parse(JSON.stringify(t.board)),r=m.d-1;r>=0;--r)if(0===a[r][n]){a[r][n]=t.next_to_move;break}var o=t.next_to_move===m.e?m.c:m.e;return new e(a,o)},this.check4x4=function(e,n){for(var a=0,r=0,o=[m.e,m.c];r<o.length;r++){for(var i=o[r],c=0;c<4;++c){a=0;for(var l=0;l<4;++l)a+=t.board[e+c][n+l];if(a===4*i)return i;a=0;for(var s=0;s<4;++s)a+=t.board[e+s][n+c];if(a===4*i)return i}a=0;for(var u=0;u<4;++u)a+=t.board[e+u][n+u];if(a===4*i)return i;a=0;for(var d=0;d<4;++d)a+=t.board[e+d][n+3-d];if(a===4*i)return i}return 0},this.checkDone=function(){for(var e=0;e<=m.d-4;++e)for(var n=0;n<=m.b-4;++n){var a=t.check4x4(e,n);if(0!==a)return a}for(var r=0;r<m.d;++r)for(var o=0;o<m.b;++o)if(0===t.board[r][o])return 0;return 2},this.getPossibleMoves=function(){for(var e=[],n=0;n<m.b;++n)0===t.board[0][n]&&e.push(n);return e},this.board=null===n?Array(m.d).fill(Array(m.b).fill(0)):n,this.next_to_move=a},b=n(9),p=n(13),w=function(){function e(){var t,n=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;Object(s.a)(this,e),this.is_fully_expanded=function(){return 0===n.moves_left.length},this.is_terminal_node=function(){return 0!==n.board.checkDone()},this.rollout=function(){for(var e=new v(JSON.parse(JSON.stringify(n.board.board)),n.board.next_to_move);0===e.checkDone();){var t=e.getPossibleMoves(),a=t[Math.floor(Math.random()*t.length)];e=e.doMove(a)}return e.checkDone()},this.bestChild=function(){var e,t,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m.a,r=-1/0,o=Object(p.a)(n.children);try{for(o.s();!(t=o.n()).done;){var i=t.value,c=i.q/(i.n||1),l=a*Math.sqrt(Math.log(n.n)/(i.n||1)),s=c+l;s>r&&(r=s,e=i)}}catch(u){o.e(u)}finally{o.f()}return e},this.expand=function(){var t=n.moves_left.pop(),a=new e(n.board.doMove(t),n);return n.children.push(a),a},this.backprop=function(e){++n.n,++n.results[e],null!==n.parent&&n.parent.backprop(e)},this.getProbs=function(){var e,t=[],a=Object(p.a)(n.children);try{for(a.s();!(e=a.n()).done;){var r=e.value;t.push(r.q/(r.n||1))}}catch(o){a.e(o)}finally{a.f()}return t},this.board=null===a?new v:a,this.parent=r,this.n=0,this.results=(t={},Object(b.a)(t,m.e,0),Object(b.a)(t,m.c,0),Object(b.a)(t,2,0),t),this.children=[],this.moves_left=this.board.getPossibleMoves()}return Object(u.a)(e,[{key:"q",get:function(){return this.results[this.parent.board.next_to_move]-this.results[-this.parent.board.next_to_move]}}]),e}();function g(e){for(var t=e;!t.is_terminal_node();){if(!t.is_fully_expanded())return t.expand();t=t.bestChild()}return t}var E=function(e,t){for(;t--;){var n=g(e),a=n.rollout();n.backprop(a)}return e.bestChild(0)},y=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={board:new v,info:"",done:!1,awaiting:!1},e.colors={1:"#ff0","-1":"#f00",0:null},e.renderBox=function(t,n){return r.a.createElement(f,{color:e.colors[e.state.board.board[t][n]],onClick:function(){return e.handleClick(n)}})},e.renderRow=function(t){var n=[0,1,2,3,4,5,6].map((function(n){return r.a.createElement("div",{key:"".concat(t).concat(n)},e.renderBox(t,n))}));return r.a.createElement("div",{className:"row"},n)},e.reset=function(){if(e.setState({done:!1,info:""}),Math.random()>.5){var t=new v(null,m.c);e.setState({board:E(new w(t),500).board,awaiting:!0}),window.setTimeout((function(){return e.setState({awaiting:!1})}),1e3)}else e.setState({board:new v,awaiting:!1})},e.updateInfo=function(t){var n,a=t.checkDone();return 0!==a&&(n=a===m.e?"This can't happen!":a===m.c?"Better luck next time":"It is a draw",e.setState({info:n,done:!0}),!0)},e.handleClick=function(t){var n=e.state,a=n.done,r=n.awaiting,o=n.board;a||r||0!==o.board[0][t]||(o=o.doMove(t),e.setState({board:o,awaiting:!0}),window.setTimeout((function(){var t=e.updateInfo(o);t||(o=E(new w(o),500).board,e.setState({board:o}),window.setTimeout((function(){(t=e.updateInfo(o))||e.setState({awaiting:!1})}),1e3))}),1e3))},e}return Object(u.a)(n,[{key:"render",value:function(){return r.a.createElement("div",{style:{textAlign:"center",marginTop:"50px"}},r.a.createElement("div",{id:"board"},this.renderRow(0),this.renderRow(1),this.renderRow(2),this.renderRow(3),this.renderRow(4),this.renderRow(5)),r.a.createElement("p",{id:"info"},this.state.info),r.a.createElement("button",{id:"reset-btn",onClick:this.reset},"Reset"))}}]),n}(a.Component),k=n(2);function x(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Rules"),r.a.createElement("p",null,r.a.createElement("p",{style:{fontWeight:"bold"}},"Rules of the game: "),"Connect Four (also known as Four Up, Plot Four, Find Four, Four in a Row, Drop Four, and Gravitrips in the Soviet Union) is a two-player connection board game, in which the players choose a color and then take turns dropping colored discs into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the lowest available space within the column. The objective of the game is to be the first to form a horizontal, vertical, or diagonal line of four of one's own discs."),r.a.createElement("p",null,r.a.createElement("p",{style:{fontWeight:"bold"}},"How to play: "),"When you click on any cell on the board a yellow coin is dropped in the column in which the cell is present and then the AI who is using red coins does its move."),r.a.createElement("h2",null,"About"),r.a.createElement("p",null,"Algorithm used for the AI: ",r.a.createElement("a",{href:"https://towardsdatascience.com/monte-carlo-tree-search-158a917a8baa"},"https://towardsdatascience.com/monte-carlo-tree-search-158a917a8baa"),r.a.createElement("br",null),"Source code: ",r.a.createElement("a",{href:"https://github.com/LazyCoder16/connect4-react-mcts"},"https://github.com/LazyCoder16/connect4-react-mcts"),r.a.createElement("br",null),"Project by Abhishek Jain"),r.a.createElement("p",null))}var _=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(c.a,null,r.a.createElement(l,null),r.a.createElement("div",{className:"container"},r.a.createElement(k.c,null,r.a.createElement(k.a,{exact:!0,path:"/",component:y}),r.a.createElement(k.a,{exact:!0,path:"/rules-and-about",component:x})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.91f40d89.chunk.js.map