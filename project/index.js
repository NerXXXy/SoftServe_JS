let points = 0;

let clickPower = 0.1;
let clickPowerLVL = 1;
let nextPowerUpgradeCost = 10 * clickPower +(clickPowerLVL * 1.2);

// let autoClickCD = 10000;
// let autoClickPower = 0;
// let autoClickCDUpgrade = 20;
// let autoClickPowerUpgrade = 0;

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
    button.onclick = () => counter.textContent =`Your points: ${points = Math.trunc( (points + clickPower) * 50 ) / 50}`;
}
function upgradePower(){
    if(points - nextPowerUpgradeCost >= 0){
        points = points - nextPowerUpgradeCost
        counter.textContent =`Your points: ${Math.trunc( points * 100 ) / 100}`;
        clickPower = clickPower + Math.trunc( (clickPower * 1.3) * 100 ) / 100;
        nextPowerUpgradeCost = nextPowerUpgradeCost * 2;
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
