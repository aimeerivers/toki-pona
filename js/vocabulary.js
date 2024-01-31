const urlParams = new URLSearchParams(window.location.search);
const chapterNumber = Number(urlParams.get('chapter'));

let backButton = document.getElementById('back-button');

// Find the selected chapter in the data
const chapter = data.chapters[chapterNumber - 1];

// Get the vocabulary container
const vocabularyContainer = document.getElementById('vocabulary-container');

// Create a p element for each vocabulary item in the selected chapter
chapter.vocabulary.forEach((vocabItem) => {
  const vocabElement = document.createElement('p');
  vocabElement.className = 'w-64 mt-4 text-black dark:text-white py-2 px-4 rounded block text-center';

  const sitelenPonaElement = document.createElement('div');
  sitelenPonaElement.className = 'linja-pona text-3xl';
  sitelenPonaElement.textContent = vocabItem.tokiPona;
  vocabElement.appendChild(sitelenPonaElement);

  const tokiPonaElement = document.createElement('div');
  tokiPonaElement.className = 'font-bold';
  tokiPonaElement.textContent = vocabItem.tokiPona;
  vocabElement.appendChild(tokiPonaElement);

  const englishElement = document.createElement('div');
  englishElement.className = 'italic';
  englishElement.textContent = vocabItem.english;
  vocabElement.appendChild(englishElement);

  vocabularyContainer.appendChild(vocabElement);
});

backButton.addEventListener('click', () => {
  window.location.href = 'chapter.html?chapter=' + chapterNumber;
});
