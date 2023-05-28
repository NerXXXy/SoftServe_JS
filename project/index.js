let points = 0;

let clickPower = 1;
let clickPowerLVL = 1;
let nextPowerUpgradeCost = 10 * clickPower + (clickPowerLVL * 3);

let autoClickCD = 10000;
let autoClickCDUpgradeCost = 20;

let autoClickPower = 0;
let autoClickPowerUpgradeCost = 20;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');
button.onclick = play;


const clickPowerButton = document.querySelector('#clickPower')
const powerStatusButton = document.querySelector('#powerStatus')
const powerStatusText = document.querySelector('#powerStatusText')
clickPowerButton.onclick = upgradePower;

const upgradeButton = document.querySelector('.upgradeButton')

const autoClickButton = document.querySelector('#autoClicks')
const autoClickText = document.querySelector('#autoClickStatusText')
autoClickButton.onclick = upgradeAutoClick;

const autoClickCDButton = document.querySelector('#autoClicksCD')
const autoClickCDText = document.querySelector('#autoClickCDStatusText')
autoClickCDButton.onclick = upgradeAutoClickCD;

powerStatusText.textContent = `Power : ${clickPower}.`
autoClickText.textContent = `Power : ${autoClickPower}.`
autoClickCDText.textContent = `CD : ${autoClickCD * 0.001} seconds.`


function play() {
    button.onclick = () => counter.textContent = `Your points: ${points = points + clickPower}`;
}


function upgradePower() {
    if (points - nextPowerUpgradeCost >= 0) {
        points = points - nextPowerUpgradeCost
        counter.textContent = `Your points: ${points}`;
        clickPower += 1;
        nextPowerUpgradeCost = nextPowerUpgradeCost * 3 + clickPower;
        clickPowerLVL = clickPowerLVL + 1;
        powerStatusText.textContent = `Power : ${clickPower}`
        clickCost.textContent = `${nextPowerUpgradeCost} points`
    } else {
        alert('Not enough points!')
    }
}

function upgradeAutoClick() {
    if (points - autoClickPowerUpgradeCost >= 0) {
        points = points - autoClickPowerUpgradeCost
        counter.textContent = `Your points: ${points}`
        autoClickPower = autoClickPower + 1;
        autoClickPowerUpgradeCost = autoClickPowerUpgradeCost + 100 * 2;
        autoClickText.textContent = `Power : ${autoClickPower}`
        autoClickCost.textContent = `${autoClickPowerUpgradeCost} points`;
    } else {
        alert('Not enough points!')
    }
}

function upgradeAutoClickCD() {
    if (points - autoClickCDUpgradeCost >= 0) {
        points = points - autoClickCDUpgradeCost
        counter.textContent = `Your points: ${points}`
        autoClickCD = autoClickCD - 1000;
        autoClickCDUpgradeCost = autoClickCDUpgradeCost * 2;
        autoClickCDText.textContent = `AutoClick CD : ${autoClickCD * 0.001} seconds.`;
        autoClickCDCost.textContent = `${autoClickCDUpgradeCost} points`
    } else {
        alert('Not enough points!')
    }
}

function autoClick() {
    setInterval(() => {
        points = points + autoClickPower;
        counter.textContent = `Your points: ${points}`;
    }, autoClickCD);
}

// Виклик функції для автоматичного отримання points
autoClick();

const buttonSound = document.getElementById('buttonSound');
button.addEventListener('click', clickSound);
upgradeButton.addEventListener('click', clickSound)
function clickSound() {
    buttonSound.play();
    }

const clickCost = document.querySelector('#clickCost')
const autoClickCost = document.querySelector('#autoClickCost')
const autoClickCDCost = document.querySelector('#autoClickCDCost')
clickCost.textContent = `${nextPowerUpgradeCost} points`
autoClickCost.textContent = `${autoClickPowerUpgradeCost} points`
autoClickCDCost.textContent = `${autoClickCDUpgradeCost} points`








