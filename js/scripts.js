//business logic
function Player(name) {
  this.name = name;
  this.turnTotal = 0;
  this.score = 0;
};

Player.prototype.methodName = function () {
  return this.turnTotal + this.score;
};

function rollDice() {
  return Math.floor(Math.random() * (5 - 1 + 1)) + 1;
};

function dice(diceNumber) {
  $("#dice p").text(diceNumber);
};

function disablePlayer1() {
  $("#player2").find("button").prop("disabled", false);
  $("#player1").find("button").prop("disabled", true);
};

function disablePlayer2() {
  $("#player1").find("button").prop("disabled", false);
  $("#player2").find("button").prop("disabled", true);
};

var player1;
var player2;

//user interface logic
$(function() {
  $("form#player-entry").submit(function(event) {
    event.preventDefault();

    $(this).hide();
    $("#game").show();

    var player1Name = $("input#player1-name").val();
    var player2Name = $("input#player2-name").val();
    player1 = new Player(player1Name);
    player2 = new Player(player2Name);

    $(".player1-name").text(player1.name);
    $(".player2-name").text(player2.name);

    $("#player2").find("button").prop("disabled", true);
  });

  $("button#roll1").click(function() {
    var diceNumber = rollDice();
    if (diceNumber === 1) {
      dice(diceNumber);
      $(".player1-turn-total").text("0");
      player1.turnTotal = 0;
      disablePlayer1();
    } else {
      dice(diceNumber);
      player1.turnTotal += diceNumber;
      $(".player1-turn-total").text(player1.turnTotal);
    }
  });

  $("button#roll2").click(function() {
    var diceNumber = rollDice();
    if (diceNumber === 1) {
      dice(diceNumber);
      $(".player2-turn-total").text("0");
      player2.turnTotal = 0;
      disablePlayer2();
    } else {
      dice(diceNumber);
      player2.turnTotal += diceNumber;
      $(".player2-turn-total").text(player2.turnTotal);
    }
  });

  $("button#reset-game").click(function() {
    location.reload();
  });
});
