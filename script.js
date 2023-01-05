const playerAvatarElement = document.getElementById("player-avatar");
const bossAvatarElement = document.getElementById("boss-avatar");
const playerAvatarInput = document.getElementById("player-avatar-input");
const bossAvatarInput = document.getElementById("boss-avatar-input");
const playerHealthBarElement = document.getElementById("player-health");
const bossHealthBarElement = document.getElementById("boss-health");
const rightAnswerButton = document.getElementById("right-answer-button");
const wrongAnswerButton = document.getElementById("wrong-answer-button");
const handButton = document.getElementById("hand-button");
const levelInput = document.getElementById("level-input");
const levelButton = document.getElementById("level-button");
const messageElement = document.getElementById("message");
const restartButton = document.getElementById("restart-button");

let playerHealth;
let bossHealth;

function startGame() {
  playerHealth = 100;
  bossHealth = 100;

  playerHealthBarElement.style.width = `${playerHealth}%`;
  bossHealthBarElement.style.width = `${bossHealth}%`;
  messageElement.textContent = "";
}

rightAnswerButton.addEventListener("click", function () {
  bossHealth -= 100 / levelInput.value;
  bossHealthBarElement.style.width = `${bossHealth}%`;
  if (bossHealth <= 0) {
    messageElement.textContent = "You win!";
    messageElement.classList.add("animated");
  }
});

wrongAnswerButton.addEventListener("click", function () {
  playerHealth -= 10;
  playerHealthBarElement.style.width = `${playerHealth}%`;
  if (playerHealth <= 0) {
    messageElement.textContent = "Boss wins!";
    messageElement.classList.add("animated");
  }
});

handButton.addEventListener("click", function () {
  bossHealth -= 50 / levelInput.value;
  bossHealthBarElement.style.width = `${bossHealth}%`;
  if (bossHealth <= 0) {
    messageElement.textContent = "You win!";
    messageElement.classList.add("animated");
  }
});

playerAvatarInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    playerAvatarElement.src = reader.result;
  });
  reader.readAsDataURL(file);
});

bossAvatarInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.addEventListener("load", function () {
    bossAvatarElement.src = reader.result;
  });
  reader.readAsDataURL(file);
});

levelButton.addEventListener("click", function () {
  startGame();
});

restartButton.addEventListener("click", startGame);

startGame();