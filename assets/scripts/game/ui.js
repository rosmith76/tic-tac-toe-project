'use strict';

const app = require('../auth/app');
// const logic = require('./logic');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

// const onCellClick = function (event) {
//   event.preventDefault();
//   let cell = $(this);
//   logic.isValidMove(cell);
//   logic.horizontalWin();
//   logic.verticalWin();
//   logic.diagonalWin();
//   logic.catsGame();
//   logic.updateBoard();
//   logic.changePlayer();
//   logic.placeMarker();
// };
module.exports = {
  failure,
  success,
  newGameSuccess
  // onCellClick
};
