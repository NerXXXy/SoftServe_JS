let points = 0;
let clickPower = 1;
let clickPowerLVL = 1;
let nextPowerUpgradeCost = 10 * clickPower + (clickPowerLVL * 3);
let autoClickCD = 10000;
let autoClickCDUpgradeCost = 20;
let autoClickPower = 0;
let autoClickPowerUpgradeCost = 20;

const savedProgress = JSON.parse(localStorage.getItem('gameProgress'));
if (savedProgress) {
    points = savedProgress.points;
    clickPower = savedProgress.clickPower;
    clickPowerLVL = savedProgress.clickPowerLVL;
    nextPowerUpgradeCost = savedProgress.nextPowerUpgradeCost;
    autoClickCD = savedProgress.autoClickCD;
    autoClickCDUpgradeCost = savedProgress.autoClickCDUpgradeCost;
    autoClickPower = savedProgress.autoClickPower;
    autoClickPowerUpgradeCost = savedProgress.autoClickPowerUpgradeCost;
}

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
button.onclick = play;

const clickPowerButton = document.querySelector('#clickPower');
const powerStatusButton = document.querySelector('#powerStatus');
const powerStatusText = document.querySelector('#powerStatusText');
clickPowerButton.onclick = upgradePower;

const upgradeButton = document.querySelector('.upgradeButton');

const autoClickButton = document.querySelector('#autoClicks');
const autoClickText = document.querySelector('#autoClickStatusText');
autoClickButton.onclick = upgradeAutoClick;

const autoClickCDButton = document.querySelector('#autoClicksCD');
const autoClickCDText = document.querySelector('#autoClickCDStatusText');
autoClickCDButton.onclick = upgradeAutoClickCD;

powerStatusText.textContent = `Power : ${clickPower}.`;
autoClickText.textContent = `Power : ${autoClickPower}.`;
autoClickCDText.textContent = `CD : ${autoClickCD * 0.001} seconds.`;

function play() {
    button.onclick = () => {
        points = points + clickPower;
        counter.textContent = `Your points: ${points}`;
        saveProgress(); // Зберігаємо прогрес після кожного натискання кнопки
    };
}

function upgradePower() {
    if (points - nextPowerUpgradeCost >= 0) {
        points = points - nextPowerUpgradeCost;
        counter.textContent = `Your points: ${points}`;
        clickPower += 1;
        nextPowerUpgradeCost = nextPowerUpgradeCost * 3 + clickPower;
        clickPowerLVL = clickPowerLVL + 1;
        powerStatusText.textContent = `Power : ${clickPower}`;
        clickCost.textContent = `${nextPowerUpgradeCost} points`;
        saveProgress(); // Зберігаємо прогрес після оновлення сили натискання
    } else {
        alert('Not enough points!');
    }
}

function upgradeAutoClick() {
    if (points - autoClickPowerUpgradeCost >= 0) {
        points = points - autoClickPowerUpgradeCost;
        counter.textContent = `Your points: ${points}`;
        autoClickPower = autoClickPower + 1;
        autoClickPowerUpgradeCost = autoClickPowerUpgradeCost + 100 * 2;
        autoClickText.textContent = `Power : ${autoClickPower}`;
        autoClickCost.textContent = `${autoClickPowerUpgradeCost} points`;
        saveProgress(); // Зберігаємо прогрес після оновлення сили автокліка
    } else {
        alert('Not enough points!');
    }
}

function upgradeAutoClickCD() {
    if (points - autoClickCDUpgradeCost >= 0) {
        points = points - autoClickCDUpgradeCost;
        counter.textContent = `Your points: ${points}`;
        autoClickCD = autoClickCD - 1000;
        autoClickCDUpgradeCost = autoClickCDUpgradeCost * 2;
        autoClickCDText.textContent = `AutoClick CD : ${autoClickCD * 0.001} seconds.`;
        autoClickCDCost.textContent = `${autoClickCDUpgradeCost} points`;
        saveProgress(); // Зберігаємо прогрес після оновлення часу автокліка
    } else {
        alert('Not enough points!');
    }
}

function autoClick() {
    setInterval(() => {
        points = points + autoClickPower;
        counter.textContent = `Your points: ${points}`;
        saveProgress(); // Зберігаємо прогрес після кожного автокліка
    }, autoClickCD);
}

autoClick();

const buttonSound = document.getElementById('buttonSound');
button.addEventListener('click', clickSound);
upgradeButton.addEventListener('click', clickSound);
function clickSound() {
    buttonSound.play();
}

const clickCost = document.querySelector('#clickCost');
const autoClickCost = document.querySelector('#autoClickCost');
const autoClickCDCost = document.querySelector('#autoClickCDCost');
clickCost.textContent = `${nextPowerUpgradeCost} points`;
autoClickCost.textContent = `${autoClickPowerUpgradeCost} points`;
autoClickCDCost.textContent = `${autoClickCDUpgradeCost} points`;

function saveProgress() {
    const gameProgress = {
        points,
        clickPower,
        clickPowerLVL,
        nextPowerUpgradeCost,
        autoClickCD,
        autoClickCDUpgradeCost,
        autoClickPower,
        autoClickPowerUpgradeCost,
    };
    localStorage.setItem('gameProgress', JSON.stringify(gameProgress));
}


const resetButton = document.querySelector('#resetButton');
resetButton.addEventListener('click', resetProgress);

function resetProgress() {

        points = 0;
        clickPower = 1;
        clickPowerLVL = 1;
        nextPowerUpgradeCost = 10 * clickPower + (clickPowerLVL * 3);
        autoClickCD = 10000;
        autoClickCDUpgradeCost = 20;
        autoClickPower = 0;
        autoClickPowerUpgradeCost = 20;

        counter.textContent = 'Your points: 0';
        powerStatusText.textContent = 'Power : 1';
        autoClickText.textContent = 'Power : 0';
        autoClickCDText.textContent = 'CD : 10 seconds.';
        clickCost.textContent = `${nextPowerUpgradeCost} points`;
        autoClickCost.textContent = `${autoClickPowerUpgradeCost} points`;
        autoClickCDCost.textContent = `${autoClickCDUpgradeCost} points`;

        localStorage.removeItem('gameProgress');
}