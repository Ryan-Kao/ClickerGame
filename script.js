let monsterMaxHP = 50;
let monsterHP = 50;
let clickPower = 1;
let upgradeCost = 20;
let autoClickerPower = 0;
let autoClickerCost = 100;
let upgradeCost2 = 300;
let clickPower2 = 0;
let coins = 0;

const button = document.querySelector("#btn");
const upgrade = document.querySelector("#upgrade");
const autoClickerBtn = document.querySelector("#autoClickerBtn")
const monsterHPDisplay = document.querySelector("#monsterHP");
const upgradeDisplay = document.querySelector("#upgradeCost");
const autoClickerCostDisplay = document.querySelector("#autoClickerCost");
const upgrade2 = document.querySelector("#upgrade2");
const upgradeDisplay2 = document.querySelector("#upgradeCost2");
const clickPowerDisplay = document.querySelector("#currentClickPower");
const autoClickerDisplay = document.querySelector("#currentAutoClickers");
const coinsDisplay = document.querySelector("#currentCoins");

button.addEventListener("click", () => {
    monsterHP -= clickPower;
    monsterHP -= clickPower2;

    if (monsterHP <= 0) {
        coins += 100;
        monsterMaxHP *= 1.2;
        monsterHP = Math.round(monsterMaxHP);
    }

    coinsDisplay.textContent = coins;
    monsterHPDisplay.textContent = monsterHP;
});


upgrade.addEventListener("click", () => {
    if (coins >= upgradeCost) {
        coins -= upgradeCost;
        clickPower++;

        upgradeCost *= 1.2;
        upgradeCost = Math.round(upgradeCost);
    }

    coinsDisplay.textContent = coins;
    upgradeDisplay.textContent = upgradeCost;
    clickPowerDisplay.textContent = clickPower + clickPower2;
});

autoClickerBtn.addEventListener("click", () => {
    if (coins >= autoClickerCost) {
        coins -= autoClickerCost;
        autoClickerPower++;

        autoClickerCost *= 1.2;
        autoClickerCost = Math.round(autoClickerCost);
    }

    coinsDisplay.textContent = coins;
    autoClickerCostDisplay.textContent = autoClickerCost;
    autoClickerDisplay.textContent = autoClickerPower;
});

function autoClicker() {
    monsterHP -= autoClickerPower;
    if (monsterHP <= 0) {
        coins += 100;
        monsterMaxHP *= 1.2;
        monsterHP = Math.round(monsterMaxHP);
    }

    coinsDisplay.textContent = coins;
    monsterHPDisplay.textContent = monsterHP;
}

setInterval(autoClicker, 2000);

upgrade2.addEventListener("click", () => {
    if (coins >= upgradeCost2) {
        coins -= upgradeCost2
        clickPower2 += 20

        upgradeCost2 *= 1.4;
        upgradeCost2 = Math.round(upgradeCost2);
    }

    coinsDisplay.textContent = coins;
    upgradeDisplay2.textContent = upgradeCost2;
    clickPowerDisplay.textContent = clickPower + clickPower2;
});