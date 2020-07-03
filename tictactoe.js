// Pseudo Coding: Board Evaluation
// When does this occur?
// What is the logic flow in English?

Keep track:
currentPlayer

Current Player plays piece
- A cell is selected
- Piece is placed in Cell (piece placed is player's piece)
- Check board winner or draw
  - Rows, Cols, Diagonals
  - board = [
    ["X", "_", "O"],
    ["X", "_", "O"],
    ["X", "_", "_"]
  ]
- Switch currentPlayer

