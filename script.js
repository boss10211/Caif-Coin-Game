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
    checkForPrizes(score);
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

function checkForPrizes(score) {
    let prizeNotification = document.getElementById('prizeNotification');
    prizeNotification.classList.remove('hidden');
    
    if (score = 1150) {
        prizeNotification.textContent = 'Поздравляем! Вы выиграли 1 грамм.';
    } else if (score = 1100) {
        prizeNotification.textContent = 'Поздравляем! Вы выиграли 0.7 грамм.';
    } else if (score = 1050) {
        prizeNotification.textContent = 'Поздравляем! Вы выиграли 0.5 грамм.';
    } else if (score>= 1000) {
        prizeNotification.textContent = 'Поздравляем! Вы получили 50% скидку.';
    } else if (score = 950) {
        prizeNotification.textContent = 'Поздравляем! Вы получили 25% скидку.';
    } else if (score = 900) {
        prizeNotification.textContent = 'Поздравляем! Вы получили 20% скидку.';
    } else if (score = 850) {
        prizeNotification.textContent = 'Поздравляем! Вы получили 10% скидку.';
    } else if (score = 750) {
        prizeNotification.textContent = 'Поздравляем! Вы получили 5% скидку.';
    } else {
        prizeNotification.classList.add('hidden');
    }
}
