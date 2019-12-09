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

    square = $(this).attr('id');
    gameObject[square] = `X`
    console.log(square);
    console.log(gameObject);

  }); // end of .onclick for squares


}); // end of document ready

const gameObject = {

  tL: null, tM: null, tR: null,
  mL: null, mM: null, mR: null,
  bL: null, bM: null, bR: null

}; // object for empty board

// how to create solve cases
// objects or arrays
