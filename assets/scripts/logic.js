'use strict';

const board = ['','','','','','','','',''];

let turn = 0;

const updateBoard = function(cell) {
  let index = $(cell).data("id");
  if (turn %2 === 0) {
    $(cell).html('X');
    board[index] = 'x';
  }else {
    $(cell).html('O');
    board[index] = 'o';
  }
  turn++;
  console.log(turn);
  console.log(board);
  // horizontalWin();
};

const isValidMove = function(cell) {
  if ( $(cell).html() === "" ) {
    updateBoard(cell);
  } else {
    alert('Please make a valid move.');
  }
};

// const horizontalWin = {
// ...
// ...
// verticalWin();
// };
// const horizontalWin = {

// };

module.exports = {
  isValidMove,
};
