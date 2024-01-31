const urlParams = new URLSearchParams(window.location.search);
const chapterNumber = Number(urlParams.get('chapter'));
const lessonNumber = Number(urlParams.get('lesson'));

let sitelenPona = document.getElementById('sitelen-pona');
let tokipona = document.getElementById('toki-pona');
let english = document.getElementById('english');
let nextButton = document.getElementById('next-button');
let backButton = document.getElementById('back-button');

const chapter = data.chapters[chapterNumber - 1];
const lesson = chapter.lessons[lessonNumber - 1];
let challenges = lesson.challenges;

// Randomize the order of the challenges
challenges = challenges.sort(() => Math.random() - 0.5);

let currentChallengeIndex = 0;
displayChallenge(challenges[currentChallengeIndex]);

nextButton.addEventListener('click', () => {
  currentChallengeIndex++;
  if (currentChallengeIndex < challenges.length) {
    displayChallenge(challenges[currentChallengeIndex]);
  } else {
    // All challenges have been seen, show the back button
    nextButton.style.display = 'none';
    backButton.style.display = 'block';
  }
});

backButton.addEventListener('click', () => {
  window.location.href = 'index.html';
});

function displayChallenge(challenge) {
  sitelenPona.textContent = challenge.tokiPona;
  tokipona.textContent = challenge.tokiPona;
  english.textContent = challenge.english;
}

function flipCard() {
  const card = document.getElementById('card');
  card.classList.toggle('flipped');
}
