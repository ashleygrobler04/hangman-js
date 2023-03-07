const alphabet = document.getElementById("alphabet");
const lives = document.getElementById("lives");
const word = document.getElementById("word");
const words = [
  "help",
  "try",
  "drink",
  "certificate",
  "string",
  "array",
  "people",
  "deploy",
  "application",
  "randomization",
  "javascript",
  "java",
  "guess",
  "live",
  "developer",
];
let playerLives=10;

const getWord = () => words[Math.floor(Math.random() * words.length)]; //return a random word from the array.

const chosenWord = getWord();
console.log(chosenWord);

let chars = [];

const populateAlphabet = () => {
  const letters = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const list = document.createElement("ul");
  alphabet.append(list);

  letters.forEach((v) => {
    const listItem = document.createElement("li");
    listItem.setAttribute("id", v);
    listItem.innerHTML = v;
    list.append(listItem);
  });
}; //A function to populate a div element with the alphabet.

alphabet.addEventListener("click", (e) => {
  for (let i=0; i<chosenWord.length; i++) {
    if (e.target.textContent===chosenWord[i] ) {
      chars[i]=e.target.textContent
    }
  }
  word.innerHTML=chars.join("")
  if (!chosenWord.includes(e.target.textContent) && playerLives>0) {
    playerLives-=1
    lives.innerHTML=`${playerLives} lives remaining.`
  }
  if (chars===chosenWord) {
    alert("You guessed the word, it was "+chosenWord)
  }
}); //used for when the user clicks on the alphabet elements.

const initGame = () => {
  for (let i = 0; i < chosenWord.length; i++) {
    chars.push("*");
  }
  word.innerHTML = chars.join("");
  lives.innerHTML=playerLives;
  populateAlphabet();
};
initGame();
