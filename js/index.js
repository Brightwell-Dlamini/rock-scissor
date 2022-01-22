const handOptions = {
  rock: "/assets/Rock.png",
  scissors: "/assets/Scissors.png",
  paper: "/assets/Paper.png",
};
const pickUserHand = (hand) => {
  console.log(hand);
  //show the newxt page with the hand you picked
  let hands = document.querySelector(".hands");
  hands.style.display = "none";
  //hide the currrent page
  let contest = document.querySelector(".contest");
  contest.style.display = "flex";
  //set the user

  document.getElementById("userPickedImg").src = handOptions[hand];
};
const pickComputerHand = () => {
  let hands = ["rock", "paper", "scissors"];
  console.log(hands[1]);
};
