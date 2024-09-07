let score = 0;
const prizes = [
    { points: 1550, reward: '5% скидка' },
    { points: 1560, reward: '10% скидка' },
    { points: 1570, reward: '20% скидка' },
    { points: 1580, reward: '25% скидка' },
    { points: 1590, reward: '50% скидка' },
    { points: 2000, reward: '0.5 грамм' },
    { points: 2010, reward: '0.7 грамм' },
    { points: 2020, reward: '1 грамм' }
];

// Загрузка баллов из localStorage
if (localStorage.getItem('totalScore')) {
    score = parseInt(localStorage.getItem('totalScore'));
    document.getElementById('score').textContent = score;
}

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('totalScore', score);
    checkForPrize();
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

function checkForPrize() {
    for (let prize of prizes) {
        if (score === prize.points) {
            let promoCode = generatePromoCode();
            alert(`Поздравляем! Вы выиграли ${prize.reward}. Ваш промокод: ${promoCode}`);
            sendTelegramMessage(prize.reward, promoCode);
            break;
        }
    }
}

function generatePromoCode() {
    return 'PROMO' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function sendTelegramMessage(reward, promoCode) {
    const adminChatId = '7234287467:AAGaT2z1qI-rdIf2RzTZmJRrqnqK5z4pJb4';
    const botToken = '5920944588';
    const message = `Игрок выиграл ${reward}. Промокод: ${promoCode}`;
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminChatId}&text=${encodeURIComponent(message)}`);
}
