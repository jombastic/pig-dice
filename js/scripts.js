//business logic
function Player(name, turnTotal, score) {
  this.name = name;
  this.turnTotal = turnTotal;
  this.score = score;
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
  });

  $("button#reset-game").click(function() {
    location.reload();
  });
});
