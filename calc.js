
window.addEventListener('DOMContentLoaded', (e) => {
//all elements that represent a number
let number = document.getElementsByClassName('number');
//all operator elements
let operatorList = document.getElementsByClassName('operator');

let clear = document.getElementById('clear');
let equals = document.getElementById('equals');
let undo = document.getElementById('undo');
//result screen to display total
let result = document.getElementById('result');

//track current values such as string value, number value, current operator
let runningTotal;
let value = '';
let currentOperator;

//function that tracks the click of each number and stores the string value
const trackNumberInput = () => {
    for(let i = 0; i < number.length; i++) {
        let currentNumber = number[i];
        currentNumber.addEventListener('click', (e) => {
            if(currentOperator !== '=') {
            value += e.target.innerText;
            result.innerText = value;
            console.log('value', value)
            };

        });
    }

};

const trackOperatorInput = () => {
    for(let i = 0; i < operatorList.length; i++) {
        let operator = operatorList[i];
        operator.addEventListener('click', (e) => {
            currentOperator = e.target.innerText;
            if(value.length) {
                let num = makeNumber(value);
                //check for percentage
                if(e.target.innerText === '%') {
                    let percent = (num / 100);
                    runningTotal = percent;
                }

                else {
                    runningTotal = num;
                }

                value = '';
            };


        });
    };
};

//call the function to track the events
trackNumberInput();
trackOperatorInput();
//helper function to make string value into an integer
const makeNumber = (strNum) => {
    return Number(strNum);
}

//check for equals to log the total
equals.addEventListener('click', (e) => {
    //total out addition
    if(currentOperator === '+') {
        runningTotal += makeNumber(value);
    };

    //total out subtraction
    if(currentOperator === '-') {
        runningTotal -= makeNumber(value);
    };
    //total out multiplication
    if(currentOperator === 'x') {
        runningTotal *= makeNumber(value);
    };
    //total out division
    if(currentOperator === '/') {
        runningTotal /= makeNumber(value);
    };
    if(currentOperator === '^pow') {
        runningTotal = Math.pow(runningTotal, makeNumber(value));
    }


    result.innerText = runningTotal.toString().slice(0, 10);

    value = runningTotal.toString();
    currentOperator = e.target.innerText;
});

//clear out all values and total
clear.addEventListener('click', (e) => {

    runningTotal = 0;
    value = '';
    result.innerText = 0;
    currentOperator = e.target.innerText;

});

undo.addEventListener('click', (e) => {
    
    if(currentOperator !== '=') {
        let arr = value.split('')
        arr.pop();
        value = arr.join('');
        result.innerText = value;
    }

})

});
