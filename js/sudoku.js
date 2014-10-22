// Sudoku Board Game
// Takes an argument from 0.00 to 1.00 on how hard the game will be.
// Default difficulty: 0.63
var Sudoku = function(difficulty) {
  this.board = this.generateValues();
  this.difficulty = difficulty || 0.63;
}

// Create a section with 3x3 input fields
Sudoku.prototype.create3x3section = function(sectionNum) {
  var section = '<div class="section section' + sectionNum + '">';
  var offset = 0;

  for (var i = 0; i < 9; i++) {
    // Calculate the board's row and column indices
    var newSectionNum = (sectionNum % 3) * 3;
    var colIndex = newSectionNum + offset;
    var rowIndex = newSectionNum + i % 3;
    var value = this.board[colIndex][rowIndex];
    var isBlank = false;

    // Create random blank input boxes
    if (Math.random() < this.difficulty) {
      isBlank = true;
    }

    // Display a blank input box
    if (isBlank) {
      section += '<input class="num num' + sectionNum + i +  '" type="text"' + 
                 'value="" />';
    } else { // Display a value in the input box and disable it
      section += '<input class="num num' + sectionNum + i +  '" type="text"' + 
                 'value="' + value + '" disabled="disabled" />';
    }
    
    if (i % 3 === 2) {
      section += '<br />';
      offset++;
    }
  }
  section += '</div>'
  return section;
}

// Create a sudoku box with 3x3 sections
Sudoku.prototype.createBoard = function(element) {
  var sudokuBoard = '';
  for (var i = 0; i < 9; i++) {
    sudokuBoard += '<div class="sudokuBoard">';
    sudokuBoard += this.create3x3section(i);
    sudokuBoard += '</div>';
  }
  $(element).html(sudokuBoard);
}

// Generate values for a sudoku board
Sudoku.prototype.generateValues = function() {
  var board = [];

  board = [
    [5,3,4,6,7,8,9,1,2],
    [6,7,2,1,9,5,3,4,8],
    [1,9,8,3,4,2,5,6,7],
    [8,5,9,7,6,1,4,2,3],
    [4,2,6,8,5,3,7,9,1],
    [7,1,3,9,2,4,8,5,6],
    [9,6,1,5,3,7,2,8,4],
    [2,8,7,4,1,9,6,3,5],
    [3,4,5,2,8,6,1,7,9],
  ];

  return board;
}