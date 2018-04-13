var counter = 0;
var click = 0;

function Player(counts) {
  this.counts = [];
}

var simon = new Player([]);
var newPlayer = new Player([]);

var sndLose = new Audio("sound/lose.wav")
var sndTopRight = new Audio("sound/200.wav")
var sndBottomRight = new Audio("sound/300.wav")
var sndBottomLeft = new Audio("sound/400.wav")
var sndTopLeft = new Audio("sound/500.wav")

Player.prototype.getLength = function () {
  this.counts.length;
};

Player.prototype.clearFields = function () {
  this.counts = [];
};

function random() {
  var randomNumber = (Math.floor(Math.random()*4));
  return randomNumber;
}

function light(number) {
  if (number === 0) {
    sndTopRight.play();
    setTimeout(function(){sndTopRight.pause()}, 550);
    $(".top-right").addClass("top-right-glow");
    setTimeout(function(){$(".top-right").removeClass("top-right-glow")}, 500);
  } else if (number === 1) {
    sndBottomRight.play();
    setTimeout(function(){sndBottomRight.pause()}, 550);
    $(".bottom-right").addClass("bottom-right-glow");
    setTimeout(function(){$(".bottom-right").removeClass("bottom-right-glow")}, 500);
  } else if (number === 2) {
    sndBottomLeft.play();
    setTimeout(function(){sndBottomLeft.pause()}, 550);
    $(".bottom-left").addClass("bottom-left-glow");
    setTimeout(function(){$(".bottom-left").removeClass("bottom-left-glow")}, 500);
  } else {
    sndTopLeft.play();
    setTimeout(function(){sndTopLeft.pause()}, 550);
    $(".top-left").addClass("top-left-glow");
    setTimeout(function(){$(".top-left").removeClass("top-left-glow")}, 500);
  }
}

function replay(array) {
  array.forEach(function(item, index) {
    var startTime = (index + 1) * 1000;
    setTimeout(function(){light(item)}, startTime);
  });
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
  $(".counter p").text(counter);
  replay(simon.counts);
}


$(document).ready(function() {
  $(".start").click(function(event){
    event.preventDefault();

    counter = 1;

    simon.counts.push(random());

    replay(simon.counts);
    $(".counter p").text(counter);
    $(".start").hide();
  });

  $(".top-right").click(function(){
    sndTopRight.play();
    setTimeout(function(){sndTopRight.pause()}, 550);
    if (simon.counts[click] === 0 && click < simon.counts.length - 1) {
      click += 1;
    } else if (simon.counts[click] === 0 && click === simon.counts.length - 1) {
      simonTurn();
    } else {
      sndLose.play();
      setTimeout(function(){sndLose.pause()}, 300);
      return resetGame();
    }
  });

  $(".bottom-right").click(function(){
    sndBottomRight.play();
    setTimeout(function(){sndBottomRight.pause()}, 550);
    if (simon.counts[click] === 1 && click < simon.counts.length - 1) {
      click += 1;
    } else if (simon.counts[click] === 1 && click === simon.counts.length - 1) {
      simonTurn();
    } else {
      sndLose.play();
      setTimeout(function(){sndLose.pause()}, 300);
      return resetGame();
    }
  });

  $(".bottom-left").click(function(){
    sndBottomLeft.play();
    setTimeout(function(){sndBottomLeft.pause()}, 550);
    if (simon.counts[click] === 2 && click < simon.counts.length - 1) {
      click += 1;
    } else if (simon.counts[click] === 2 && click === simon.counts.length - 1) {
      simonTurn();
    } else {
      sndLose.play();
      setTimeout(function(){sndLose.pause()}, 300);
      return resetGame();
    }
  });

  $(".top-left").click(function(){
    sndTopLeft.play();
    setTimeout(function(){sndTopLeft.pause()}, 550);
    if (simon.counts[click] === 3 && click < simon.counts.length - 1) {
      click += 1;
    } else if (simon.counts[click] === 3 && click === simon.counts.length - 1) {
      simonTurn();
    } else {
      sndLose.play();
      setTimeout(function(){sndLose.pause()}, 300);
      return resetGame();
    }
  });
});
