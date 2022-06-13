
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
    output.setAttribute('class', 'output')
    container.appendChild(output)
    btn.forEach(element => {
        let btn = document.createElement('button')
        btn.innerHTML = element
        container.appendChild(btn)
    });
    let btnCalculator = container.querySelectorAll('button')
    btnCalculator.forEach(el=>{
        el.setAttribute('class', 'btn')
    })
};

createCalculator(btn, calculator)



