
createCalculator(calculator);

const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');
const result = document.querySelector('.result')

const numbers = document.querySelectorAll('#date-number');
//const operators = document.querySelectorAll('#operator');

const allDelete = document.getElementById('all-delete');
const del = document.getElementById('delete')

function startCalc(operand, numbers){
    numbers.forEach((el) => {
        el.addEventListener('click', function(){
            let last = operand.innerHTML.length -1
            if (
                operand.innerHTML[0] === '0' || 
                operand.innerHTML[0] === '.' ||
                operand.innerHTML[0] === ' + ' || 
                operand.innerHTML[0] === ' - ' ||
                operand.innerHTML[0] === ' * ' ||
                operand.innerHTML[0] === ' ÷ ' 
                )
            {
                operand.innerHTML = ''
            } 
            else if (el.innerText === 'DEL'){
                let x = operand.innerHTML.slice(0, last)
                operand.innerHTML = x
            }
            else if (operand.innerHTML[last] === ''){
                //Enter the new function 
                return
            }
            else if (
                el.innerText === ' + ' ||
                el.innerText === ' - ' ||
                el.innerText === ' * ' ||
                el.innerText === ' ÷ '
            ){
                operand.innerHTML += el.innerText 
            }
            else if (operand.innerText.length < 25){
                operand.innerHTML += el.innerText
            }
        })}
    )
}


function enterOperators(operand, operator){
    operator.forEach((el) => {
        el.addEventListener('click', function(){
            if (operand.innerHTML[0] === '+' || 
                operand.innerHTML[0] === '.' ||
                operand.innerHTML[0] === '*' ||
                operand.innerHTML[0] === '÷' 
            ){
                operand.innerHTML = ''
            } 
            else {
                operand.innerHTML += ' ' + el.innerText + " "
            }
        })
    })
}

startCalc(firstOperand, numbers)

//console.log(numbers);
//enterOperators(firstOperand, operators)


// function valueClickNum(btn, operand){
//     if (operand.innerHTML[0] === '0' || operand.innerHTML[0] === '.'){
//         operand.innerHTML = ''
//     }
//     else{
//         operand.innerHTML += btn.innerText
//     }   
// }


// function updateDisplay(operand, numbersCalc){
//     for(let btn of numbersCalc){
//         btn.addEventListener('click', function(){ 
//             if (operand.innerHTML.length < 25){
//                 valueClickNum(btn, operand) 
//             } 
//         })
//     }
// }

// function defineValues(operand, numbersCalc){
//     if (operand.innerHTML.length == 0){
//         updateDisplay(operand, numbersCalc)
//     }
// }

// defineValues(firstOperand, numbers)




