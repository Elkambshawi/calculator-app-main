
let numbers = document.querySelectorAll('.number');
let inputData = document.querySelector('.screen-input');
let operations = document.querySelectorAll('.operation');
let equalBtn = document.querySelector('.equal');
let delBtn = document.querySelector('.del');
let resetBtn = document.querySelector('.reset');

let num1 = [];
let operation = [];
let num2 = [];


function getData(numbers, operations) {
    numbers.forEach((number) => {
        number.addEventListener('click', (e) => {
            e.preventDefault();
            if (operation.length === 0) {
                num1 = [...num1, e.target.dataset.calc]
                console.log('num1', num1);
                inputData.value = num1.join('');

            } else {
                num2 = [...num2, e.target.dataset.calc]
                console.log('num2', num2);
                inputData.value = `${num1.join('')}${operation.join('')}${num2.join('')}`
            }
        })
    })

    operations.forEach(operate => {
        operate.addEventListener('click', (e) => {
            e.preventDefault();
            operation = [e.target.dataset.calc];
            inputData.value = `${inputData.value}${operation.join()}`
        })
    })
}

getData(numbers, operations);


let fullOperation = {
    '+' : function(num1,num2) {return(num1 + num2)},
    '-' : function(num1,num2) {return(num1 - num2)},
    '*' : function(num1,num2) {return(num1 * num2)},
    '/' : function(num1,num2) {return(num1 / num2)},
}

equalBtn.onclick = function(e) {
    e.preventDefault();
    if (num1.length > 0 && num2.length > 0 && operation.length > 0) {
        console.log(fullOperation[operation.join('')](+num1.join(''), +num2.join('')))
        inputData.value = fullOperation[operation.join('')](+num1.join(''), +num2.join(''));
        num1 = [];
        operation = [];
        num2 = [];

    }
};

delBtn.onclick = function(e) {
    e.preventDefault();
    if(inputData.value != '') {
        if (num2.length > 0) {
            num2.pop();
            inputData.value = `${num1.join('')}${operation.join('')}${num2.join('')}`
        } else if (operation.length > 0) {
            operation.pop();
            inputData.value = `${num1.join('')}`
        } else {
            num1.pop();
            inputData.value = num1.join('');
        }
    }
}

resetBtn.onclick = function () {
        num1 = [];
        operation = [];
        num2 = [];
        inputData.value = '';
}