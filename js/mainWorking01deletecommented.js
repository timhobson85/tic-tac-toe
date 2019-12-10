
let square = null
let player = null
let turnCount = null
let matchCount = null
let player1Turns = []
let player2Turns = []
let currentPlayer = null
let isBoxFree = null
let winner = null

$(document).ready(function () { // run after document is loaded

  const checkBoxIfClicked = function ( boxID ) {
    isBoxFree = null
    for (var i = 0; i < player1Turns.length; i++) {
      console.log(player1Turns[i] == boxID)
      if (player1Turns[i] == boxID ) {
        return isBoxFree = false
      }
    }
    for (var x = 0; x < player2Turns.length; x++) {
      console.log(player2Turns[i] == boxID)
      if (player2Turns[x] == boxID ) {
        return isBoxFree = false
      }
    }
  };

  $('.squares').on('click', function (event) { // this places player number in the corresponing object value.
    square = $(this).attr('id'); // records the ID of the square
    checkBoxIfClicked( square )
    if (isBoxFree === false) {
    } else {
      if (turnCount % 2 === 0) { // turn 1 = player1, turn 2 = player2, etc...)
      player = 1
      currentPlayer = player1Turns
      $(this).css( `backgroundColor`, `yellow`)
    } else {
      player = 2
      currentPlayer = player2Turns
      $(this).css( `backgroundColor`, `fuchsia`)
      }
    turnCount++ // adds 1 to turnCount for each click
    currentPlayer.push( square ); // pushes the square ID into the array
    if (turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
      loopWinsArray(); // runs the win function
    }
  }
  }); // end of onclick

  $('#startButton').on('click', function () {
    turnCount = null
    player1Turns = []
    player2Turns = [] // put in reset function
    console.log(turnCount);
    $(this).html( 'reset' );
    $('.squares').css('backgroundColor', 'aqua'); // turn this into a reset gameboard function
    console.log(`startGame`);


  }); // end of startbutton onclick

}); // end of document ready


const winConditionsArray = [

  [ 11, 12, 13 ],

  [ 21, 22, 23 ],

  [ 31, 32, 33 ],

  [ 11, 21, 31 ],

  [ 12, 22, 32 ],

  [ 13, 23, 33 ],

  [ 11, 22, 33 ],

  [ 13, 22, 31 ]

] // end of winConditions array.

const winConditionsObjectsArray = [

  { 11: true, 12: true, 13: true },

  { 21: true, 22: true, 23: true },

  { 31: true, 32: true, 33: true },

  { 11: true, 21: true, 31: true },

  { 12: true, 22: true, 32: true },

  { 13: true, 23: true, 33: true },

  { 11: true, 22: true, 33: true },

  { 13: true, 22: true, 31: true }

] // end of winConditions array.

const loopWinsArray = function () {
  for (var i = 0; i < winConditionsArray.length; i++) { // loops into the main array of all win conditions
    matchCount = 0
    for (var x = 0; x < winConditionsArray[x].length; x++) { // loops through the current array in the array
      checkForMatch = winConditionsArray[i][x]
      for (var y = 0; y < currentPlayer.length; y++) {
        // console.log(currentPlayer[y])
        if (checkForMatch == currentPlayer[y]) {
          matchCount++
          if (matchCount === 3) {
            console.log( `WIN!`)
            return (`winner is player`, player)
          }
        }
      }
    }
  }
}
