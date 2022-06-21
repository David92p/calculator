
// Inseriamo all'interno del documento il container 
const body = document.getElementsByTagName('body');
const container = document.createElement('div');
document.body.appendChild(container);
// Di seguito inseriamo gli attributi 
container.setAttribute('class', 'container color-container');

// Inseriamo un div container che avrà al suo interno la nostra calcolatrice
const calculator = document.createElement('div');
container.appendChild(calculator);
calculator.setAttribute('class', 'calculator');

// La funzione crea la calcolatrice con i vari elementi btn al suo interno utilizzando cicli condizionali per attribuire classi e id
let createCalculator = (container) => {
    let btnList = ['AC', 'DEL', '÷', '1', '2', '3', '*', '4', '5', '6', '+', '7', '8', '9', '-', '.', '0', '=']; // lista btn
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Div contenitore input - output calcolatrice
    let output = document.createElement('div');
    output.setAttribute('class', 'output');
    container.appendChild(output);
    // div contenitore di input 
    let firstOperand = document.createElement('div');
    // div contenitore di input 
    let secondOperand = document.createElement('div');
    // div contenitore di output (risultato)
    let result = document.createElement('div');
    firstOperand.setAttribute('class', 'first-operand');
    secondOperand.setAttribute('class', 'second-operand');
    result.setAttribute('class', 'result');
    output.appendChild(firstOperand);
    output.appendChild(secondOperand);
    output.appendChild(result);
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Utiliziamo un ciclo per attribuire le classi e gli id
    btnList.forEach((el, index)=>{
        let btn = document.createElement('button')
        btn.innerHTML = el
        container.appendChild(btn)
        if (
            el == '1' || 
            el == '2' || 
            el == '3' || 
            el == '4' || 
            el == '5' || 
            el == '6' || 
            el == '7' || 
            el == '8' || 
            el == '9' || 
            el == '.' ||
            el == '0'
        ){
            btn.setAttribute('id', 'date-number')
            btn.setAttribute('class', 'btn')
        }
        else if (
            el == '÷' || 
            el == '*' || 
            el == '+' || 
            el == '-' 
        ){
            btn.setAttribute('id', 'operator')
            btn.setAttribute('class', 'btn')
        }
        else if (
            el == 'AC'
        ){
            btn.setAttribute('id', 'all-clear')
            btn.setAttribute('class', 'btn btnBig')
        }
        else if (
            el == 'DEL'
        ){
            btn.setAttribute('id', 'delete')
            btn.setAttribute('class', 'btn')
        }
        else if (
            el == '='
        ){
            btn.setAttribute('id', 'total')
            btn.setAttribute('class', 'btn btnBig')
        }
        })
    };
    
    










