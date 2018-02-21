//business logic
function Player(name) {
  this.name = name;
  this.turnTotal = 0;
  this.score = 0;
};

Player.prototype.totalScore = function() {
  this.score += this.turnTotal;
  return this.score;
};

Player.prototype.resetPlayer = function() {
  this.turnTotal = 0;
  this.score = 0;
};

function rollDice(numberOfDice) {
  if (numberOfDice === '1') {
    die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
  } else if (numberOfDice === '2') {
    die1 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    die2 = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
    diceSum = die1 + die2;
  }
};

function showDice(numberOfDice) {
  if (numberOfDice === '1') {
    $("p.die1").text(die1);
  } else if (numberOfDice === '2') {
    $("p.die1").text(die1);
    $("p.die2").text(die2);
  }
};

function disablePlayer1() {
  $("#player2").find("button").prop("disabled", false);
  $("#player1").find("button").prop("disabled", true);
};

function disablePlayer2() {
  $("#player1").find("button").prop("disabled", false);
  $("#player2").find("button").prop("disabled", true);
};

function disablePlayers() {
  $("#player1").find("button").prop("disabled", true);
  $("#player2").find("button").prop("disabled", true);
};

function giveTurn(id) {
  if (id === "1") {
    disablePlayer1();
  } else if (id === "2") {
    disablePlayer2();
  }
};

function endGame() {
  if (players[0].score >= 100) {
    alert(players[0].name + " wins!");
    disablePlayers();
  } else if (players[1].score >= 100) {
    alert(players[1].name + " wins!");
    disablePlayers();
  }
};

function restartGame() {
  players.forEach(function(player) {
    player.resetPlayer();
  });
  $(".player1-score").text("0");
  $(".player1-turn-total").text("0");
  $(".player2-score").text("0");
  $(".player2-turn-total").text("0");
  disablePlayer2();
};

var player1;
var player2;
var players = [];
var numberOfDice;
var die1;
var die2;
var diceSum;
var id;
var i;

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

    numberOfDice = $("input:radio[name=number-of-dice]:checked").val();

    $(".player1-name").text(player1.name);
    $(".player2-name").text(player2.name);

    $("#player2").find("button").prop("disabled", true);
  });

  $("button.roll").click(function(event) {
    id = $(event.currentTarget).val(); //you can also use 'this' as an alternative
    i = id - 1;
    rollDice(numberOfDice);
    showDice(numberOfDice);
    if (numberOfDice === '1') {
      if (die1 === 1) {
        $(".player" + id + "-turn-total").text("0");
        players[i].turnTotal = 0;
        giveTurn(id);
      } else {
        players[i].turnTotal += die1;
        $(".player" + id + "-turn-total").text(players[i].turnTotal);
      }
    } else if (numberOfDice === '2') {
      if ((die1 === 1) || (die2 === 1)) {
        $(".player" + id + "-turn-total").text("0");
        players[i].turnTotal = 0;
        giveTurn(id);
      } else if ((die1 === 1) && (die2 === 1)) {
        $(".player" + id + "-turn-total").text("0");
        players[i].turnTotal = 0;
        players[i].score = 0;
        giveTurn(id);
      } else if (die1 === die2) {
        players[i].turnTotal += diceSum;
        $(".player" + id + "-turn-total").text(players[i].turnTotal);
        $("#player" + id).find("button.hold").prop("disabled", true);
        alert("You scored a double! Now you must roll again.")
      } else {
        players[i].turnTotal += diceSum;
        $(".player" + id + "-turn-total").text(players[i].turnTotal);
        $("#player" + id).find("button.hold").prop("disabled", false);
      }
    }
  });

  $("button.hold").click(function(event) {
    id = $(event.currentTarget).val(); //you can also use 'this' as an alternative
    i = id - 1;
    $(".player" + id + "-score").text(players[i].totalScore());
    players[i].turnTotal = 0;
    $(".player" + id + "-turn-total").text("0");
    giveTurn(id);
    endGame();
  });

  $("button#restart-game").click(function() {
    restartGame();
  });

  $("button#reset-game").click(function() {
    location.reload();
  });
});
