// Assuming you have imported the chess.js and chessboard.js libraries

const chess = new Chess();

function initializeBoard() {
  const chessboard  = Chessboard('board', boardConfig);
  // Rest of the code
}
// Function to handle moves made on the board
function onDrop(source, target) {
  const move = chess.move({ from: source, to: target });
  if (move === null) return 'snapback';
  // Add any custom logic you need after a move is made
}

// Configuration for the chessboard.js
const boardConfig = {
  draggable: true,
  position: 'start',
  onDrop: onDrop,
};

// Create the chessboard with the configuration
const board = Chessboard('#board', boardConfig);