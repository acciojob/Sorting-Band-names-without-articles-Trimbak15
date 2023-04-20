const bandNames = ['The Beatles', 'Led Zeppelin', 'Pink Floyd', 'Aerosmith', 'Anthrax'];

function sortBands(bands) {

  const articles = ['a', 'an', 'the'];

  function stripArticles(name) {
    return name.split(' ').filter(word => !articles.includes(word.toLowerCase())).join(' ');
  }

  const sortedBands = bands.sort((a, b) => stripArticles(a).localeCompare(stripArticles(b)));

  return sortedBands;
}

const sortedBands = sortBands(bandNames);

const bandList = document.getElementById('band');

const ul = document.createElement('ul');
sortedBands.forEach(band => {
  const li = document.createElement('li');
  li.textContent = band;
  ul.appendChild(li);
});
bandList.appendChild(ul);