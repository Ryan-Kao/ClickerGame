let counter = 0;
let clickPower = 1;
let upgradeCost = 20;

const button = document.querySelector("#btn");
const counterDisplay = document.querySelector("#counter");
const upgradeDisplay = document.querySelector("#upgradeCost");

button.addEventListener("click", () => {
    counter += clickPower;
    counterDisplay.textContent = counter;
});

const upgrade = document.querySelector("#upgrade");

upgrade.addEventListener("click", () => {
    if (counter >= upgradeCost) {
        counter -= upgradeCost;
        clickPower++;

        upgradeCost +=20;

        counterDisplay.textContent = counter;
        upgradeDisplay.textContent = upgradeCost;
    }
});