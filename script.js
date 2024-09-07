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
    checkPrizes(score);
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

function checkPrizes(score) {
    let message = '';
    if (score = 1200) {
        message = 'Поздравляем! Вы выиграли 1 грамм золота!';
    } else if (score = 1150) {
        message = 'Поздравляем! Вы выиграли 0.7 грамма золота!';
    } else if (score = 1100) {
        message = 'Поздравляем! Вы выиграли 0.5 грамма золота!';
    } else if (score = 1050) {
        message = 'Поздравляем! Вы получили 50% скидку!';
    } else if (score = 1000) {
        message = 'Поздравляем! Вы получили 25% скидку!';
    } else if (score = 950) {
        message = 'Поздравляем! Вы получили 20% скидку!';
    } else if (score = 900) {
        message = 'Поздравляем! Вы получили 10% скидку!';
    } else if (score = 850) {
        message = 'Поздравляем! Вы получили 5% скидку!';
    }
    if (message) {
        alert(message);
    }
}
