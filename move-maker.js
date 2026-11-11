/*
    Given a move and a board (an array of arrays), return true if the move is valid.
        A move is represented by 2 numbers separated by a comma.
        The first number is the row (1, 2 or 3) and the second number is the column (1, 2 or 3).
            Some valid example moves are 1,3 and 2,2.
            Some invalid examples are 0,1 and 2-1.
    Also, a move can only be made in a free space ('_') on the board.
    If the move is not valid:
        - you can output 'Try again...'
        - and then return false
    Testing your function by calling it with some values. An example board is:
        let board = [
            ['X', '_', '_'],
            ['_', 'X', '_'],
            ['O', 'O', 'X']
        ];
*/
function validateMove(move, board) {
  if (typeof move !== "string") {
    console.log("Try again!");
    return false;
  }
  const pattern = /^[1-3],[1-3]$/;
  if (!pattern.test(move)) {
    console.log("Try again !!");
    return false;
  }
  const coordinates = move.split(",");
  const row = coordinates[0];
  const column = coordinates[1];
  const rowNum = Number(row);
  const columnNum = Number(column);
  const rowPosition = rowNum - 1;
  const columnPosition = columnNum - 1;

  if (board[rowPosition][columnPosition] !== "_") {
    console.log("Try again!, It's occupied!");
    return false;
  }
  return true;
}

/*
    Given 3 parameters:
        - a board (an array of arrays)
        - a move (2 numbers separated by a comma)
        - a player ('X' or 'O'):
    Check that the move is valid using the validateMove function.
        If the move is not valid, the function should just return false.
        If the move is valid, the function should:
            - Update the board with the player's value ('X' or 'O') in the correct position
            - Return true
*/
export function makeMove(board, move, player) {
  const isValid = validateMove(move, board);
  if (!isValid) {
    return false;
  }
  const coordinates = move.split(",");
  const rowPosition = Number(coordinates[0]) - 1;
  const columnPosition = Number(coordinates[1]) - 1;

  board[rowPosition][columnPosition] = player;

  return true;
}
