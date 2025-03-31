let bill = 0
let tipPersentage = 0
let numberOfPeople = 0
let buttonSelected = null

function receiveBillValue() {
    bill = document.querySelector("#bill").valueAsNumber
}

function receiveNumberOfPeopleValue() {
    numberOfPeople = document.querySelector("#people").valueAsNumber
}

function receiveTipPersentageValue(value) {
    tipPersentage = value / 100
    if(buttonSelected !== null){
        buttonSelected.classList.remove("button-selected")
    }
    buttonSelected = document.querySelector(`#button-${value}`)
    buttonSelected.classList.add("button-selected")
}