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

const resetBoard = function () {
  $('.squares').html('')
  $('#resetButton').css('width', '200px').animate({width: "50px"}, 500)
  // $('#resetButton').css('width', '50px')
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
  $('#turntext').show()
  $('#turntext').html(`it's ${player}'s turn`).delay(1500).fadeOut()
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
  if (gameResult === `win`) {
    $winName.html(`Congratulations ${player}!`)
    $winText.html(`You won the game playing as ${playerIMG}`)
  } else {
    $winName.html(`What a shame!`)
    $winText.html(`The game ended in a draw`)
  }
  $('#resetButton').css('width', '200px')
  $('.scoreBoard').css('visibility', 'visible')
  $('#scoreBoardOk').on('click', function () {
  $('.scoreBoard').css('visibility', 'hidden')
  })
  winCounter();
}

const winCounter = function () {
  $ul.html(`<li>${winListItem}</li>` + $ul.html())
  $('#winCounter').show().delay(2500).fadeOut()

}


const winConditionsArray = [

  [ 0, 1, 2 ],

  [ 3, 4, 5 ],

  [ 6, 7, 8 ],

  [ 0, 3, 6 ],

  [ 1, 4, 7 ],

  [ 2, 5, 8 ],

  [ 0, 4, 8 ],

  [ 2, 4, 6 ]

]; // end of winConditionsArray

const winCheck = function () {

  if (turnCount < 5 ) {
    return
  } else {
    for (var i = 0; i < winConditionsArray.length; i++) {
      solve = winConditionsArray[i]
      if ( gameBoard[solve[0]] && ((gameBoard[solve[0]] === gameBoard[solve[1]]) && (gameBoard[solve[1]] === gameBoard[solve[2]]))) {
        console.log(`win`);
        return gameResult = `win`
      }
    } if (turnCount === 9) {
      return gameResult = `draw`
    }
  }
}; // end of winCheck

$('#loadButton').on('click', function () {
  $(this).fadeOut(function () {
      $('#loadBox').fadeOut();
      $('#nameEntryBox').delay(500).fadeIn()
  })
})

$('#winHover').hover(function () {
  $('#winCounter').toggle()
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
  player2IMG = $(this).html();
  $('#dropBtnP2').html( player2IMG )
  $('.p2Symbol').hide()
})

$('.p1Symbol').on('click', function () {
  player1IMG = $(this).html();
  $('#dropBtnP1').html( player1IMG )
  $('.p1Symbol').hide()
})

$('#symbolOk').on('click', function () { // create if to check picked symbols
  $('#pickMark').fadeOut()
  $('#wrapper').delay(500).fadeIn()
})

$('#resetButton').on('click', function () {
  $('.scoreBoard').css('visibility', 'hidden')
  resetBoard()
}); // end of resetbutton onclick
