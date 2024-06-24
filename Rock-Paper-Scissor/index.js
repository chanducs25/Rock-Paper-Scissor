let [computer_score, user_score, attempts] = [0, 0, 0];
let result_ref = document.getElementById("result");
let choices_object = {
  rock: {
    rock: "draw",
    scissor: "win",
    paper: "lose",
  },
  scissor: {
    rock: "lose",
    scissor: "draw",
    paper: "win",
  },
  paper: {
    rock: "win",
    scissor: "lose",
    paper: "draw",
  },
};

function checker(input) {
  if (attempts < 10) {
    var choices = ["rock", "paper", "scissor"];
    var num = Math.floor(Math.random() * 3);

    document.getElementById(
      "comp_choice"
    ).innerHTML = ` Computer choose <span>${choices[num].toUpperCase()}</span>`;
    document.getElementById(
      "user_choice"
    ).innerHTML = ` You choose <span>${input.toUpperCase()}</span>`;

    let computer_choice = choices[num];

    switch (choices_object[input][computer_choice]) {
      case "win":
        result_ref.style.cssText = "background-color: #cefdce; color: #689f38";
        result_ref.innerHTML = "YOU WIN";
        user_score++;
        break;
      case "lose":
        result_ref.style.cssText = "background-color: #ffdde0; color: #d32f2f";
        result_ref.innerHTML = "YOU LOSE";
        computer_score++;
        break;
      default:
        result_ref.style.cssText = "background-color: #e5e5e5; color: #808080";
        result_ref.innerHTML = "DRAW";
        break;
    }

    attempts++;
    document.getElementById("computer_score").innerHTML = computer_score;
    document.getElementById("user_score").innerHTML = user_score;
    if (attempts === 10) {
      alert("Thats it...! Game Over");
      document.getElementById("rockButton").disabled = true;
      document.getElementById("paperButton").disabled = true;
      document.getElementById("scissorButton").disabled = true;
    }
  }
}

function restartGame() {
  computer_score = 0;
  user_score = 0;
  attempts = 0;
  document.getElementById("computer_score").innerHTML = computer_score;
  document.getElementById("user_score").innerHTML = user_score;
  result_ref.innerHTML = "";
  document.getElementById("comp_choice").innerHTML = "";
  document.getElementById("user_choice").innerHTML = "";
  document.getElementById("rockButton").disabled = false;
  document.getElementById("paperButton").disabled = false;
  document.getElementById("scissorButton").disabled = false;
}
