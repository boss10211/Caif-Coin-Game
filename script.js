let score = 0;
const prizes = [
    { points: 10000, reward: '5% скидка', code: generatePromoCode() },
    { points: 50000, reward: '10% скидка', code: generatePromoCode() },
    { points: 100000, reward: '20% скидка', code: generatePromoCode() },
    { points: 250000, reward: '25% скидка', code: generatePromoCode() },
    { points: 500000, reward: '50% скидка', code: generatePromoCode() },
    { points: 1000000, reward: '0.5 грамм', code: generatePromoCode() },
    { points: 2000000, reward: '0.7 грамм', code: generatePromoCode() },
    { points: 3000000, reward: '1 грамм', code: generatePromoCode() }
];

const telegramBotToken = 'YOUR_TELEGRAM_BOT_TOKEN';
const adminChatId = 'ADMIN_CHAT_ID';

function generatePromoCode() {
    return 'PROMO-' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

// Загрузка баллов из localStorage
if (localStorage.getItem('totalScore')) {
    score = parseInt(localStorage.getItem('totalScore'));
    document.getElementById('score').textContent = score;
    updatePrizes();
}

document.getElementById('coin').addEventListener('click', () => {
    score++;
    document.getElementById('score').textContent = score;
    localStorage.setItem('totalScore', score);
    updatePrizes();
});

document.getElementById('winCoinsButton').addEventListener('click', () => {
    window.location.href = 'caif coin game.html'; // Путь к вашей другой игре
});

let usedPromoCodes = JSON.parse(localStorage.getItem('usedPromoCodes')) || [];

function updatePrizes() {
    const prizeList = document.getElementById('prizeList');
    prizeList.innerHTML = ''; // Очистить список призов

    prizes.forEach(prize => {
        if (score >= prize.points && !usedPromoCodes.includes(prize.code)) {
            const listItem = document.createElement('li');
            listItem.textContent = `${prize.points} очков - ${prize.reward} (Промокод: ${prize.code})`;
            prizeList.appendChild(listItem);
            sendTelegramMessage(prize);
            usedPromoCodes.push(prize.code);
            localStorage.setItem('usedPromoCodes', JSON.stringify(usedPromoCodes));
        }
    });
}

function sendTelegramMessage(prize) {
    const message = `Игрок получил приз: ${prize.points} очков - ${prize.reward} (Промокод: ${prize.code})`;
    console.log('Отправка сообщения в Telegram:', message); // Отладка
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            chat_id: adminChatId,
            text: message
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.ok) {
            console.log('Сообщение отправлено в Telegram');
        } else {
            console.error('Ошибка отправки сообщения в Telegram:', data);
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
    });
}
