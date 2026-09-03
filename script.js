let counter = 0;
let clickPower = 1;
let upgradeCost = 20;
let autoClickerPower = 0;
let autoClickerCost = 100;

const button = document.querySelector("#btn");
const upgrade = document.querySelector("#upgrade");
const autoClickerBtn = document.querySelector("#autoClickerBtn")
const counterDisplay = document.querySelector("#counter");
const upgradeDisplay = document.querySelector("#upgradeCost");
const autoClickerCostDisplay = document.querySelector("#autoClickerCost");

button.addEventListener("click", () => {
    counter += clickPower;
    counterDisplay.textContent = counter;
});

upgrade.addEventListener("click", () => {
    if (counter >= upgradeCost) {
        counter -= upgradeCost;
        clickPower++;

        upgradeCost += 20;

        counterDisplay.textContent = counter;
        upgradeDisplay.textContent = upgradeCost;
    }
});

autoClickerBtn.addEventListener("click", () => {
    if (counter >= autoClickerCost) {
        counter -= autoClickerCost;
        autoClickerPower++;

        autoClickerCost += 100;

        counterDisplay.textContent = counter;
        autoClickerCostDisplay.textContent = autoClickerCost;
    }
});

function autoClicker() {
    counter += autoClickerPower;

    counterDisplay.textContent = counter;
}

setInterval(autoClicker, 2000)