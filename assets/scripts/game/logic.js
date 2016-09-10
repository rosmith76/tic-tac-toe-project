'use strict';

const board = ['','','','','','','','',''];

let player = 'X';

const horizontalWin = function () {
    if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
      console.log("horizontal win");
      return true;
    } else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
      console.log("horizontal win");
      return true;
    } else if (board[6] !== "" &&   board[6] === board[7] &&   board[6] === board[8]) {
      console.log("horizontal win");
      return true;
    }
    return true;
  };

  const verticalWin = function () {
      if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        console.log("vertical win");
        return true;
      } else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        console.log("vertical win");
        return true;
      } else if (board[2] !== "" &&   board[2] === board[5] &&   board[2] === board[8]) {
        console.log("vertical win");
        return true;
      }
      return true;
    };

    const diagonalWin = function () {
        if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
          console.log("diagonal win");
          return true;
        } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
          console.log("diagonal win");
          return true;
        }
        return true;
      };

    const catsGame = function() {
          if (verticalWin !== true) {
          console.log("cats game");
          return true;
        }else if (diagonalWin !== true) {
          console.log("cats game");
          return true;
        }else if (horizontalWin !== true) {
          console.log("cats game");
          return true;
        }
      };

    const updateBoard = function(cell) {
      let index = $(cell).data('index');
      board[index] = player;
      console.log(board);
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
        alert('Please make a valid move.');
    };

    const onCellClick = function (event){
      if (isValidMove(event.target)){
        placeMarker(event.target);
        updateBoard(event.target);
        console.log('board is', board);
        changePlayer();
        catsGame();
        diagonalWin();
        verticalWin();
        horizontalWin();
      }
    };

    const addHandlers = () => {
      $('.col-xs-4').on('click', onCellClick);
    };

module.exports = {
  addHandlers,
  onCellClick,
  changePlayer,
  isValidMove,
  updateBoard,
  placeMarker,
  catsGame,
  horizontalWin,
  verticalWin,
  diagonalWin
};
