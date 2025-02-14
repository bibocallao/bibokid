const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');
const nextButton1 = document.getElementById('nextButton1');
const nextButton2 = document.getElementById('nextButton2');
const nextButton3 = document.getElementById('nextButton3');
const mainCard = document.getElementById('mainCard');
const responseCard = document.getElementById('responseCard');
const newCard = document.getElementById('newCard');
const finalCard = document.getElementById('finalCard');
const lastCard = document.getElementById('lastCard');
const messageText = document.querySelector('#mainCard h1');
const mainImage = document.querySelector('#mainCard .card-image');

const messages = [
  "Ah sakita sa akoa heart do 😢",
  "Naa rako sa looc guys, nangluod 💔",
  "You're breaking my heart! 💔",
  "ouch!, friendship over na ata ni 😭",
  "Click yes to pass all your exams🙏",
  "Bisayaa nimo pransin oy, iclick na ang yes 😭"
];

const images = [
  "images/image1.png",
  "images/image2.png",
  "images/image3.png",
  "images/image4.png",
  "images/image5.png",
];

let messageIndex = 0;
let imageIndex = 0;

noButton.addEventListener('click', () => {
  messageText.textContent = messages[messageIndex];
  messageIndex = (messageIndex + 1) % messages.length;

  mainImage.src = images[imageIndex];
  imageIndex = (imageIndex + 1) % images.length;

  yesButton.classList.add('expand');

  const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
  const y = Math.random() * (window.innerHeight - noButton.offsetHeight);
  noButton.style.position = 'absolute';
  noButton.style.left = `${x}px`;
  noButton.style.top = `${y}px`;
});

yesButton.addEventListener('click', () => {
  mainCard.classList.add('hidden');
  responseCard.classList.remove('hidden');
  responseCard.style.display = 'block';
  setTimeout(() => {
    responseCard.style.opacity = '1';
    responseCard.style.transform = 'scale(1)';
  }, 10);
});

nextButton1.addEventListener('click', () => {

  responseCard.style.opacity = '0';
  responseCard.style.transform = 'scale(0.8)';
  setTimeout(() => {
    responseCard.style.display = 'none';
    responseCard.classList.add('hidden');


    newCard.classList.remove('hidden');
    newCard.style.display = 'block';
    setTimeout(() => {
      newCard.style.opacity = '1';
      newCard.style.transform = 'scale(1)';
    }, 10);
  }, 300);
});

nextButton2.addEventListener('click', () => {

    newCard.style.opacity = '0';
  newCard.style.transform = 'scale(0.8)';
  setTimeout(() => {
    newCard.style.display = 'none';
    newCard.classList.add('hidden');

    finalCard.classList.remove('hidden');
    finalCard.style.display = 'block';
    setTimeout(() => {
      finalCard.style.opacity = '1';
      finalCard.style.transform = 'scale(1)';
    }, 10);
  }, 300);
});

nextButton3.addEventListener('click', () => {

  finalCard.style.opacity = '0';
  finalCard.style.transform = 'scale(0.8)';
  setTimeout(() => {
    finalCard.style.display = 'none';
    finalCard.classList.add('hidden');

    lastCard.classList.remove('hidden');
    lastCard.style.display = 'block';
    setTimeout(() => {
      lastCard.style.opacity = '1';
      lastCard.style.transform = 'scale(1)';
    }, 10);
  }, 300);
});