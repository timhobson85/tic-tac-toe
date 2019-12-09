


// creating empty global arrays
// let $11 = null  // not needed as working with array
// let $12 = null
// let $13 = null
// let $21 = null
// let $22 = null
// let $23 = null
// let $31 = null
// let $32 = null
// let $33 = null
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

  // $11 = $('#11') // not needed as working with array
  // $12 = $('#12')
  // $13 = $('#13')
  // $21 = $('#21')
  // $22 = $('#22')
  // $23 = $('#23')
  // $31 = $('#31')
  // $32 = $('#32')
  // $33 = $('#33')

  //  this click function logs the players number (1 or 2) to the board object
  // $('.squares').on('click', function (event) { // this places playernumber in the corresponing object value.
  //   if (turnCount % 2 === 0) { // turn 1 = player1, turn 2 = player2, etc...)
  //     player = 1
  //     $(this).css( `backgroundColor`, `yellow`)
  //   } else {
  //     player = 2
  //     $(this).css( `backgroundColor`, `fuchsia`)
  //     }
  //   turnCount++ // adds 1 to turnCount for each click
  //   console.log(turnCount); // logging to check
  //   square = $(this).attr('id'); // records the ID of the square, and uses that to change the board object value
  //   gameObject[square] = player
  //   if (turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
  //     loopWinsObjects(); // runs the win function
  //   }
  // }); // end of onclick

  // check if the square has been clicked

  const checkBoxIfClicked = function ( boxID ) {
    isBoxFree = null
    for (var i = 0; i < player1Turns.length; i++) {
      console.log(`player's turn`, player1Turns[i])
      console.log(`box that was clicked`, boxID)
      console.log(player1Turns[i] == boxID)
      if (player1Turns[i] == boxID ) {
        console.log (`box clicked`)
        return isBoxFree = false
      }
    }
    for (var x = 0; x < player2Turns.length; x++) {
      console.log(`player's turn`, player2Turns[i])
      console.log(`box that was clicked`, boxID)
      console.log(player2Turns[i] == boxID)
      if (player2Turns[x] == boxID ) {
        console.log (`box clicked`)
        return isBoxFree = false
      }
    }
  };

  // this click function will log the players turn into an array
  $('.squares').on('click', function (event) { // this places player number in the corresponing object value.
    square = $(this).attr('id'); // records the ID of the square
    checkBoxIfClicked( square )
    if (isBoxFree === false) {
      return console.log(`pick another square`);
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
    console.log(`turn number`, turnCount, `for player`, player); // logging to check
    // square = $(this).attr('id'); // records the ID of the square
    currentPlayer.push( square ); // pushes the square ID into the array
    console.log(currentPlayer); // logging to check
    if (turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
      loopWinsArray(); // runs the win function
    }
  }
  }); // end of onclick



//basic game
$('#startButton').on('click', function () {
  // for (var key in gameObject) { //reset object
  //   if (gameObject.hasOwnProperty(key)) {
  //     gameObject[key] = null
  //   }
  // }
  turnCount = null
  player1Turns = []
  player2Turns = [] // put in reset function
  console.log(turnCount);
  $(this).html( 'reset' );
  $('.squares').css('backgroundColor', 'aqua'); // turn this into a reset gameboard function
  console.log(`startGame`);

  // startGame();
  //square.onclick.run function
  //firstclick player 1
  //second click player 2
  //repeat til win or draw

  }); // end of startbutton onclick

}); // end of document ready

const gameObject = {

  11: null, 12: null, 13: null,
  21: null, 22: null, 23: null,
  31: null, 32: null, 33: null

};

//need to stop entering value if already clicked
//have got it working for player 1

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



// loop winconditionarrys
// loop into first wincontition
// store 3 win positions into variables
// loop through the currentplayer to see if they match.

const loopWinsArray = function () {
  for (var i = 0; i < winConditionsArray.length; i++) { // loops into the main array of all win conditions
    // console.log(winConditionsArray[i])
    // console.log(i);
    matchCount = 0
    for (var x = 0; x < winConditionsArray[x].length; x++) { // loops through the current array in the array
      // console.log(winConditionsArray[i][x])
      // console.log(x);
      checkForMatch = winConditionsArray[i][x]
      // console.log(`does square match`, checkForMatch);
      for (var y = 0; y < currentPlayer.length; y++) {
        // console.log(currentPlayer[y])
        if (checkForMatch == currentPlayer[y]) {
          matchCount++
          // console.log(matchCount);
          if (matchCount === 3) {
            console.log( `WIN!`)
            return (`winner is player`, player)
          }
        // } else {
          // return false
        }
      }
    }
  }
}

//
// const loopWinsArray = function () {
//   // for (var i = 0; i < winConditionsArray.length; i++) {
//   //   console.log(winConditionsArray[i])
//   //   for (var i = 0; i < winConditionsArray[i].length; i++) {
//   //     console.log(winConditionsArray[i][i])
//   //   }
//   // }
//   storeWinVariables();
// } // end of loopWinsArray


const loopWinsObjects = function () { // can we take player as input here?
  for (var i = 0; i < winConditions.length; i++) {
    matchCount = 0
    for (var key in winConditions[i]) {
      if (winConditions[i][key] == gameObject[key] ) {
        console.log(`match!`);
        matchCount++

        if (matchCount === 3) {

          return console.log(`you win!`);

        } else if (turnCount === 9) {

          return console.log(`draw`);

        }
      }
    }
  }
} // end of loopWinsObjects

//so run loop of their turn, their player number = true in the arrays so that it can match against the solve condition object.


// create array with selected turns
//logic for a win if board is
// 11, 12, 13
// 21, 22, 23
// 31, 32, 33

// if 1, plus two (plus one plus two)
// if 2, minus one plus one
// if 3, mins two (minus one minus 2)

// so for 22 we would get

// 11, 33... 12, 32... 13, 31... 21, 23...

// 31 is
// 11, 21... 32, 33... 22, 13...

testObject1 = {
  key1: 1,
  key2: 2,
  key3: 3
}

testObject2 = {
  key1: 1,
  key2: 2,
  key3: 3
}

const compareTests = function ( a, b ) {

  // create an aray of property names
  let aProperties = Object.getOwnPropertyNames(a);
  console.log(aProperties);
  let bProperties = Object.getOwnPropertyNames(b);
  console.log(bProperties);
  // if number of properties are different, obj are not equiv ( i don't want this )
  if (aProperties.length != bProperties.length ) {
    return false
  }

  for (var i = 0; i < aProperties.length; i++) {
    var propertyName = aProperties[i];

    // if values of same property are not equal, objects are not equivalent
    if (a[propertyName] !== b[propertyName]) {
      return false
    }
  }

  // if we made it this far, object are considered equivalent
  return true
};
