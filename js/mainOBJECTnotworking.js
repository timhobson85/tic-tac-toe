
const playGame = {

  //webpage loads
  // click the circle to go to main screen
  // click start game
  // select icon
  // enter name
  // be prompted for who goes FIRST
  // click square
  //   check if square is used
  //   put symbol into array
  //   if 5 turns played check the win conditions
  //     if 9 turns have been played - report draw
  //     if win - report win
  //     record win/draw on the scoreboard
  //     pop up to congratulate the winner
  // click restart game

  enterPage :

    $('#loadButton').on('click', function () {
      $(this).fadeOut(function () {
        $('#blankscreen').delay(1000).fadeOut();
      })
    }),  // end of enter page

  resetBoard : function() {
    let gameBoard = [ null, null, null, null, null, null, null, null, null ]
    let turnCount = null
    let gameResult = null
    let gameOver = null
    let $addWin = null
    let winCount = null
    let winListItem = null
    const $ul = $('ul#wins')
    const $winText = $('#winText')
    const $winName = $('#winName')
    const $scoreBoard = $('.scoreBoard')
    $('.squares').html('') // change to img src
  },

  setPlayer : function () { // pick who's turn it is
    if (this.turnCount % 2 === 0) {  // turn 1 = player1, turn 2 = player2, etc...)
      let player = 1
      let playerMark = `X`
      let playerColor = `lavender`
    } else {
      let player = 2
      let playerMark = `O`
      let playerColor = `lightgreen`
    }
    this.turnCount++
  },

  checkBoxUsed : function () {
    if (this.gameBoard[boxID] === null) {
      return false
    } else {
      console.log(`box is taken, pick again`) // make this an alert
      return true
    }
  },

  endGame : function () {
    if (this.gameResult === `win`) {
      console.log(`${player}-${playerMark}-${this.gameResult}`); // delete later
      this.winListItem = `Player ${player}-${playerMark} / ${this.gameResult}`
      scoreBoard()
      return this.gameOver = true
    } else if (this.gameResult === `draw`) {
      console.log(`${this.gameResult}`); // delete later
      this.winListItem = `${this.gameResult}`
      scoreBoard()
      return this.gameOver = true
    } else {
      return false
    }
  },

  scoreBoard : function () {
    // this.$scoreBoard = $('<div class="scoreBoard">'); // could just make this show an already hidden div
    // this.$scoreBoard.css({
    // }); // end of blob div properties
    // this.$scoreBoard.html(`Congratulations Player ${player}! \n You won the game playing as ${playerMark}`)
    this.$winName.html(`Congratulations Player ${player}!`)
    this.$winText.html(`You won the game playing as ${playerMark}`)
    $('.scoreBoard').css('visibility', 'visible') // creates the blob
    $('#scoreBoardOk').on('click', function () {
      console.log(`hello`);
      $('.scoreBoard').css('visibility', 'hidden')
    })
    winCounter();
  },

  winCounter : function () { // this can be added to another easily
    //create div on FIRST win
    // take player & player mark(as it may change)
    // amend it to a list item to make it scroll down the page
    // this.$addWin = $('<li>')
    // this.$addWin.html(`hello`)
    // this.$addWin.append($(`ul`))
    this.$ul.html(`<li>${this.winListItem}</li>` + this.$ul.html())
  },

  clickStart :

    $('#startButton').on('click', function () {
    $('.scoreBoard').css('visibility', 'hidden')
    resetBoard()
    $(this).html( 'reset' );
    $('.squares').css('backgroundColor', '#fcfcfc'); // turn this into a reset gameboard function
    console.log(`startGame`)
  }), // end of startbutton onclick

  clickSquare :
    $('.squares').on('click', function () { // this places player number in the corresponing object value.
    if (this.gameOver === true) {
      return
    } else
    boxID = $(this).attr('id'); // records the ID of the square
    console.log(boxID);
      if ( checkBoxUsed( boxID ) ) { // try make this opposite, so if true will send back to middle, or continue with turn.
        return false
      } else {
      setPlayer();
      console.log(this.gameResult);
      // $(this).css( `backgroundColor`, playerColor )
      $(this).html(playerMark)
      this.gameBoard[boxID] = playerMark; // pushes the playerMark( X or O ) into the array
      if (this.turnCount >= 5) { // minimum number of turns to get a win, so doesn't search til now.
        winCheck(); // runs the win function
        endGame();
      }
    }
  }), // end of onclick

  winCheck : function () {
    if (this.turnCount === 9) {
        return this.gameResult = `draw`
    } if ( (playerMark === this.gameBoard[0]) && ((this.gameBoard[0] === this.gameBoard[1]) && (this.gameBoard[1] === this.gameBoard[2]))) {
      console.log(`win1`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[3]) && ((this.gameBoard[3] === this.gameBoard[4]) && (this.gameBoard[3] === this.gameBoard[5]))) {
      console.log(`win2`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[6]) && ((this.gameBoard[6] === this.gameBoard[7]) && (this.gameBoard[6] === this.gameBoard[8]))) {
      console.log(`win3`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[0]) && ((this.gameBoard[0] === this.gameBoard[3]) && (this.gameBoard[0] === this.gameBoard[6]))) {
      console.log(`win4`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[1]) && ((this.gameBoard[1] === this.gameBoard[4]) && (this.gameBoard[1] === this.gameBoard[7]))) {
      console.log(`win5`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[2]) && ((this.gameBoard[2] === this.gameBoard[5]) && (this.gameBoard[2] === this.gameBoard[8]))) {
      console.log(`win6`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[0]) && ((this.gameBoard[0] === this.gameBoard[4]) && (this.gameBoard[0] === this.gameBoard[8]))) {
      console.log(`win7`);
      return this.gameResult = `win`
    } else if ((playerMark && this.gameBoard[2]) && ((this.gameBoard[2] === this.gameBoard[4]) && (this.gameBoard[2] === this.gameBoard[6]))) {
      console.log(`win8`);
      return this.gameResult = `win`
    }
  }, // end of winCheck


} // end of playGame


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
//     console.log(this.gameBoard[1])
//     // console.log(0 += colomns)
//     // console.log(0 += (colomns+1))
//     // console.log((colomns-1) += (colomns-1))
//   }
// }
