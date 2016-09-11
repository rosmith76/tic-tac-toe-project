'use strict';

const app = require('../auth/app');


const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};
//
// const updateBoardSuccess = (data) => {
//   app.game = data.game;
//   console.log(app.game);
// };

const newGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

const getGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

// const updateWins = (data) => {
//   app.game = data.game;
//   console.log(app.game);
// };

module.exports = {
  failure,
  success,
  // updateBoardSuccess,
  newGameSuccess,
  getGameSuccess,
  // updateWins
  // onCellClick
};
