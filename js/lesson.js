const urlParams = new URLSearchParams(window.location.search);
const chapterNumber = Number(urlParams.get('chapter'));
const lessonNumber = Number(urlParams.get('lesson'));

const sitelenPona = document.getElementById('sitelen-pona');
const tokipona = document.getElementById('toki-pona');
const english = document.getElementById('english');
const nextButton = document.getElementById('next-button');
const backButton = document.getElementById('back-button');
const heading1 = document.getElementsByTagName('h1')[0];
const heading2 = document.getElementsByTagName('h2')[0];

const chapter = data.chapters[chapterNumber - 1];
const lesson = chapter.lessons[lessonNumber - 1];
let challenges = lesson.challenges;

heading1.textContent = chapter.chapterName;
heading2.textContent = `Lesson ${lessonNumber}`;

// Randomize the order of the challenges
challenges = challenges.sort(() => Math.random() - 0.5);

let currentChallengeIndex = 0;
displayChallenge(challenges[currentChallengeIndex]);

nextButton.addEventListener('click', () => {
  currentChallengeIndex++;
  displayChallenge(challenges[currentChallengeIndex]);
  if (currentChallengeIndex == challenges.length - 1) {
    // All challenges have been seen, so hide the next button
    nextButton.style.display = 'none';
  }
});

backButton.addEventListener('click', () => {
  window.location.href = 'chapter.html?chapter=' + chapterNumber;
});

function displayChallenge(challenge) {
  sitelenPona.textContent = challenge.tokiPona;
  emoji.textContent = emojify(challenge.tokiPona);
  tokipona.textContent = challenge.tokiPona;
  english.textContent = challenge.english;

  // Randomize whether the card is flipped
  if (Math.random() > 0.5) {
    flipCard();
  }
}

function flipCard() {
  const card = document.getElementById('card');
  card.classList.toggle('flipped');
}
