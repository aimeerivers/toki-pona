let sitelenPona = document.getElementById('sitelen-pona');
let tokipona = document.getElementById('toki-pona');
let english = document.getElementById('english');

const chapter = data.chapters.find(chapter => chapter.chapterNumber === 1);
const vocabulary = chapter.vocabulary;
const lesson = chapter.lessons.find(lesson => lesson.lessonNumber === 1);
const challenges = lesson.challenges;

const randomChallenge = challenges[Math.floor(Math.random() * challenges.length)];
displayChallenge(randomChallenge);

function displayChallenge(challenge) {
  sitelenPona.textContent = challenge.tokiPona;
  tokipona.textContent = challenge.tokiPona;
  english.textContent = challenge.english;
}

function flipCard() {
  const card = document.getElementById('card');
  card.classList.toggle('flipped');
}
