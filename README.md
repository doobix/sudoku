# sudoku

A Sudoku board game written in HTML, CSS, and JavaScript. There is only a single board for now, with random blank squares.

## Demo

Checkout a live sudoku game here: http://doobix.github.io/sudoku/

## Technologies Used

+ jQuery
+ Sass/Compass

The jQuery library makes development very simple, with easy-to-use methods for selecting elements, adding event listeners, and creating animation effects.

Sass/Compass makes coding CSS faster with the ability to use variables, nested rules, and mixins.

## File Structure

    /css/style.css - Stylesheet
    /js/sudoku.js - Sudoku game functions
    index.html - Main page

## Usage

### A simple usage example

First, create a div for containing the sudoku board. It must have the id of "sudokuBoard".

    <div id="sudokuBoard"></div>

And then instantiate the Sudoku board game:

    var sudokuBoard = new Sudoku();

### Advanced usage example

To use any element ID of your choice, simply put it as the first argument. You may enter a 2nd argument (from 0.01 to 1.00) to change the difficulty of the game. The higher the number, the more blank squares there will be.

    var sudokuBoard = new Sudoku('#DOMwithSudoku', 0.85);

## Development

Compass is needed to compile the Sass files. Navigate to the folder in terminal and run this command:

    compass watch

## Installing Dependencies

The jQuery script is loaded from Google's CDN. To use a local copy of jQuery, use Bower. Navigate to the folder and run these commands:

    sudo npm install -g bower
    bower install

## Roadmap

+ Implement a working sudoku board generator. For the time being, this only outputs one board.
+ Implement an input slider for the player to select the difficulty of the sudoku board. The higher the difficulty, the more blank squares there will be.
+ Set up a node.js server to use a template engine.
+ Set up a database to keep track of high scores.
