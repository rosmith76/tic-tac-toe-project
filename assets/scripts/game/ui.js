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
        over = false;
      }

      let index = $(event.target).data('index');
      let player = logic.getCurrentPlayer();
      // console.log(logic.board);
      api.updateWins({
        "game": {
          "cell": {
            "index": index,
            "value": player
          },
          "over": over
        }
      });

      if (!over) {
        logic.changePlayer();
      }
    }
  }

const gameStarts = function() {
  $('.col-xs-4').on('click', onCellClick);
  $('#winning-message').text('');
  $("#player").text("Current player: " + logic.getCurrentPlayer());
};

const gameEnds = function() {
  $('.col-xs-4').off('click', onCellClick);
  $('#player').hide();
};

const newGameSuccess = (data) => {
  console.log(data);
  app.game = data.game;
  console.log(app.game);
  logic.clearGameboard();
  $('.col-xs-4').text('');
  gameStarts();
};


const getGameSuccess = (data) => {

  let wonX = 0;
  let wonO = 0;
  data.games.forEach(function(game) {
    const status = logic.gameStatus(game.cells);
    if (status.winner === 'X') {
      wonX++;
    }
    else if (status.winner === 'O') {
      wonO++;
    }
  });

  $('#game-message').text('Your game stats are: ' + wonX + ' games won by X and ' + wonO + ' games won by O ');
};

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
    .done(getGameSuccess)
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
