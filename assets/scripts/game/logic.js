'use strict';

const board = ['','','','','','','','',''];
let player = 'X';

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
      return board [0];
    } else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
      console.log("horizontal win");
      return board[3];
    } else if (board[6] !== "" &&   board[6] === board[7] &&   board[6] === board[8]) {
      console.log("horizontal win");
      return board[6];
    }

    return false;
};

  const verticalWin = function () {
      if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        console.log("vertical win");
        return board[0];
      } else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        console.log("vertical win");
        return board[1];
      } else if (board[2] !== "" &&   board[2] === board[5] &&   board[2] === board[8]) {
        console.log("vertical win");
        return board[2];
      }
      return false;
};

    const diagonalWin = function () {
        if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
          console.log("diagonal win");
          return board[0];
        } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
          console.log("diagonal win");
          return board[2];
        }
        return false;
      };

    const catsGame = function() {
        if (boardFull() && !(verticalWin() || horizontalWin() || diagonalWin())){
          console.log("board full");
          return true;
        }
        else {
          return false;
        }
      };

      const gameStatus = function() {
        let v = verticalWin();
        let h = horizontalWin();
        let d = diagonalWin();
        let t = catsGame();

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
  gameStatus
};
