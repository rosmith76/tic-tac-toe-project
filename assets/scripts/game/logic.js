'use strict';

const board = ['','','','','','','','',''];
let player = 'X';

const boardFull = function(gameBoard){
  gameBoard = gameBoard || board;
  for(let i=0; i<gameBoard.length; i++) {
      if(gameBoard[i] === "") { return false;
    }
  }
  return true;
};

const clearGameboard = function() {
  for (var i = 0; i < board.length; i++) {
    board[i] = '';
  }
}

const horizontalWin = function (gameBoard) {
    gameBoard = gameBoard || board;
    if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) {
      return gameBoard [0];
    } else if (gameBoard[3] !== "" && gameBoard[3] === gameBoard[4] && gameBoard[3] === gameBoard[5]) {
      return gameBoard[3];
    } else if (gameBoard[6] !== "" &&   gameBoard[6] === gameBoard[7] &&   gameBoard[6] === gameBoard[8]) {
      return gameBoard[6];
    }

    return false;
};

  const verticalWin = function (gameBoard) {
    gameBoard = gameBoard || board;
      if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6]) {
        return gameBoard[0];
      } else if (gameBoard[1] !== "" && gameBoard[1] === gameBoard[4] && gameBoard[1] === gameBoard[7]) {
        return gameBoard[1];
      } else if (gameBoard[2] !== "" &&   gameBoard[2] === gameBoard[5] &&   gameBoard[2] === gameBoard[8]) {
        return gameBoard[2];
      }
      return false;
};

    const diagonalWin = function (gameBoard) {
      gameBoard = gameBoard || board;
        if (gameBoard[0] !== "" && gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8]) {
          return gameBoard[0];
        } else if (gameBoard[2] !== "" && gameBoard[2] === gameBoard[4] && gameBoard[2] === gameBoard[6]) {
          return gameBoard[2];
        }
        return false;
      };

    const catsGame = function(gameBoard) {
      gameBoard = gameBoard || board;
        if (boardFull(gameBoard) && !(verticalWin(gameBoard) || horizontalWin(gameBoard) || diagonalWin(gameBoard))){
          return true;
        }
        else {
          return false;
        }
      };

      const gameStatus = function(gameBoard) {
        gameBoard = gameBoard || board;
        let v = verticalWin(gameBoard);
        let h = horizontalWin(gameBoard);
        let d = diagonalWin(gameBoard);
        let t = catsGame(gameBoard);

        if (v || h || d) {
          return {winner: v || h || d};
        }
        else if (t) {
          return {tie: true};
        }
        else {
          return {};
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

    $("#player").text("Current player: " + player);
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

const getCurrentPlayer = function() {
  return player;
};

module.exports = {
  getCurrentPlayer,
  board,
  changePlayer,
  isValidMove,
  updateBoard,
  placeMarker,
  gameStatus,
  clearGameboard
};
