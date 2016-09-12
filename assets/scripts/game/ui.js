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
//
// const updateBoardSuccess = (data) => {
//   app.game = data.game;
//   console.log(app.game);
// };

function onCellClick(event){
    if (logic.isValidMove(event.target)){
      logic.placeMarker(event.target);
      logic.updateBoard(event.target);
      let status = logic.gameStatus();

      let over;
      if (status.winner) {
        doStuffWhenGameEnds();
        $('#winning-message').text('Player ' + status.winner + ' wins!');
        over = true;
      }
      else if (status.tie) {
        doStuffWhenGameEnds();
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

const doStuffWhenGameStarts = function() {
  $('.col-xs-4').on('click', onCellClick);
  $('#winning-message').text('');
  $("#player").text("Current player: " + logic.getCurrentPlayer());
};

// this linter warning is invalid because all 3 functions will be defined before any code in any of them executes.
const doStuffWhenGameEnds = function() {
  $('.col-xs-4').off('click', onCellClick);
  $('#player').hide();
};

const newGameSuccess = (data) => {
  console.log('new GAME SUCCESS', data);
  app.game = data.game;
  console.log(app.game);
  doStuffWhenGameStarts();
};

const getGameSuccess = (data) => {
  app.game = data.game;
  console.log(app.game);
};

// const updateWins = (data) => {
//   app.game = data.game;
//   console.log(app.game);
// };

// const onGetGame = function (event) {
//   event.preventDefault();
//   // let data = getFormFields(event.target);
//   let data = {};
//    console.log("get game");
//   api.getGame(data)
//     .done(getGame)
//     .fail(failure);
// };

//write function to lock game when over
//write function to render results and maybe current player


const onNewGame = function (event) {
  event.preventDefault();

  if (!app.user) {
    $('#winning-message').text('You have to be logged in to start a game');
    return;
  }

  // let data = getFormFields(event.target);
  console.log("new game");
  api.newGame()
    .done(newGameSuccess)
    .fail(failure);
};

    const addHandlers = () => {
      $('#new-game-button').on('click', onNewGame);
      //$('#get-games-button').on('click', onGetGame);
    };


module.exports = {
  failure,
  success,
  // updateBoardSuccess,
  newGameSuccess,
  getGameSuccess,
  // updateWins
  // onCellClick,
  doStuffWhenGameEnds,
  addHandlers
};
