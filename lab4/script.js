const startButton = document.getElementById('startButton');
const gameContainer = document.getElementById('gameContainer');
const square = document.getElementById('square');
const message = document.getElementById('message');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const difficultySelect = document.getElementById('difficulty');
const colorSelect = document.getElementById('color');

let score = 0;
let timeLeft;
let gameActive = false;
let squareSize;
let difficulty;
let color;
let interval;
let lastTimeUpdated = null;

startButton.addEventListener('click', startGame);

function startGame() {
    difficulty = difficultySelect.value;
    color = colorSelect.value;

    if (!difficulty || !color) {
        alert('Будь ласка, виберіть складність та колір квадратика!');
        return;
    }

    difficultySelect.disabled = true;
    colorSelect.disabled = true;
    startButton.disabled = true;

    gameActive = true;
    score = 0;
    timeLeft = difficulty === 'lazy' ? 4 : difficulty === 'normal' ? 2 : 1;
    squareSize = difficulty === 'lazy' ? 80 : difficulty === 'normal' ? 60 : 40;

    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    square.style.backgroundColor = color;

    scoreElement.textContent = `Очки: ${score}`;
    timerElement.textContent = `Час: ${timeLeft}`;
    message.style.display = 'none';
    square.style.display = 'block';

    startTimer();

    moveSquare();
}

function startTimer() {
    lastTimeUpdated = Date.now();
    interval = setInterval(() => {
        const currentTime = Date.now();
        const elapsedTime = Math.floor((currentTime - lastTimeUpdated) / 1000);

        if (elapsedTime > 0) {
            timeLeft -= elapsedTime;
            lastTimeUpdated = currentTime;
            if (timeLeft <= 0) {
                timeLeft = 0;
                timerElement.textContent = `Час: ${timeLeft}`;
                endGame();
            } else {
                timerElement.textContent = `Час: ${timeLeft}`;
            }
        }
    }, 100);
}

function moveSquare() {
    if (!gameActive) return;

    const containerWidth = gameContainer.clientWidth;
    const containerHeight = gameContainer.clientHeight;

    const x = Math.random() * (containerWidth - squareSize);
    const y = Math.random() * (containerHeight - squareSize);

    square.style.transform = `translate(${x}px, ${y}px)`;
}

square.addEventListener('click', () => {
    if (!gameActive) return;

    score++;
    scoreElement.textContent = `Очки: ${score}`;

    timeLeft = difficulty === 'lazy' ? 4 : difficulty === 'normal' ? 2 : 1;
    lastTimeUpdated = Date.now();
    timerElement.textContent = `Час: ${timeLeft}`;

    moveSquare();
});

function endGame() {
    gameActive = false;
    clearInterval(interval);

    difficultySelect.disabled = false;
    colorSelect.disabled = false;
    startButton.disabled = false;

    message.style.display = 'block';
    message.textContent = `Гра завершена! Ваш результат: ${score} очок. Перезавантажте сторінку, щоб почати нову гру.`;

    square.style.display = 'none';
}
