'use strict';

const board = ['','','','','','','','',''];

const api = require('./api');
const ui = require('./ui');

let player = 'X';
let win = false;
let tie = false;

const boardFull = function(){
  for(let i=0; i<board.length; i++) {
      if(board[i] === "") { return false;
    }
  }
  return true;
};

const horizontalWin = function () {
    if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
      console.log("horizontal win");
      win = true;
    } else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
      console.log("horizontal win");
      win = true;
    } else if (board[6] !== "" &&   board[6] === board[7] &&   board[6] === board[8]) {
      console.log("horizontal win");
      win = true;
    }
};

  const verticalWin = function () {
      if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        console.log("vertical win");
        win = true;
      } else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        console.log("vertical win");
        win = true;
      } else if (board[2] !== "" &&   board[2] === board[5] &&   board[2] === board[8]) {
        console.log("vertical win");
        win = true;
      }
};

    const diagonalWin = function () {
        if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
          console.log("diagonal win");
          win = true;
        } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
          console.log("diagonal win");
          win = true;
        }

      };

    const catsGame = function() {
        if (boardFull() === true){
          console.log("board full");
        if (verticalWin !== win) {
          console.log("cats game");
          tie = true;
        }else if (diagonalWin !== win) {
          console.log("cats game");
          tie = true;
        }else if (horizontalWin !== win) {
          console.log("cats game");
          tie = true;
        }
      }
      };

      // const wins = function(){
      //   diagonalWin();
      //   horizontalWin();
      //   verticalWin();
      //   catsGame();
      // };
      //i can't get tie to work. i have tried win and true in the above. cats game still
      //displays if a win has already been declared. if I can get the board to lock after a win
      // this will not matter.
      const onNewGame = function (event) {
        event.preventDefault();
        // let data = getFormFields(event.target);
        console.log("new game");
        let data = {};
        api.newGame(data)
          .done(ui.newGameSuccess)
          .fail(ui.failure);
      };

    const updateBoard = function(cell) {
      let index = $(cell).data('index');
      board[index] = player;
        //  let data = {};
        // api.updateBoard(data)
        //   .done(ui.updateBoardSuccess)
        //   .fail(ui.failure);
    };

const changePlayer = function () {
    if (player === 'X') {
      player = 'O';
    }else{
      player = 'X';
    }
};

const placeMarker = function (cell) {
    $(cell).html(player);
  };

const isValidMove = function(cell) {
      if ( $(cell).html() === "" ) {
        return true;
      } else {
        return false;
      }
    };

const gameOver = function() {
  if ( win === true) {
  console.log('game over2');
}
};

const onGetGame = function (event) {
  event.preventDefault();
  // let data = getFormFields(event.target);
  let data = {};
   console.log("get game");
  api.getGame(data)
    .done(ui.getGame)
    .fail(ui.failure);
};

//write function to lock game when over
//write function to render results and maybe current player

  const onCellClick = function (event){
      if (isValidMove(event.target)){
        placeMarker(event.target);
        updateBoard(event.target);
        changePlayer();
        diagonalWin();
        verticalWin();
        horizontalWin();
        boardFull();
        gameOver();
        catsGame();
        console.log(board);
      }
    };

    const addHandlers = () => {
      $('.col-xs-4').on('click', onCellClick);
      $('#new-game-button').on('click', onNewGame);
      $('#get-games-button').on('click', onGetGame);
    };

module.exports = {
  addHandlers,
  changePlayer,
  isValidMove,
  updateBoard,
  placeMarker,
  catsGame,
  horizontalWin,
  verticalWin,
  diagonalWin,
  boardFull,
  gameOver
};
