import Gryffindor from "@/public/img/HouseofGryffindor.png";
import Hufflepuff from "@/public/img/HouseofHufflepuff.png";
import Slytherin from "@/public/img/HouseofSlytherin.png";
import Ravenclaw from "@/public/img/HouseofRavenclaw.png";

export function PollQuestionText_1() {
  // Need to update the data by houses for less mistakes.
  return {
    Question: "Which Harry Potter house best describes your values?",
    choices: ["Gryffindor.", "Hufflepuff", "Slytherin", "Ravenclaw"],
    images: [Gryffindor, Hufflepuff, Slytherin, Ravenclaw],
    summary: [
      "Gryffindor house is where you would find the pluckiest and most daring students (there’s a reason the house symbol is the brave lion). The house colours are scarlet and gold, the common room lies up in Gryffindor Tower and the Head of House is Professor Minerva McGonagall.",
      "Hufflepuff is where you will find the most trustworthy and hardworking students. In fact, out of all the houses Hufflepuff has produced the least number of dark witches and wizards. The badger is the symbol of this house, the colours are yellow and black, the Head of House is Professor Pomona Sprout and the common room can be found near the kitchens in Hogwarts.,",
      "Slytherin house has an unfortunate reputation. While it is true that a lot of dark witches and wizards were sorted into Slytherin, not all who belong to this house are bad. In fact, there are a lot of excellent qualities the Sorting Hat looks for in potential Slytherins and Merlin himself even belonged to this misunderstood house!",
      "If you are looking for the brainiest students – you would find them in Ravenclaw (with a couple of notable exceptions like Hermione Granger). The Ravenclaw colours are blue and bronze, the emblem is an eagle, the Head of House is Professor Filius Flitwick and the common room sits at the top of Ravenclaw Tower behind an enchanted knocker.",
    ],
  };
}
