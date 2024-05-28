// you can change these
const quotes = [
  "Some quote",
  "Another quote",
  "Yep a third one",
  "Ok last one",
];

function getRandomEntry(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

document.getElementById("quote").textContent = getRandomEntry(quotes);
