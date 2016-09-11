'use strict';

const board = ['','','','','','','','',''];

let player = 'X';
let win = false;

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
        if (verticalWin !== true) {
          console.log("cats game");
          win = true;
        }else if (diagonalWin !== true) {
          console.log("cats game");
          win = true;
        }else if (horizontalWin !== true) {
          console.log("cats game");
          win = true;
        }
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

const gameOver = function() {
  if ( win === true) {
  console.log('game over2');
}
};
//write get game function
//write update game function
//write new game function


//write function to lock game when over
//write function to render results and maybe current player
 
  const onCellClick = function (event){
      if (isValidMove(event.target)){
        placeMarker(event.target);
        updateBoard(event.target);
        changePlayer();
        catsGame();
        diagonalWin();
        verticalWin();
        horizontalWin();
        boardFull();
        gameOver();
        console.log(board);
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
  diagonalWin,
  boardFull,
  gameOver
};
