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
    let promoCode = generatePromoCode();
    if (score >= 3000000) {
        message = `Поздравляем! Вы выиграли 1 грамм золота! Ваш промокод: ${promoCode}`;
    } else if (score >= 2000000) {
        message = `Поздравляем! Вы выиграли 0.7 грамма золота! Ваш промокод: ${promoCode}`;
    } else if (score >= 1000000) {
        message = `Поздравляем! Вы выиграли 0.5 грамма золота! Ваш промокод: ${promoCode}`;
    } else if (score >= 500000) {
        message = `Поздравляем! Вы получили 50% скидку! Ваш промокод: ${promoCode}`;
    } else if (score >= 250000) {
        message = `Поздравляем! Вы получили 25% скидку! Ваш промокод: ${promoCode}`;
    } else if (score >= 100000) {
        message = `Поздравляем! Вы получили 20% скидку! Ваш промокод: ${promoCode}`;
    } else if (score >= 50000) {
        message = `Поздравляем! Вы получили 10% скидку! Ваш промокод: ${promoCode}`;
    } else if (score >= 750) {
        message = `Поздравляем! Вы получили 5% скидку! Ваш промокод: ${promoCode}`;
    }
    if (message) {
        alert(message);
    }
}

function generatePromoCode() {
    let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let promoCode = '';
    for (let i = 0; i < 10; i++) {
        promoCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return promoCode;
}
