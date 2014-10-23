// Sudoku Board Game
// @param {string} element - The DOM element that will have the sudoku game.
// @param {float} difficulty - The difficulty of the game,from 0.01 to 1.00.
// Default difficulty = 0.63
var Sudoku = function(element, difficulty) {
  this.element = element || '#sudokuBoard';
  this.difficulty = difficulty || 0.63;
  this._board = this.generateValues();
  this._answers = {};

  // Check which input field is being typed in
  $(this.element).on('keyup', function(event){
    var input = event.target;
    var inputId = input.id;
    var inputVal = parseInt($(input).val(), 10);
    this.checkAnswer(inputId, inputVal);
  }.bind(this));
};

// Create a section with 3x3 input fields
Sudoku.prototype.createSection = function(sectionNum) {
  var row = 0;
  var section = '<div class="section section' + sectionNum + '">';

  for (var i = 0; i < 9; i++) {
    // Calculate the board's row index
    var rowIndex;
    if (sectionNum < 3) {
      rowIndex = row;
    } else if (sectionNum < 6) {
      rowIndex = 3 + row;
    } else {
      rowIndex = 6 + row;
    }

    // Calculate the column index
    var colIndex = ((sectionNum % 3) * 3) + i % 3;

    // Get the value from the board's row column
    var value = this._board[rowIndex][colIndex];

    var isBlank = false;
    var slot = '' + sectionNum + i;

    // Create random blank input boxes
    if (Math.random() < this.difficulty) {
      isBlank = true;
      this._answers['slot' + slot] = {
        value: value,
        isCorrect: false
      };
      this._numOfBlanks++;
    }

    // Display a blank input box
    if (isBlank) {
      section += '<input class="slot" id="slot' + slot +  '" type="text"' + 
                 'maxlength="1" />';
    } else { // Display a value in the input box and disable it
      section += '<input class="slot" id="slot' + slot +  '" type="text"' + 
                 'value="' + value + '" disabled="disabled" maxlength="1" />';
    }
    
    // Add a line break every 3 numbers
    if (i % 3 === 2) {
      section += '<br />';
      row++;
    }
  }

  section += '</div>';
  return section;
};

// Create a sudoku box with 3x3 sections
Sudoku.prototype.createBoard = function() {
  var sudokuBoard = '';
  for (var i = 0; i < 9; i++) {
    sudokuBoard += '<div class="sudokuSection">';
    sudokuBoard += this.createSection(i);
    sudokuBoard += '</div>';
  }
  $(this.element).html(sudokuBoard);
};

// Check if user input matches the correct answer
Sudoku.prototype.checkAnswer = function(slot, value) {
  if (this._answers[slot].value === value) {
    this._answers[slot].isCorrect = true;
  } else {
    this._answers[slot].isCorrect = false;
  }

  this.validator();
};

// Check entire answer object to see if all answers are true
Sudoku.prototype.validator = function() {
  for (var slot in this._answers) {
    if (!this._answers[slot].isCorrect) {
      return false;
    }
  }
  return true;
};

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
};