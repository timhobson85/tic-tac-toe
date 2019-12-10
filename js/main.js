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
  console.log(boxID);
    if ( checkBoxIfFree( boxID ) ) {
      whosTurn();
      $(this).css( `backgroundColor`, playerColor )
    gameBoard[boxID] = playerMark; // pushes the playerMark( X or O ) into the array
    if (turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
      winCheck(); // runs the win function
    }
    if (turnCount === 9) {
        console.log(`DRAW!`);
    }
  }
}); // end of onclick

const startGame = function () {
  turnCount = 0
  console.log(turnCount);
}

const winCheck = function () {
  if (playerMark === (gameBoard[0] && gameBoard[1] && gameBoard[2])) {
    return console.log(`win!`);
  } else if (playerMark === (gameBoard[3] && gameBoard[4] && gameBoard[5])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[6] && gameBoard[7] && gameBoard[8])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[0] && gameBoard[3] && gameBoard[6])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[1] && gameBoard[4] && gameBoard[7])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[2] && gameBoard[5] && gameBoard[8])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[0] && gameBoard[4] && gameBoard[8])) {
    return console.log(`win!`)
  } else if (playerMark === (gameBoard[2] && gameBoard[4] && gameBoard[6])) {
    return console.log(`win!`)
  }
}; // end of winCheck

//******************** trying to make scalable solves **************************************

// create board array by making a loop, square column and then push
// compare
// loop for wins
// compare array for playerMark
// let c = 3 // (this is the number of columns, either get this from square root of total, or when player is asked how many colomns for gameboard)
// numOfLoop = c-1
// create loop for horizontal
// 0++ = //loop 2 times for first column (0, 3, 6)
// create loop for vertical
// 0 += c //loop 2 times for first row (0, 1, 2)
// create loop for top right down diag
// 0 += (c+1) // loop 2 times for TopLeftDiag
// create loop for top left down diag
// (c-1) += (c-1) // loop 2 times to get solve condition for TopRightDiag, c-1 for beginning is for 0index aligning

// const loopWinCheck = function () {
//   let colomns = 3
//   let loops = colomns -1 // get loop amount
//   for (var i = 0; i < loops ; i++) {
//     console.log(`hl`)
//     console.log(gameBoard[1])
//     // console.log(0 += colomns)
//     // console.log(0 += (colomns+1))
//     // console.log((colomns-1) += (colomns-1))
//   }
// }
