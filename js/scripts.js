var skaterIpsumWords = ['early grab', 'wallie', 'sketch', 'sesh', 'gnar', 'hammer', 'Gonz', 'Wallenberg', 'oververt', 'EMB', 'carve', 'tic-tac', 'focused', 'grip tape', 'snake', 'primo', 'shinner', 'nollie', 'heelflip', 'mongo', 'no comply', '5-0', 'Tha Muska', 'thrasher', 'Jamie Thomas', 'deck', 'old school', '7-stair', 'handrail', 'bail', 'switch', 'stance', 'game of SKATE', 'DIY spot', 'street', 'park', 'tech'];
var output = "";
var totalOutput = "";

function returnRandomWord() {
  return skaterIpsumWords[Math.floor(Math.random() * skaterIpsumWords.length)];
}

function getIpsum(paragraphs) {
  for (i = 0; i < parseInt(paragraphs); i++) {
    output = "<p>";
    while (output.length < 360) {
      output += returnRandomWord();
      output += " ";
    }
    output += returnRandomWord() + "</p>";
    totalOutput += output;
  }
  return totalOutput;
}

$(document).ready(function() {
  $('#skaterIpsum').submit(function(event) {
    event.preventDefault();
    totalOutput = "";
    $('#yourIpsum').html('');
    $('#yourIpsum').append(getIpsum($('#paragraphs').val()));
  });
;});
