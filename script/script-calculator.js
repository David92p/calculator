
createCalculator(calculator);

const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');
const result = document.querySelector('.result')

const numbers = document.querySelectorAll('#date-number');
const operators = document.querySelectorAll('#operator');

const allDelete = document.getElementById('all-delete');
const del = document.getElementById('delete')

function valueClick(btn, operand){
    if (operand.innerHTML[0] === '0' || operand.innerHTML[0] === '.'){
        operand.innerHTML = ''
    }
    else{
        operand.innerHTML += btn.innerText
    }   
}

function updateDisplay(operand, numbersCalc){
    for(let btn of numbersCalc){
        btn.addEventListener('click', function(){    
            valueClick(btn, operand)
        })
    }
}

function defineValues(){
    if (firstOperand.innerHTML.length == 0){
        updateDisplay(firstOperand, numbers)
    }
}



updateDisplay(firstOperand, numbers)
updateDisplay(secondOperand, numbers)


