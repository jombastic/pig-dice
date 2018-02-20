//business logic
function Player(name) {
  this.name = name;
  this.turnTotal = 0;
  this.score = 0;
};

Player.prototype.totalScore = function () {
  this.score += this.turnTotal;
  return this.score;
};

function rollDice() {
  return Math.floor(Math.random() * (6 - 1 + 1)) + 1;
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
var players = [];

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
    players.push(player1, player2);

    $(".player1-name").text(player1.name);
    $(".player2-name").text(player2.name);

    $("#player2").find("button").prop("disabled", true);
  });

  $("button.roll").click(function(event) {
    var id = $(event.currentTarget).val();
    console.log(id);
    var diceNumber = rollDice();
    if (diceNumber === 1) {
      dice(diceNumber);
      $(".player" + id + "-turn-total").text("0");
      players[id].turnTotal = 0;
      if (id === "1") {
        disablePlayer1();
      } else if (id === "2") {
        disablePlayer2();
      }
    } else {
      dice(diceNumber);
      players[id].turnTotal += diceNumber;
      $(".player" + id + "-turn-total").text(players[id].turnTotal);
    }
  });

  $("button.hold").click(function(event) {
    var id = $(event.currentTarget).val();
    console.log(id);
    $(".player" + id + "-score").text(players[id].totalScore());
    players[id].turnTotal = 0;
    $(".player" + id + "-turn-total").text("0");
    if (id === "1") {
      disablePlayer1();
    } else if (id === "2") {
      disablePlayer2();
    }
  });

  $("button#reset-game").click(function() {
    location.reload();
  });
});
