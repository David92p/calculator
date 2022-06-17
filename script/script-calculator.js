
createCalculator(calculator);

const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');



const numbers = document.querySelectorAll('#date-number');
const operators = document.querySelectorAll('#operator')

const allClear = document.getElementById('all-clear');
const clear = document.getElementById('delete');

let writeNumbers = (numbersCalculator, operand) => {
    operand.innerHTML = "0"
    numbersCalculator.forEach((el,i) => {
        let count = ""
        if (el.addEventListener('click', () => {

        })){
            console.log(count);
        }
        else if (i == 9){
            el.addEventListener('click', () => {
                let n = "."
                count += n
                firstOperand.innerHTML = count
            })
        }
        else if (i == 10){
            el.addEventListener('click', () => {
                let n = "0"
                count += n
                firstOperand.innerHTML = count
            })
        }
        else el.addEventListener('click', () => {
            let n = i + 1
            count += n.toString()
            firstOperand.innerHTML = count
        })
        
     })
}
    
writeNumbers(numbers, firstOperand);

