let score = 0;
const prizes = [
    { points: 10000, reward: '5% скидка' },
    { points: 50000, reward: '10% скидка' },
    { points: 100000, reward: '20% скидка' },
    { points: 250000, reward: '25% скидка' },
    { points: 500000, reward: '50% скидка' },
    { points: 1000000, reward: '0.5 грамм' },
    { points: 2000000, reward: '0.7 грамм' },
    { points: 3000000, reward: '1 грамм' }
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
    const adminChatId = 'YOUR_ADMIN_CHAT_ID';
    const botToken = 'YOUR_BOT_TOKEN';
    const message = `Игрок выиграл ${reward}. Промокод: ${promoCode}`;
    fetch(`https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminChatId}&text=${encodeURIComponent(message)}`);
}
