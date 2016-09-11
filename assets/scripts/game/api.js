'use strict';
//
const app = require('../auth/app');

const newGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

const getGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games/:id',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + token,
    }
  });
};

// const updateBoard = (data) => {
//   return $.ajax({
//     url: app.host + '/update/'+ app.games.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + app.user.token,
//     },
//     data: data,
//   });
// };

const updateWins = (data) => {
  return $.ajax({
    url: app.host + '/update/'+ app.games.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};
// + app.games.id,
module.exports = {
  // updateBoard,
  newGame,
  updateWins,
  getGame
};
