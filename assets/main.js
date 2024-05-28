function getRandomEntry(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

fetch("/assets/quotes.json")
  .then((response) => response.json())
  .then((quotes) => {
    document.getElementById("quote").textContent = getRandomEntry(quotes);
  });
