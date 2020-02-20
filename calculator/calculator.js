let numberButtons
let operationButtons
let screen
let comma
let result
let clearAll
let clearLast

let lastNumber = 0
let lastOperation = ''
let isComma = false // if true user can't enter a comma
let isCalculated = true // if true "operation buttons" and a "result button" can't give a result
let isOperation = true // if false user can concatenate digits into numbers on the "screen"

onload = function () {
    numberButtons = document.querySelectorAll('.number')
    operationButtons = document.querySelectorAll('.operation')
    screen = document.querySelector('#screen')
    comma = document.querySelector('#comma')
    result = document.querySelector('#result')
    clearAll = document.querySelector('#clear-all')
    clearLast = document.querySelector('#clear-last')
    addEvents()
}

function addEvents() {
    for (let i = 0; i < numberButtons.length; i++) {
        numberButtons[i].addEventListener('click', () => {
            if (isOperation || screen.innerText == '0') {
                screen.innerText = numberButtons[i].innerText
                isOperation = false
            } else if (screen.innerText.length < 17) {
                screen.innerText += numberButtons[i].innerText
            }
            isCalculated = false
        })
    }

    for (let i = 0; i < operationButtons.length; i++) {
        operationButtons[i].addEventListener('click', () => {
            isOperation = true
            isComma = false
            showResult();
            lastNumber = parseFloat(screen.innerText)
            lastOperation = operationButtons[i].innerText
        })
    }

    comma.addEventListener('click', () => {
        if (!isComma) {
            if (isOperation) {
                screen.innerText = '0.'
                isOperation = false
            } else {
                screen.innerText += '.'
            }
            isComma = true;
        }
    })

    result.addEventListener('click', () => {
        if (!isOperation) {
            showResult()
        }
    })

    clearLast.addEventListener('click', () => {
        isOperation = true
        isComma = false
    })

    clearAll.addEventListener('click', restart)
}

function showResult() {
    if (!isCalculated) {
        isOperation = true
        isComma = false
        isCalculated = true
        let number = 0 // additional variable to round the result
        switch (lastOperation) {
            case '+':
                number = lastNumber + parseFloat(screen.innerText)
                screen.innerText = Math.round(number * 100) / 100
                break
            case '-':
                number = lastNumber - parseFloat(screen.innerText)
                screen.innerText = Math.round(number * 100) / 100
                break
            case '/':
                if (parseFloat(screen.innerText) != 0) {
                    number = lastNumber / parseFloat(screen.innerText)
                    screen.innerText = Math.round(number * 100) / 100
                } else {
                    alert('You can\'t divide by zero. Press "OK" to restart.')
                    restart()
                }
                break
            case '*':
                number = lastNumber * parseFloat(screen.innerText)
                screen.innerText = Math.round(number * 100) / 100
                break
            default:
                break
        }
        lastNumber = parseFloat(screen.innerText)
        lastOperation = ''
    }
}

function restart() {
    screen.innerText = '0'
    isOperation = true
    lastNumber = 0
    isComma = false
    isCalculated = true
    lastOperation = ''
}