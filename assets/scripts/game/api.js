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


const updateWins = (data) => {
  return $.ajax({
    url: app.host + '/games/'+ app.games.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token,
    },
    data: data,
  });
};

module.exports = {
  newGame,
  updateWins,
  getGame
};
