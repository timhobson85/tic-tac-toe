let gameBoard = [ null, null, null, null, null, null, null, null, null ]
let turnCount = null
let player = null
let playerMark = null
let gameResult = null
let gameOver = null
let $addWin = null
let winListItem = null
let playerIMG = null
let player1IMG = null
let player2IMG = null
let player1Name = null
let player2Name = null
const $ul = $('ul#wins')
const $winText = $('#winText')
const $winName = $('#winName')
const $scoreBoard = $('.scoreBoard')

$('#loadButton').on('click', function () {
  $(this).fadeOut(function () {
      $('#loadBox').fadeOut();
      $('#nameEntryBox').delay(500).fadeIn()
  })
})

$('#submitName').on('click', function () { // create a check for no input?
  player1Name = ( $('#enterPlayer1Name').val() );
  player2Name = ( $('#enterPlayer2Name').val() );
  $('#dropBtnP1').html( player1Name );
  $('#dropBtnP2').html( player2Name );
  console.log(player1Name);
  console.log(player2Name);
  $('#nameEntryBox').fadeOut()
  $('#pickMark').delay(500).fadeIn()
} );

$('.p2Symbol').on('click', function () {
  p2S = $(this).html();
  player2IMG = p2S
  console.log( player2IMG );
  $('#dropBtnP2').html( p2S )
  $('.p2Symbol').hide()
})

$('.p1Symbol').on('click', function () {
  p1S = $(this).html();
  player1IMG = p1S
  console.log( player1IMG );
  $('#dropBtnP1').html( p1S )
  $('.p1Symbol').hide()
})

$('#symbolOk').on('click', function () { // create if to check picked symbols
  $('#pickMark').fadeOut()
  $('#wrapper').delay(500).fadeIn()
})



const resetBoard = function () {
  $('.squares').html('')
  winListItem = null
  gameOver = false
  turnCount = 0
  gameResult = null
  gameBoard = [ null, null, null, null, null, null, null, null, null ]
}

const setPlayer= function () { // use object for players and change this
  if (turnCount % 2 === 0) {
    player = player1Name
    playerIMG = player1IMG
    playerMark = `X`
  } else {
    player = player2Name
    playerIMG = player2IMG
    playerMark = `O`
  }
  turnCount++
} //create arrau for playerdetails

const checkBoxUsed = function () {
  if (gameBoard[boxID] === null) {
    return false
  } else {
    console.log(`box is taken, pick again`)
    return true
  }
}

const endGame = function () {
  if (gameResult === `win`) {
    winListItem = `${player}-${gameResult}-${playerIMG}`
    scoreBoard()
    return gameOver = true
  } else if (gameResult === `draw`) {
    winListItem = `${gameResult}`
    scoreBoard()
    return gameOver = true
  } else {
    return false
  }
}

const placeMark = function () {
  $(`#${boxID}`).html(`<img src="images/${playerIMG}.png">`)
  gameBoard[boxID] = playerMark; // pushes the playerMark( X or O ) into the array
}

$('.squares').on('click', function () { // this places player number in the corresponing object value.
  if (gameOver) {
    return
  } else
  boxID = $(this).attr('id'); // records the ID of the square
    if ( checkBoxUsed( boxID ) ) { // try make this opposite, so if true will send back to middle, or continue with turn.
      return false
    } else {
    setPlayer();
    placeMark();
    winCheck();
    endGame();
  }
}); // end of onclick

const scoreBoard = function () {
  $winName.html(`Congratulations ${player}!`)
  $winText.html(`You won the game playing as ${playerIMG}`)
  $('.scoreBoard').css('visibility', 'visible')
  $('#scoreBoardOk').on('click', function () {
    $('.scoreBoard').css('visibility', 'hidden')
  })
  winCounter();
}

const winCounter = function () {
  $ul.html(`<li>${winListItem}</li>` + $ul.html())
}

$('#resetButton').on('click', function () {
  $('.scoreBoard').css('visibility', 'hidden')
  resetBoard()
}); // end of resetbutton onclick

const winCheck = function () {
  if (turnCount < 5) { // minimum number of turns to get a win, so doesn't search til now.
    return
  } if (turnCount === 9) {
      return gameResult = `draw`
  } if ( (playerMark === gameBoard[0]) && ((gameBoard[0] === gameBoard[1]) && (gameBoard[1] === gameBoard[2]))) {
    console.log(`win1`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[3]) && ((gameBoard[3] === gameBoard[4]) && (gameBoard[3] === gameBoard[5]))) {
    console.log(`win2`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[6]) && ((gameBoard[6] === gameBoard[7]) && (gameBoard[6] === gameBoard[8]))) {
    console.log(`win3`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[0]) && ((gameBoard[0] === gameBoard[3]) && (gameBoard[0] === gameBoard[6]))) {
    console.log(`win4`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[1]) && ((gameBoard[1] === gameBoard[4]) && (gameBoard[1] === gameBoard[7]))) {
    console.log(`win5`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[2]) && ((gameBoard[2] === gameBoard[5]) && (gameBoard[2] === gameBoard[8]))) {
    console.log(`win6`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[0]) && ((gameBoard[0] === gameBoard[4]) && (gameBoard[0] === gameBoard[8]))) {
    console.log(`win7`);
    return gameResult = `win`
  } else if ((playerMark && gameBoard[2]) && ((gameBoard[2] === gameBoard[4]) && (gameBoard[2] === gameBoard[6]))) {
    console.log(`win8`);
    return gameResult = `win`
  }
}; // end of winCheck

const oldwinConditionsArray = [

  [ 0, 1, 2 ],

  [ 3, 4, 5 ],

  [ 6, 7, 8 ],

  [ 0, 3, 6 ],

  [ 1, 4, 7 ],

  [ 2, 5, 8 ],

  [ 0, 4, 8 ],

  [ 2, 4, 6 ]

]

const oldloopWinsArray = function () {
  for (var i = 0; i < oldwinConditionsArray.length; i++) { // loops into the main array of all win conditions
    // console.log(oldwinConditionsArray[i])
    // console.log(i);
    oldmatchCount = 0
    for (var x = 0; x < oldwinConditionsArray[x].length; x++) { // loops through the current array in the array
      // console.log(oldwinConditionsArray[i][x])
      // console.log(x);
      oldcheckForMatch = oldwinConditionsArray[i][x]
      // console.log(`does square match`, checkForMatch);
      for (var y = 0; y < currentPlayer.length; y++) {
        // console.log(currentPlayer[y])
        if (oldcheckForMatch == oldcurrentPlayer[y]) {
          oldmatchCount++
          // console.log(matchCount);
          if (oldmatchCount === 3) {
            console.log( `WIN!`)
            return (`winner is player`, oldplayer)
          }
        // } else {
          // return false
        }
      }
    }
  }
}

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
