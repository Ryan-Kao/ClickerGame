let monsterMaxHP = 50;
let monsterHP = 50;
let clickPower = 1;
let upgradeCost = 20;
let autoClickerPower = 0;
let autoClickerCost = 100;
let upgradeCost2 = 300;
let clickPower2 = 0;
let currentCoins = 0;
let coinsGained = 100;
let stage = 1;

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
const newStageDisplay = document.querySelector("#currentStage");

button.addEventListener("click", () => {
    monsterHP -= clickPower;
    monsterHP -= clickPower2;

    if (monsterHP <= 0) {
        stage++;
        currentCoins += Math.round(coinsGained);
        coinsGained *= 1.3;
        monsterMaxHP *= 1.2;
        monsterHP = Math.round(monsterMaxHP);
    }

    newStageDisplay.textContent = stage;
    coinsDisplay.textContent = currentCoins;
    monsterHPDisplay.textContent = monsterHP;
});


upgrade.addEventListener("click", () => {
    if (currentCoins >= upgradeCost) {
        currentCoins -= upgradeCost;
        clickPower++;

        upgradeCost *= 1.4;
        upgradeCost = Math.round(upgradeCost);
    }

    coinsDisplay.textContent = currentCoins;
    upgradeDisplay.textContent = upgradeCost;
    clickPowerDisplay.textContent = clickPower + clickPower2;
});

autoClickerBtn.addEventListener("click", () => {
    if (currentCoins >= autoClickerCost) {
        currentCoins -= autoClickerCost;
        autoClickerPower++;

        autoClickerCost *= 1.4;
        autoClickerCost = Math.round(autoClickerCost);
    }

    coinsDisplay.textContent = currentCoins;
    autoClickerCostDisplay.textContent = autoClickerCost;
    autoClickerDisplay.textContent = autoClickerPower;
});

function autoClicker() {
    monsterHP -= autoClickerPower;
    if (monsterHP <= 0) {
        currentCoins += Math.round(coinsGained);
        coinsGained *= 1.3;
        monsterMaxHP *= 1.2;
        monsterHP = Math.round(monsterMaxHP);
    }

    coinsDisplay.textContent = currentCoins;
    monsterHPDisplay.textContent = monsterHP;
}

setInterval(autoClicker, 2000);

upgrade2.addEventListener("click", () => {
    if (currentCoins >= upgradeCost2) {
        currentCoins -= upgradeCost2
        clickPower2 += 20

        upgradeCost2 *= 1.4;
        upgradeCost2 = Math.round(upgradeCost2);
    }

    coinsDisplay.textContent = currentCoins;
    upgradeDisplay2.textContent = upgradeCost2;
    clickPowerDisplay.textContent = clickPower + clickPower2;
});