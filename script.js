window.addEventListener('DOMContentLoaded', (e) => {
    //holds the string value of innerText
    let value = '';
    let numbers = '0123456789';
    //used to compare operator string values
    let operators = '+-x';
    //array of number values converted from strings
    let storedValues = [];

    const numberButton = document.getElementsByClassName('button');
    //all other buttons that are not numbers
    const addition = document.getElementById('plus');
    const subtract = document.getElementById('minus');
    const multiply = document.getElementById('multiply');
    const clear = document.getElementById('clear');
    const equals = document.getElementById('equals');
    //area where total will display showing 0 on default
    const result = document.getElementById('result');

    trackNumberInput = () => {
        //loop through all the buttons to catch click events
        for(let i = 0; i < numberButton.length; i ++) {
            let currentButton = numberButton[i];
            currentButton.addEventListener('click', (e) => {

                //store numbers clicked by user in value field only if its a number
                if(numbers.includes(e.target.innerText)) {
                value += e.target.innerText;
                result.innerText = value;
                console.log("value:", value)
                };

                if(operators.includes(e.target.innerText) && value.length > 0) {
                    storedValues.push(Number(value));
                    value = '';
                    console.log("storedValues:", storedValues)
                };


            });


        };
    }
    trackNumberInput();


    //global variables all set to undefined on load until first number is clicked
    let sum;
    let minusTotal;
    let product;

    addition.addEventListener('click', (e) => {
        //if sum contains a value, add that value to the next index
        if(sum) {
            sum += storedValues[1];
            storedValues.pop();
            console.log('sum:', sum)
        //if sum holds no value, make sums value the first index of stored numbers
        }
        if(sum === undefined) {
            if(storedValues.length)  sum = storedValues[0];
            else {
                sum = 0;
            }


        }
    });

    subtract.addEventListener('click', (e) => {
        if(minusTotal) {
            minusTotal -= storedValues[1];
            storedValues.pop();

        }
        if(minusTotal === undefined) {
            minusTotal = storedValues[0];

        }





    });

    multiply.addEventListener('click', (e) => {
        console.log(storedValues)
        if(product) {
            product *= storedValues[1];
            storedValues.pop();
            console.log(product)
        }
        if(product === undefined) {
            product = storedValues[0];
            console.log(product)
        }
    });
// if C is clicked all values reset and global variables are set to undefined
    clear.addEventListener('click', (e) => {
        storedValues = [];
        value = '';
        sum = undefined;
        minusTotal = undefined;
        product = undefined;
        result.innerText = 0;
    });

    equals.addEventListener('click', (e) => {

        //check for addition
        if(sum) {
        sum += Number(value);
        result.innerText = sum;
        value = '';
        };

        //check for subtraction
        if(minusTotal) {
            minusTotal -= Number(value);
            result.innerText = minusTotal;
            value = '';
        };
        //check for multiplication
        if(product) {
            console.log(product)
            console.log(value);
            product *= Number(value);

            result.innerText = product;
            value = '';
        };
    });




})
