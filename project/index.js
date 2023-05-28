let points = 0;

let clickPower = 1;
let clickPowerLVL = 1;
let nextPowerUpgradeCost = 10 * clickPower + (clickPowerLVL * 3);

 let autoClickCD = 1000;
 let autoClickPower = 1;
 let autoClickCDUpgrade = 20;
 let autoClickPowerUpgradeCost = 0;

const display = document.querySelector('#display');
const button = document.querySelector('#button');
const counter = document.querySelector('#counter');

const clickPowerButton = document.querySelector('#clickPower')
const powerStatusButton = document.querySelector('#powerStatus')
const powerStatusText = document.querySelector('#powerStatusText')

const autoClickButton = document.querySelector('#autoClicks')

powerStatusText.textContent = `Your click power is ${clickPower}. ${nextPowerUpgradeCost} points for click power ${clickPowerLVL + 1} LVL`


button.onclick = play;
clickPowerButton.onclick = upgradePower;

function play() {
    button.onclick = () => counter.textContent =`Your points: ${points = points + clickPower}`;
}
function upgradePower(){
    if(points - nextPowerUpgradeCost >= 0){
        points = points - nextPowerUpgradeCost
        counter.textContent =`Your points: ${points}`;
        clickPower = clickPower + 1;
        nextPowerUpgradeCost = nextPowerUpgradeCost * 3 + clickPower;
        clickPowerLVL = clickPowerLVL + 1;
        powerStatusText.textContent = `Your click power is ${clickPower}. ${nextPowerUpgradeCost} points for click power ${clickPowerLVL + 1} LVL`
    }
    else{
        alert('Not enough points!')
    }
}

// function autoClick(){
//
// }

function autoClick() {
    setInterval(() => {
        points = points + autoClickPower;
        counter.textContent = `Your points: ${points}`;
    }, autoClickCD);
}

// Виклик функції для автоматичного отримання points
autoClick();