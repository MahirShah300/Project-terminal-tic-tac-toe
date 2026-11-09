/* 
    Given a tic-tac-toe board represented by an array of arrays - output the board to the terminal.
    For example, if we have the following board:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
    We should output something like this (feel free to be creative):
          X  |     |     
        =================
             |  X  |     
        =================
          O  |  O  |  X  
        =================
    Test your function by calling it with an example tic-tac-toe board.
*/
export function printBoard(board) {
  let rowString = "";
  for (let row = 0; row < board.length; row++) {
    for (let column = 0; column < board[row].length; column++) {
      if (board[row][column].toLowerCase() === "_") {
        rowString += "   ";
      } else if (board[row][column].toLowerCase() === "x") {
        rowString += " X ";
      } else {
        rowString += " O ";
      }
      if (column < 2) {
        rowString += "|";
      }
    }
    console.log(rowString);
    rowString = "";
    if (row < 2) {
      console.log("===========");
    }
  }
}

/*
    Given a tic-tac-toe board (an array of arrays),
        - return true if there are no moves left to make (there are no more '_' values)
        - return false if there are still moves that can be made
*/
export function checkIfNoMovesLeft(board) {
  for (const row of board) {
    if (row.includes("_")) {
      return false;
    }
  }
  return true;
}
