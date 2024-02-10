// Assuming data is your JSON data
const chaptersContainer = document.getElementById('chapters-container');

data.chapters.forEach((chapter, index) => {
  const card = document.createElement('div');
  card.className = 'bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded block text-center';

  const chapterLink = document.createElement('a');
  chapterLink.href = `chapter.html?chapter=${index + 1}`;

  const chapterEmoji = document.createElement('span');
  chapterEmoji.textContent = chapter.chapterEmoji;
  chapterEmoji.className = 'text-4xl block';

  const chapterName = document.createElement('span');
  chapterName.textContent = chapter.chapterName;
  chapterName.className = 'block';

  chapterLink.appendChild(chapterEmoji);
  chapterLink.appendChild(chapterName);
  card.appendChild(chapterLink);
  chaptersContainer.appendChild(card);
});
