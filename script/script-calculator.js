
createCalculator(calculator);

function clear(firstOperand, secondOperand){
    let text = ''
    firstOperand.innerText = text
    secondOperand.innerText = text
};

const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');
const result = document.querySelector('.result')

const numbers = document.querySelectorAll('#date-number');
const operators = document.querySelectorAll('#operator');

const allDelete = document.getElementById('all-delete');
const del = document.getElementById('delete')


clear(firstOperand, secondOperand)

function valueClick(numbersCalculator){
    numbersCalculator.forEach(el => {
        el.addEventListener('click', () => el.innerText)
    })
}

function updateDisplay(operand, numbersCalculator){
    let n = ''
    //n += valueClick(numbersCalculator)
    if (n[0] == '.' || n[0] == '0') return 
    else if (n.length > 29) return 
    else operand.innerText = n
}

updateDisplay(firstOperand, numbers)

// updateDisplay(firstOperand, numbers)

// function valueClick (numbersCalculator){
//     numbersCalculator.forEach(el => {
//         el.addEventListener('click', () => {
//             let n = el.innerText
//             return n
//         })  
//     })  
// };


// secondOperand.innerText = '123456789'
// result.innerText = '123456789'
// console.log(firstOperand);
// console.log(secondOperand);
// console.log(result);
// console.log(x.length);

