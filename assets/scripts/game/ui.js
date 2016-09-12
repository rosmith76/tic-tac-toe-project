'use strict';

const app = require('../auth/app');
const logic = require('./logic');
const api = require('./api');

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.error(error);
};

function onCellClick(event){
    if (logic.isValidMove(event.target)){
      logic.placeMarker(event.target);
      logic.updateBoard(event.target);
      let status = logic.gameStatus();

      let over;
      if (status.winner) {
        gameEnds();
        $('#winning-message').text('Player ' + status.winner + ' wins!');
        over = true;
      }
      else if (status.tie) {
        gameEnds();
        $('#winning-message').text('The game is a tie!');
        over = true;
      }
      else {
        logic.changePlayer();
        over = false;
      }

      let index = $(event.target).data('index');
      let player = logic.getCurrentPlayer();
      api.updateWins({
        "game": {
          "cell": {
            "index": index,
            "value": player
          },
          "over": over
        }
      });

      console.log(logic.board);
    }
  }

const gameStarts = function() {
  $('.col-xs-4').on('click', onCellClick);
  $('#winning-message').text('');
  $("#player").text("Current player: " + logic.getCurrentPlayer());
};

// this linter warning is doesnt make sense because all 3 functions will be defined before any code in any of them runs.
const gameEnds = function() {
  $('.col-xs-4').off('click', onCellClick);
  $('#player').hide();
};

const newGameSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  console.log(app.game);
  gameStarts();
};

const getGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

// void logic.board::clear() {
//     for(int i = 0; i <= 9; i++) {
//             logic.board[i].clear();
//     }
//   };

const onNewGame = function (event) {
  event.preventDefault();
  if (!app.user) {
    $('#winning-message').text('You have to be logged in to start a game');
    return;
  }
  api.newGame()
    .done(newGameSuccess)
    .fail(failure);
};

const onGetGame = function (event) {
  event.preventDefault();
  if (!app.user) {
    $('#game-message').text('You have to be logged in to get game stats');
    return;
  }
  api.getGame()
    .done(newGameSuccess)
    .fail(failure);
};
    const addHandlers = () => {
      $('#new-game-button').on('click', onNewGame);
      $('#get-games-button').on('click', onGetGame);
    };


module.exports = {
  failure,
  success,
  newGameSuccess,
  getGameSuccess,
  addHandlers
};
