# sudoku

A Sudoku board game written in HTML, CSS, and JavaScript. There is only a single board for now, with random blank squares.

## Technologies Used

+ jQuery
+ Sass/Compass

The jQuery library makes development very simple, with easy-to-use methods for selecting elements, adding event listeners, and creating animation effects.

Sass/Compass makes coding CSS faster with the ability to use variables, nested rules, and mixins.

## File Structure

    /css/style.css - Stylesheet
    /js/sudoku.js - Sudoku game functions
    index.html - Main page

## Development

Compass is needed to compile the Sass files. Navigate to the folder in terminal and run this command:

    compass watch

## Installing Dependencies

The jQuery script is loaded from Google's CDN. To use a local copy of jQuery, use Bower. Navigate to the folder and run these commands:

    sudo npm install -g bower
    bower install

## Roadmap

In the future, I want to implement a working sudoku board generator. For the time being, this only outputs one board.