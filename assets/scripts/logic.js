'use strict';

const board = ['','','','','','','','',''];

let turn = 0;
let currentPlayer = ' ';
let winner = ' ';
let tieGame = ' ';

// const gameOver = function NoneEmpty(board) {
//   return board.indexOf("") === -1;
// };
const gameOver = function(){
  for(let i=0; i<board.length; i++) {
      if(board[i] === "") { return false;
    }
  }
  return true;
};

const updateBoard = function(cell) {
  let index = $(cell).data("id");
  if (turn %2 === 0) {
    $(cell).html('X');
    board[index] = 'x';
  }else {
    $(cell).html('O');
    board[index] = 'o';
  }
  turn++;
  console.log(turn);
  console.log(board);
  // horizontalWin();
};

const isValidMove = function(cell) {
  if ( $(cell).html() === "" ) {
    updateBoard(cell);
  } else {
    alert('Please make a valid move.');
  }
};

const horizontalWin = function () {
    if (board[0] !== "" && board[0] === board[1] && board[0] === board[2]) {
      winner = currentPlayer;
      console.log("horizontal win");
    } else if (board[3] !== "" && board[3] === board[4] && board[3] === board[5]) {
      winner = currentPlayer;
      console.log("horizontal win");
    } else if (board[6] !== "" &&   board[6] === board[7] &&   board[6] === board[8]) {
      winner = currentPlayer;
      console.log("horizontal win");
    }
    return winner;
  };

  const verticalWin = function () {
      if (board[0] !== "" && board[0] === board[3] && board[0] === board[6]) {
        winner = currentPlayer;
        console.log("vertical win");
      } else if (board[1] !== "" && board[1] === board[4] && board[1] === board[7]) {
        winner = currentPlayer;
        console.log("vertical win");
      } else if (board[2] !== "" &&   board[2] === board[5] &&   board[2] === board[8]) {
        winner = currentPlayer;
        console.log("vertical win");
      }
      return winner;
    };

    const diagonalWin = function () {
        if (board[0] !== "" && board[0] === board[4] && board[0] === board[8]) {
          winner = currentPlayer;
          console.log("diagonal win");
        } else if (board[2] !== "" && board[2] === board[4] && board[2] === board[6]) {
          winner = currentPlayer;
          console.log("diagonal win");
        }
        return winner;
      };

      // const catsGame = function(){
      //   if (gameOver === true && horizontalWin !== winner && verticalWin !== winner && diagonalWin !== winner) {
      //     winner = tieGame;
      //   }
      //   console.log("tie game");
      //   return winner;
      // };

    const catsGame = function() {
        if (gameOver() === true){
          if (verticalWin !== winner) {
          winner = tieGame;
          console.log("cats game");
        }else if (diagonalWin !== winner) {
          winner = tieGame;
          console.log("cats game");
        }else if (horizontalWin !== winner) {
          winner = tieGame;
          console.log("cats game");
        }
      }
    };
// ...
// ...
// verticalWin();
// };
// const horizontalWin = {

// };

module.exports = {
  isValidMove,
  horizontalWin,
  verticalWin,
  diagonalWin,
  catsGame,
  gameOver
};
