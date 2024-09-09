let score = 0;
const prizes = [
    { points: 10000, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 50000, reward: '10% скидка' },
    { points: 1, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 2, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 5, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 10, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 20, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 30, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    // Добавляем еще 91 позицию
    { points: 40, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 50, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 60, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 70, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 80, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 90, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 100, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 110, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 120, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 130, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 140, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 150, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 160, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 170, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 180, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 190, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 200, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 210, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 220, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 230, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 240, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 250, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 260, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 270, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 280, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 290, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 300, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 310, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 320, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 330, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 340, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 350, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 360, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 370, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 380, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 390, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 400, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 410, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 420, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 430, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 440, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 450, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 460, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 470, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 480, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 490, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 500, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 510, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 520, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 530, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 540, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 550, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 560, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 570, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 580, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 590, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 600, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 610, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 620, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 630, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 640, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 650, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 660, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 670, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 680, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 690, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 700, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 710, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 720, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 730, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 740, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 750, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 760, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 770, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 780, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 790, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 800, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 810, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 820, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 830, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 840, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 850, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 860, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 870, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 880, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 890, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 900, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' },
    { points: 910, reward: 'Вы зарегистрированы в мега розыгрыш 🎁 от CAIF COIN' }
];

let achievements = JSON.parse(localStorage.getItem('achievements')) || [];

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

document.getElementById('achievementsButton').addEventListener('click', () => {
    displayAchievements();
    document.getElementById('achievementsModal').style.display = 'block';
});

document.getElementById('closeModalButton').addEventListener('click', () => {
    document.getElementById('prizeModal').style.display = 'none';
});

document.getElementById('closeAchievementsButton').addEventListener('click', () => {
    document.getElementById('achievementsModal').style.display = 'none';
});

function checkForPrize() {
    for (let prize of prizes) {
        if (score === prize.points) {
            let promoCode = generatePromoCode();
            document.getElementById('prizeMessage').textContent = `🎆ПОЗДРАВЛЯЕМ🎆! ${prize.reward}. Ваш промокод🏷 для  участия : ${promoCode} ❗️СКОПИРУЙТЕ ЭТО СООБЩЕНИЯ И ОТПРАВЬТЕ ОПЕРАТОРУ KETT ДЛЯ ПОДТВЕРЖДЕНИЯ❗️`;
            document.getElementById('prizeModal').style.display = 'block';
            achievements.push({ reward: prize.reward, promoCode: promoCode });
            localStorage.setItem('achievements', JSON.stringify(achievements));
            sendTelegramMessage(prize.reward, promoCode);
            break;
        }
    }
}

function generatePromoCode() {
    return 'PROMO' + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function sendTelegramMessage(reward, promoCode) {
    const adminChatId = '5920944588';
    const botToken = '7234287467:AAGaT2z1qI-rdIf2RzTZmJRrqnqK5z4pJb4';
    const message = `Игрок выиграл ${reward}. Промокод: ${promoCode}`;
    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${adminChatId}&text=${encodeURIComponent(message)}`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.json();
        })
        .then(data => {
            if (data.ok) {
                console.log('Message sent successfully');
            } else {
                console.error('Error sending message:', data);
            }
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

function displayAchievements() {
    const achievementsList = document.getElementById('achievementsList');
    achievementsList.innerHTML = '';
    achievements.forEach(achievement => {
        const listItem = document.createElement('li');
        listItem.textContent = `Вы выиграли ${achievement.reward}. Промокод: ${achievement.promoCode}`;
        achievementsList.appendChild(listItem);
    });
}

// Отображение достижений при загрузке страницы
displayAchievements();
