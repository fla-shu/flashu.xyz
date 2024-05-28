// you can change these
const quotes = [
  "Flashu sez: Revolutionary!",
  "𝓗𝓮𝓵𝓵𝓸 𝓑𝓻𝓸",
  "shout outs to s8vv leaks",
  "i am chosenonebs named",
];

function getRandomEntry(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

document.getElementById("quote").textContent = getRandomEntry(quotes);
