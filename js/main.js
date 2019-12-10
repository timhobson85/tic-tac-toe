const gameBoard = [ null, null, null, null, null, null, null, null, null ]
let turnCount = null
let player = null
let playerMark = null
let playerColor = null

const whosTurn = function () { // pick who's turn it is
  if (turnCount % 2 === 0) {  // turn 1 = player1, turn 2 = player2, etc...)
    player = 1
    playerMark = `X`
    playerColor = `fuchsia`
  } else {
    player = 2
    playerMark = `O`
    playerColor = `yellow`
  }
  turnCount++
}

const checkBoxIfFree = function () {

  if (gameBoard[boxID] === null) {
    return true
  } else {
    console.log(`box is taken, pick again`)
    return false
  }
}

$('.squares').on('click', function () { // this places player number in the corresponing object value.
  boxID = $(this).attr('id'); // records the ID of the square
  console.log(boxID)
    if ( checkBoxIfFree( boxID ) ) {
      whosTurn()
      $(this).css( `backgroundColor`, playerColor )
    gameBoard[boxID] = playerMark; // pushes the playerMark( X or O ) into the array
    if (turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
      // loopWinCheck(); // runs the win function
    }
  }
}); // end of onclick

// compare
// loop for wins
// compare array for playerMark
// create loop for horizontal
// create loop for vertical
// create loop for top right down diag
// create loop for top left down diag



const startGame = function () {

  turnCount = 0
  console.log(turnCount);

}
