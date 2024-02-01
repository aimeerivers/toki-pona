// Assuming data is your JSON data
const chaptersContainer = document.getElementById('chapters-container');

data.chapters.forEach((chapter, index) => {
  const chapterLink = document.createElement('a');
  chapterLink.href = `chapter.html?chapter=${index + 1}`;
  chapterLink.textContent = `${index + 1}: ${chapter.chapterName}`;
  chapterLink.className = 'w-64 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center';
  chaptersContainer.appendChild(chapterLink);
});
