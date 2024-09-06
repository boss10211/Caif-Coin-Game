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

function generatePromoCode(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let promoCode = '';
    for (let i = 0; i < length; i++) {
        promoCode += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return promoCode;
}
async function sendPromoCodeToTelegram(promoCode) {
    const botToken = '7234287467:AAGaT2z1qI-rdIf2RzTZmJRrqnqK5z4pJb4';
    const chatId = '5920944588';
    const message = `Поздравляем! Ваш промокод на скидку 50%: ${promoCode}`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chatId}&text=${encodeURIComponent(message)}`;

    try {
        const response = await fetch(url);
        const data = await response.json();
        if (!data.ok) {
            throw new Error(data.description);
        }
    } catch (error) {
        console.error('Ошибка при отправке сообщения в Telegram:', error);
    }
}

document.getElementById('winCoinsButton').addEventListener('click', () => {
    const scoreElement = document.getElementById('score');
    let score = parseInt(scoreElement.textContent);
    score += 1000; // Пример увеличения количества монет
    scoreElement.textContent = score;

    if (score >= 600) {
        const promoCode = generatePromoCode(10);
        alert(`Поздравляем! Вы получили промокод на скидку 50%: ${promoCode}`);
        sendPromoCodeToTelegram(promoCode);
    }
});
