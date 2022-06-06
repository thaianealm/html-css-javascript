const CURRENT_NUMBER = document.getElementById('currentNumber');
let count = 0;

document.getElementById('subtraction').addEventListener('click', function(){
    decremente();
});

document.getElementById('addition').addEventListener('click', function(){
    increment();
});

function decremente(){
    count = count - 1;
    CURRENT_NUMBER.innerHTML = count;
};

function increment(){
    count = count + 1;
    CURRENT_NUMBER.innerHTML = count;
};