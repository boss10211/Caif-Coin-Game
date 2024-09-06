let score = 0;

// Загрузка баллов из localStorage
if (localStorage.getItem('totalScore')) {
    score = parseInt(localStorage.getItem('totalScore'));
    document.getElementById('score').textContent = score;
}

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('totalScore', score);
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

document.addEventListener('DOMContentLoaded', () => {
    const registrationForm = document.getElementById('registrationForm');
    const registrationContainer = document.getElementById('registrationContainer');
    const gameContainer = document.getElementById('gameContainer');
    const scoreElement = document.getElementById('score');
    const winCoinsButton = document.getElementById('winCoinsButton');

    let score = 0;
    let telegramUsername = '';

    registrationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        telegramUsername = document.getElementById('telegramUsername').value;
        registrationContainer.style.display = 'none';
        gameContainer.style.display = 'block';
    });

    winCoinsButton.addEventListener('click', () => {
        score += 10;
        scoreElement.textContent = score;
        // Здесь можно добавить код для отправки нового результата на сервер
    });
});
