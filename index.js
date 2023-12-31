const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const resultDiv = document.getElementById('result');
const heading = document.querySelector('h1');

noBtn.addEventListener('click', () => {
    const randomX = getRandomValue(-100, 100); // Random value between -100 and 100 for X axis
    const randomY = getRandomValue(-100, 100); // Random value between -100 and 100 for Y axis
    noBtn.style.transform = `translate(${randomX}px, ${randomY}px)`;
});

function getRandomValue(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

yesBtn.addEventListener('click', () => {
    heading.style.display = 'none';
    noBtn.style.display = 'none';
    yesBtn.style.display= 'none';
    resultDiv.innerText = 'I LOVE YOU, YOU ARE MINE NOW';
    resultDiv.style.display = 'block';
});