const urlParams = new URLSearchParams(window.location.search);
const chapterNumber = Number(urlParams.get('chapter'));

const chapter = data.chapters[chapterNumber - 1];

const lessonsContainer = document.getElementById('lessons-container');
const heading1 = document.getElementsByTagName('h1')[0];
const heading2 = document.getElementsByTagName('h2')[0];
heading1.textContent = `Chapter ${chapterNumber}`;
heading2.textContent = chapter.chapterName;

// Add a vocabulary link
const vocabularyLink = document.createElement('a');
vocabularyLink.href = `vocabulary.html?chapter=${chapterNumber}`;
vocabularyLink.textContent = "Vocabulary";
vocabularyLink.className = 'w-64 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center';
lessonsContainer.appendChild(vocabularyLink);

// Create a link for each lesson in the selected chapter
chapter.lessons.forEach((lesson, index) => {
  const lessonLink = document.createElement('a');
  lessonLink.href = `lesson.html?chapter=${chapterNumber}&lesson=${index + 1}`;
  lessonLink.textContent = `Lesson ${index + 1}`;
  lessonLink.className = 'w-64 mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded block text-center';
  lessonsContainer.appendChild(lessonLink);
});
