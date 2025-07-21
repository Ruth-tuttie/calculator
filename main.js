let display = document.querySelector('.js-display');
let number = document.querySelector('p').innerHTML;




function toDisplay(number){
    display.value += number

};

function toClear(){
    display.value=''
}
function toCalculate() {
    
    display.value = eval(display.value)

};
