let counter = 0;
let clickPower = 40;
let upgradeCost = 20;
let autoClickerPower = 0;
let autoClickerCost = 100;
let upgradeCost2 = 300;
let clickPower2 = 0;

const button = document.querySelector("#btn");
const upgrade = document.querySelector("#upgrade");
const autoClickerBtn = document.querySelector("#autoClickerBtn")
const counterDisplay = document.querySelector("#counter");
const upgradeDisplay = document.querySelector("#upgradeCost");
const autoClickerCostDisplay = document.querySelector("#autoClickerCost");
const upgrade2 = document.querySelector("#upgrade2");
const upgradeDisplay2 = document.querySelector("#upgradeCost2");
const clickPowerDisplay = document.querySelector("#currentClickPower");
const autoClickerDisplay = document.querySelector("#currentAutoClickers");

button.addEventListener("click", () => {
    counter += clickPower;
    counter += clickPower2;
    counterDisplay.textContent = counter;
});


upgrade.addEventListener("click", () => {
    if (counter >= upgradeCost) {
        counter -= upgradeCost;
        clickPower++;

        upgradeCost *= 1.2;
        upgradeCost = Math.round(upgradeCost);

        counterDisplay.textContent = counter;
        upgradeDisplay.textContent = upgradeCost;
        clickPowerDisplay.textContent = clickPower + clickPower2;
    }
});

autoClickerBtn.addEventListener("click", () => {
    if (counter >= autoClickerCost) {
        counter -= autoClickerCost;
        autoClickerPower++;

        autoClickerCost *= 1.2;
        autoClickerCost = Math.round(autoClickerCost);

        counterDisplay.textContent = counter;
        autoClickerCostDisplay.textContent = autoClickerCost;
        autoClickerDisplay.textContent = autoClickerPower;
    }
});

function autoClicker() {
    counter += autoClickerPower;

    counterDisplay.textContent = counter;
}

setInterval(autoClicker, 2000);

upgrade2.addEventListener("click", () => {
    if (counter >= upgradeCost2) {
        counter -= upgradeCost2
        clickPower2 += 20

        upgradeCost2 *= 1.4;
        upgradeCost2 = Math.round(upgradeCost2);

        counterDisplay.textContent = counter;
        upgradeDisplay2.textContent = upgradeCost2;
        clickPowerDisplay.textContent = clickPower + clickPower2;
    }
});