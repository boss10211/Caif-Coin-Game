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
    window.location.href = '../https://github.com/boss10211/Caif-Coin-Game/blob/main/caif%20coin%20game.html'; // Путь к вашей другой игре
});
