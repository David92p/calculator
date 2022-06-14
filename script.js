
// Inseriamo all'interno del documento il container 
const body = document.getElementsByTagName('body');
const container = document.createElement('div');
document.body.appendChild(container);
// Di seguito inseriamo gli attributi 
container.setAttribute('class', 'container color-container');

const calculator = document.createElement('div');
container.appendChild(calculator);
calculator.setAttribute('class', 'calculator');
const btn = ['AC', 'DEL', '÷', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '='];

let createCalculator = (btn, container) => {
    let output = document.createElement('div');
    output.setAttribute('class', 'output');
    container.appendChild(output);
    let firstOperand = document.createElement('div');
    let secondOperand = document.createElement('div');
    firstOperand.setAttribute('class', 'first-operand');
    secondOperand.setAttribute('class', 'second-operand');
    output.appendChild(firstOperand);
    output.appendChild(secondOperand);
    btn.forEach(element => {
        let btn = document.createElement('button')
        btn.innerHTML = element
        container.appendChild(btn)
    });
    let btnCalculator = container.querySelectorAll('button');
    for (let index in btnCalculator){
        if (index == 0 || index == btnCalculator.length -1){
            btnCalculator[index].setAttribute('class', 'btn btnBig')
        }else {
            btnCalculator[index].setAttribute('class', 'btn')
        }
    }
};

createCalculator(btn, calculator);

// let first = document.querySelector('.first-operand');
// let second = document.querySelector('.second-operand');

// let firstPar = document.createElement('p');
// let secondPar = document.createElement('p');
// firstPar.innerHTML = '123456789'
// secondPar.innerHTML = '123456789'
// console.log(first);
// console.log(second);







