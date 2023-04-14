//your code here
// Array of band names
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles ('a', 'an', 'the') from band names
function removeArticle(name) {
  let words = name.split(' ');
  if (words[0].toLowerCase() === 'the' || words[0].toLowerCase() === 'a' || words[0].toLowerCase() === 'an') {
    words.shift();
  }
  return words.join(' ');
}

// Sort the band names in lexicographic order
touristSpots.sort(function(a, b) {
  return removeArticle(a).localeCompare(removeArticle(b));
});

// Get the ul element and clear any existing list items
let ul = document.getElementById('band');
ul.innerHTML = '';

// Add each band name to the ul element as a list item
for (let i = 0; i < touristSpots.length; i++) {
  let li = document.createElement('li');
  li.textContent = touristSpots[i];
  ul.appendChild(li);
}

