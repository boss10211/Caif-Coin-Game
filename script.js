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

 closeModal.onclick = function() {
        prizeModal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == prizeModal) {
            prizeModal.style.display = "none";
        }
    }

    function checkForPrize(score) {
        let prize = '';
        if (score >= 6) {
            prize = '1 г';
        } else if (score >= 800) {
            prize = '50% скидка';
        } else if (score >= 700) {
            prize = '10% скидка';
        } else if (score >= 650) {
            prize = '5% скидка';
        }

        if (prize) {
            const promoCode = generatePromoCode();
            prizeMessage.innerHTML = `
                🎉ПОЗДАРВЛЯЕМ 🎉<br>
                ВАШ ПРИЗ: ${prize}<br>
                Получить Приз можно у администратора Kett, активировав промокод: ${promoCode}
            `;
            prizeModal.style.display = "block";
            sendTelegramMessage(prize, promoCode);
        }
    }

    function generatePromoCode() {
        return Math.random().toString(36).substr(2, 9).toUpperCase();
    }

    function sendTelegramMessage(prize, promoCode) {
        const telegramBotToken = '7234287467:AAGaT2z1qI-rdIf2RzTZmJRrqnqK5z4pJb4';
        const telegramChatId = '5920944588';
        const message = `🎉ПОЗДАРВЛЯЕМ 🎉\nВАШ ПРИЗ: ${prize}\nПромокод: ${promoCode}`;

        fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: telegramChatId,
                text: message
            })
        });
    }
});
