let spel;
let leaderboard;
function startGame() {
  spel = new Spel();
  spel.start();
}
function loadLeaderboard() {
  leaderboard = new Leaderboard();
  leaderboard.show();
}
startGame();
loadLeaderboard();
