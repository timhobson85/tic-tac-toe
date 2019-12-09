// creating empty global arrays
let $tL = null
let $tM = null
let $tR = null
let $mL = null
let $mM = null
let $mR = null
let $bL = null
let $bM = null
let $bR = null
let square = null
let player = null
let turnCount = null
let matchCount = null

$(document).ready(function () { // run after document is loaded

  $tL = $('#tL')
  $tM = $('#tM')
  $tR = $('#tR')
  $mL = $('#mL')
  $mM = $('#mM')
  $mR = $('#mR')
  $bL = $('#bL')
  $bM = $('#bM')
  $bR = $('#bR')




  $('.squares').on('click', function (event) { // this places X in the corresponing object value.
    if (turnCount % 2 === 0) {
      player = 1
      $(this).css( `backgroundColor`, `yellow`)
    } else {
      player = 2
      $(this).css( `backgroundColor`, `fuchsia`)
      }
    turnCount++
    console.log(turnCount);
    square = $(this).attr('id');
    gameObject[square] = player
    if (turnCount >= 5) {
      loopWins();
    }
  }); // end of onclick


//basic game
$('#startButton').on('click', function () {
  for (var key in gameObject) { //reset object
    if (gameObject.hasOwnProperty(key)) {
      gameObject[key] = null
    }
  }
  turnCount = null
  console.log(turnCount);
  $(this).html( 'reset' );
  $('.squares').css('backgroundColor', 'aqua'); // turn this into a reset gameboard function
  console.log(`startGame`);

  // startGame();

}) // end of startbutton onclick



}); // end of document ready

const gameObject = {

  tL: null, tM: null, tR: null,
  mL: null, mM: null, mR: null,
  bL: null, bM: null, bR: null

}; // object for empty board

// how to create solve cases
// objects or arrays
// start with X and O or use 1 and 2 or even 1 & 0, that way I can change them to anything later on.
//


//square.onclick.run function
//firstclick player 1
//second click player 2
//repeat til win or draw

//need to stop entering value if already clicked
//need to figure out at least one win condition for now. lets do top 2.

const winConditions = [

  {
    tL: 0001, tM: 0001, tR: 0001,

        },

  {

    mL: 0001, mM: 0001, mR: 0001,
        },

  {


    bL: 0001, bM: 0001, bR: 0001
  },

  {


        },

  {
    tL: 0001,
    mL: 0001,
    bL: 0001,    },

  {
     tM: 0001,
     mM: 0001,
     bM: 0001,   },

  {
      tR: 0001,
      mR: 0001,
      bR: 0001
  },

  {
    tL: 0001,
     mM: 0001,
      bR: 0001
  },

  {
      tR: 0001,
     mM: 0001,
    bL: 0001,    },

] // end of winConditions array.

const loopWins = function () {
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
} // end of loopwins

//so run loop of their turn, their player number = true in the arrays so that it can match against the solve condition object.


// const winConditions = [
//
//   {
//     tL: 0001, tM: 0001, tR: 0001,
//     mL: null, mM: null, mR: null,
//     bL: null, bM: null, bR: null
//   },
//
//   {
//     tL: null, tM: null, tR: null,
//     mL: 0001, mM: 0001, mR: 0001,
//     bL: null, bM: null, bR: null
//   },
//
//   {
//     tL: null, tM: null, tR: null,
//     mL: null, mM: null, mR: null,
//     bL: 0001, bM: 0001, bR: 0001
//   },
//
//   {
//     tL: null, tM: null, tR: null,
//     mL: null, mM: null, mR: null,
//     bL: null, bM: null, bR: null
//   },
//
//   {
//     tL: 0001, tM: null, tR: null,
//     mL: 0001, mM: null, mR: null,
//     bL: 0001, bM: null, bR: null
//   },
//
//   {
//     tL: null, tM: 0001, tR: null,
//     mL: null, mM: 0001, mR: null,
//     bL: null, bM: 0001, bR: null
//   },
//
//   {
//     tL: null, tM: null, tR: 0001,
//     mL: null, mM: null, mR: 0001,
//     bL: null, bM: null, bR: 0001
//   },
//
//   {
//     tL: 0001, tM: null, tR: null,
//     mL: null, mM: 0001, mR: null,
//     bL: null, bM: null, bR: 0001
//   },
//
//   {
//     tL: null, tM: null, tR: 0001,
//     mL: null, mM: 0001, mR: null,
//     bL: 0001, bM: null, bR: null
//   },
//
// ] // end of winConditions array.
