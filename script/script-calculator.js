
createCalculator(calculator);

const firstOperand = document.querySelector('.first-operand');
const secondOperand = document.querySelector('.second-operand');

let display = "0"
firstOperand.innerHTML = display

const numbers = document.querySelectorAll('#date-number');
const operations = document.querySelectorAll('#operation')

const allClear = document.getElementById('all-clear');
const clear = document.getElementById('delete');

for (let index in numbers){
    display = ""
    firstOperand.innerHTML = index
}

// let startCalculator = () => {

// }


// function writeValues(){
//     number = ""
//     btnOne.onclick = function (){
//         number += "1"
//         firstOperand.innerHTML = number
//     };

//     btnTwo.onclick = function (){
//         number += "2"
//         firstOperand.innerHTML = number
//     };

//     btnThree.onclick = function (){
//         number += "3"
//         firstOperand.innerHTML = number
//     };

//     btnFour.onclick = function (){
//         number += "4"
//         firstOperand.innerHTML = number
//     };
//     btnFive.onclick = function (){
//         number += "5"
//         firstOperand.innerHTML = number
//     };

//     btnSix.onclick = function (){
//         number += "6"
//         firstOperand.innerHTML = number
//     };

//     btnSeven.onclick = function (){
//         number += "7"
//         firstOperand.innerHTML = number
//     };

//     btnEight.onclick = function (){
//         number += "8"
//         firstOperand.innerHTML = number
//     };

//     btnNine.onclick = function (){
//         number += "9"
//         firstOperand.innerHTML = number
//     };

//     btnZero.onclick = function (){
//         number += "0"
//         firstOperand.innerHTML = number
//     };
// };


// // writeValues()
// // // btnOne.onclick = function (){
// // //     number = "1"
// // //     firstOperand.innerHTML = number
// // // }
// // // // btnOne.addEventListener('click', firstOperand.innerHTML += "1")
// // // // btnTwo.addEventListener('click', firstOperand.innerHTML += '2')
// // // // btnThree.addEventListener('click', firstOperand.innerHTML += '3')
// // // // btnFour.addEventListener('click', firstOperand.innerHTML += '4')
