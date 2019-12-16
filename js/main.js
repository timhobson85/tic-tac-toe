const tictactoe = {

  gameState : {
    turnCount : null,
    player : null,
    playerMark : null,
    gameResult : null,
    gameOver : null,
    winListItem : null,
    playerIMG : null,
    $ul : $('ul#wins'),
    $winText : $('#winText'),
    $winName : $('#winName')
  },

  gameBoard : [
    null, null, null, null, null, null, null, null, null
  ],

  winConditionsArray : [

    [ 0, 1, 2 ],

    [ 3, 4, 5 ],

    [ 6, 7, 8 ],

    [ 0, 3, 6 ],

    [ 1, 4, 7 ],

    [ 2, 5, 8 ],

    [ 0, 4, 8 ],

    [ 2, 4, 6 ]

  ], // end of winConditionsArray

  playerInfo : {
    player1Name: null, player1IMG: null, player2Name: null, player2IMG: null
  },

  resetBoard : function () {
    $('.squares').html('')
    $('#resetButton').animate({width: "50px"}, 500)
    this.gameState.winListItem = null
    this.gameState.gameOver = false
    this.gameState.turnCount = 0
    this.gameState.gameResult = null
    this.gameBoard = [ null, null, null, null, null, null, null, null, null ]
  },

  setPlayer : function () { // use object for players and change this
    if (this.gameState.turnCount % 2 === 0) {
      this.gameState.player = this.playerInfo.player1Name
      this.gameState.playerIMG = this.playerInfo.player1IMG
      this.gameState.playerMark = `X`
    } else {
      this.gameState.player = this.playerInfo.player2Name
      this.gameState.playerIMG = this.playerInfo.player2IMG
      this.gameState.playerMark = `O`
    }
    $('#turntext').show()
    $('#turntext').html(`it's ${this.gameState.player}'s turn`).delay(1500).fadeOut()
    this.gameState.turnCount++
  }, //create arrau for playerdetails

  checkBoxUsed : function () {
    if (this.gameBoard[boxID] === null) {
      return false
    } else {
      $('#turntext').show()
      $('#turntext').html(`box is taken, pick again`).delay(1500).fadeOut()
      return true
    }
  },

  endGame : function () {
    if (this.gameState.gameResult === `win`) {
      this.gameState.winListItem = `${this.gameState.player}-${this.gameState.gameResult}-${this.gameState.playerIMG}`
      this.scoreBoard()
      return this.gameState.gameOver = true
    } else if (this.gameState.gameResult === `draw`) {
      this.gameState.winListItem = `${this.gameState.gameResult}`
      this.scoreBoard()
      return this.gameState.gameOver = true
    } else {
      return false
    }
  },

  placeMark : function () {
    $(`#${boxID}`).html(`<img src="images/${this.gameState.playerIMG}.png">`)
    this.gameBoard[boxID] = this.gameState.playerMark; // pushes the this.playerMark( X or O ) into the array
  },

  scoreBoard : function () {
    if (this.gameState.gameResult === `win`) {
      this.gameState.$winName.html(`congratulations ${this.gameState.player}`)
      this.gameState.$winText.html(`you won the game playing as ${this.gameState.playerIMG}`)
    } else {
      this.gameState.$winName.html(`what a shame`)
      this.gameState.$winText.html(`the game ended in a draw`)
    }
    $('#resetButton').css('width', '200px')
    $('.scoreBoard').css('visibility', 'visible')
    $('#scoreBoardOk').on('click', function () {
    $('.scoreBoard').css('visibility', 'hidden')
    })
    this.winCounter();
  },

  winCounter : function () {
    this.gameState.$ul.html(`<li>${this.gameState.winListItem}</li>` + this.gameState.$ul.html())
    $('#winCounter').show().delay(2500).fadeOut(2000)
  },

  winCheck : function () {
    if (this.gameState.turnCount < 5 ) {
      return
    } else {
      for (let i = 0; i < this.winConditionsArray.length; i++) {
        let solve = this.winConditionsArray[i]
        if ( this.gameBoard[solve[0]] && ((this.gameBoard[solve[0]] === this.gameBoard[solve[1]]) && (this.gameBoard[solve[1]] === this.gameBoard[solve[2]]))) {
          return this.gameState.gameResult = `win`
        }
      }
      if (this.gameState.turnCount === 9) {
        return this.gameState.gameResult = `draw`
      }
    }
  }, // end of winCheck

} // end of tictactoe

$('.squares').on('click', function () { // this places player number in the corresponing object value.
  if (tictactoe.gameState.gameOver) {
    return
  } else
  boxID = $(this).attr('id'); // records the ID of the square
    if ( tictactoe.checkBoxUsed( boxID ) ) { // try make this opposite, so if true will send back to middle, or continue with turn.
      return false
    } else {
    tictactoe.setPlayer();
    tictactoe.placeMark();
    tictactoe.winCheck();
    tictactoe.endGame();
  }
}); // end of onclick

$('#loadButton').on('click', function () {
  $(this).fadeOut(function () {
      $('#loadBox').fadeOut();
      $('#nameEntryBox').delay(500).fadeIn()
  })
})

$('#winHover').hover(function () {
  $('#winCounter').toggle()
})

$('#options').on(`click`, function () {
  $('#optionsAppear').toggle()
})

$('#changeNames').on('click', function () {
  $('#optionsAppear').toggle()
  $('#wrapper').toggle()
  $('#nameEntryBox').fadeIn()
})


$('#submitName').on('click', function () { // create a check for no input?
  tictactoe.playerInfo.player1Name = ( $('#enterPlayer1Name').val() );
  tictactoe.playerInfo.player2Name = ( $('#enterPlayer2Name').val() );
  $('#dropBtnP1').html( tictactoe.playerInfo.player1Name );
  $('#dropBtnP2').html( tictactoe.playerInfo.player2Name );
  $('#nameEntryBox').fadeOut()
  $('#pickMark').delay(500).fadeIn()
} );

$('.p2Symbol').on('click', function () {
  $('.p2Symbol').css('backgroundColor', 'whitesmoke')
  tictactoe.playerInfo.player2IMG = $(this).html();
  // $('#dropBtnP2').html( tictactoe.playerInfo.player2IMG )
  // $('.p2Symbol').hide()
  $(this).css('backgroundColor', 'pink')
})

$('.p1Symbol').on('click', function () {
  $('.p1Symbol').css('backgroundColor', 'whitesmoke')
  tictactoe.playerInfo.player1IMG = $(this).html();
  $(this).css('backgroundColor', 'pink')
})

$('#symbolOk').on('click', function () { // create if to check picked symbols
  $('#pickMark').fadeOut()
  $('#wrapper').delay(500).fadeIn()
})

$('#resetButton').on('click', function () {
  $('.scoreBoard').css('visibility', 'hidden')
  tictactoe.resetBoard()
}); // end of resetbutton onclick
