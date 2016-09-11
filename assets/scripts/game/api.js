'use strict';

const app = require('../auth/app');

const newGame = () => {
  let token = app.user.token;
  return $.ajax({
    url: app.host + '/games',
    method: 'GET',
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
// const showGame = (data) => {
//   let token = app.user.token;
//   let gameId = data.game.id;
//   return $.ajax({
//     url: app.host + '/games/', + gameId,
//     method: 'GET',
//     headers: {
//       Authorization: 'Token token=' + token,
//     },
//   });
// };

module.exports = {
  newGame,
  getGame
};
