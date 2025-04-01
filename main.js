let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber;
    updateResults();
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber;
    updateResults();
}

function receiveTipPercentageValue(value) {
    tipPercentage = value / 100;
    
    document.querySelector("#custom-tip").value = "";
    
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
    }
    
    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");
    
    updateResults();
}

function receiveCustomTipPercentageValue() {
    tipPercentage = document.querySelector("#custom-tip").valueAsNumber / 100;
    removeClassButtonSelected();
    updateResults();
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function updateResults() {
    if (bill > 0 && numberOfPeople > 0) {
        const tipAmount = (bill * tipPercentage) / numberOfPeople;
        const total = (bill + (bill * tipPercentage)) / numberOfPeople;
        
        document.querySelector("#tip-amount").textContent = `$${tipAmount.toFixed(2)}`;
        document.querySelector("#total").textContent = `$${total.toFixed(2)}`;
    } else {
        document.querySelector("#tip-amount").textContent = "$0.00";
        document.querySelector("#total").textContent = "$0.00";
    }
}

function resetCalculator() {
    bill = 0;
    tipPercentage = 0;
    numberOfPeople = 0;
    buttonSelected = null;
    
    document.querySelector("#bill").value = "";
    document.querySelector("#custom-tip").value = "";
    document.querySelector("#people").value = "";
    
    document.querySelector("#tip-amount").textContent = "$0.00";
    document.querySelector("#total").textContent = "$0.00";
    
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
    }
}