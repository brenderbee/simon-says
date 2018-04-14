// Business Logic
var counter = 0;
var click = 0;

function Player(counts) {
  this.counts = [];
}

function Quarter(value, sound, name) {
  this.value = value;
  this.sound = sound;
  this.name = name;
}

var simon = new Player([]);
var newPlayer = new Player([]);

var sndLose = new Audio("sound/lose.wav");
var sndTopRight = new Audio("sound/200.wav");
var sndBottomRight = new Audio("sound/300.wav");
var sndBottomLeft = new Audio("sound/400.wav");
var sndTopLeft = new Audio("sound/500.wav");

var topRight = new Quarter(0, sndTopRight, "top-right");
var bottomRight = new Quarter(1, sndBottomRight, "bottom-right");
var bottomLeft = new Quarter(2, sndBottomLeft, "bottom-left");
var topLeft = new Quarter(3, sndTopLeft, "top-left");

Player.prototype.clearFields = function () {
  this.counts = [];
};

Quarter.prototype.playSound = function () {
  this.sound.play();
  setTimeout(function(){this.sound.pause()}, 500);
};

function light(number) {
  var quarters = [topRight, bottomRight, bottomLeft, topLeft];
  quarters.forEach(function(quarter) {
    if (number === quarter.value) {
      quarter.sound.play();
      setTimeout(function(){quarter.sound.pause()}, 500);
      $("." + quarter.name).addClass(quarter.name + "-glow");
      setTimeout(function(){$("." + quarter.name).removeClass(quarter.name + "-glow")}, 500);
    }
  });
}

function replay(array) {
  array.forEach(function(item, index) {
    var startTime = (index + 1) * 800;
    setTimeout(function(){light(item)}, startTime);
  });
}

function random() {
  var randomNumber = (Math.floor(Math.random()*4));
  return randomNumber;
}

function resetGame() {
  counter = 0;
  click = 0;
  simon.clearFields();
  newPlayer.clearFields();
  $(".start").show();
}

function simonTurn() {
  click = 0;
  simon.counts.push(random());
  counter += 1
  if (counter === 21) {
    resetGame();
    return console.log("YOU WIN!");
  }
  $(".counter p").text(counter);
  replay(simon.counts);
}

function playerTurn(sound, number) {
  sound.play();
  setTimeout(function(){sound.pause()}, 500);
  if (simon.counts[click] === number && click < simon.counts.length - 1) {
    click += 1;
  } else if (simon.counts[click] === number && click === simon.counts.length - 1) {
    simonTurn();
  } else {
    sndLose.play();
    setTimeout(function(){sndLose.pause()}, 300);
    return resetGame();
  }
}

// User-Interface Logic
$(document).ready(function() {
  $(".start").click(function(event){
    event.preventDefault();

    counter = 1;

    simon.counts.push(random());

    replay(simon.counts);
    $(".counter p").text(counter);
    $(".start").hide();
  });
  $(".top-right").on( "click", function() {
    playerTurn(sndTopRight, 0);
  });
  // $(".top-right").click(function(){
  //   playerTurn(sndTopRight, 0);
  // });

  $(".bottom-right").click(function(){
    playerTurn(sndBottomRight, 1);
  });

  $(".bottom-left").click(function(){
    playerTurn(sndBottomLeft, 2);
  });

  $(".top-left").click(function(){
    playerTurn(sndTopLeft, 3);
  });
});
