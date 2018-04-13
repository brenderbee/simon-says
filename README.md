# Simon Says

#### A program that allows users to play Simon Says. April 6, 2018.

#### By **Brenda Franco**

## Description

A website created with CSS, Javascript, and HTML where a user can play Simon Says with the browser.


### Specs
* Program returns random number between 0 and 3 on submit event.
  * Input: submit
  * Output: "1"
* Program returns an array of random numbers between 0 and 3 on submit event.
  * Input: submit
  * Output: [1,2,0,3,2]
* Program allows accepts a click event and adds a random number to the output array.
  * Input: submit
  * Output: [0]
  * Input: click
  * Output: [0,3]
* Program compares value of click event to random number array and allows the program to run on true.
  * Input: submit
  * Output: [0]
  * Input: click.val() = 0
  * Output: [0,3]
* Program compares value of multiple click event to random number array and allows the program to run on true.
  * Input: submit
  * Output: [0]
  * Input: click.val() = 0
  * Output: [0,3]
  * Input: click.val() = 0, click.val() = 3
  * Output: [0,3, 1]
* Program compares value of multiple click event to random number array and stops the program on false.
  * Input: submit
  * Output: [0]
  * Input: click.val() = 1
  * Output: "Lose"

## Setup/Installation Requirements

1. Clone this repository.
2. Open index.html in browser to view site.
3. Edit associated files in preferred text editor.
4. View gh-pages: https://brenderbee.github.io/simon-says

## Known Bugs
* Click event are not disabled during Simon's turn.

## Technologies Used
  * HTML
  * CSS
  * Vanilla Javascript
  * Bootstrap v3.3.7
  * JQuery v3.3.1

## Support and contact details

_Email no one with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Brenda Franco}_**
