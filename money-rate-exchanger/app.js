 window.addEventListener("load", function(){
    const currencyOne = document.getElementById("currency-one");
    const currencyTwo = document.getElementById("currency-two");
    const amountOne = document.getElementById("amount-one");
    const amountTwo = document.getElementById("amount-two");
    const swap = document.getElementById("swap");
    
    currencyOne.addEventListener("change", calculate);
    currencyTwo.addEventListener("change", calculate);
    amountOne.addEventListener("input", calculate);
    amountTwo.addEventListener("input", calculate);
    swap.addEventListener("click", onClickSwap);
 });

function calculate(){
    const currencyOne = document.getElementById("currency-one");
    const currencyTwo = document.getElementById("currency-two");
    const amountOne = document.getElementById("amount-one");
    const amountTwo = document.getElementById("amount-two");
    const rate = document.getElementById("rate");

    let currencyOneValue = currencyOne.value;   
    let currencyTwoValue = currencyTwo.value;
    
    fetch(`https://api.exchangeratesapi.io/latest?base=${currencyOneValue}`).
        then(res => res.json()).
        then(data => {
            let money = data.rates[currencyTwoValue];
            rate.innerText = `1 ${currencyOneValue} = ${money} ${currencyTwoValue}`;
            amountTwo.value = (amountOne.value * money).toFixed(2);
        }); 
}

function onClickSwap() {
    let currencyOne = document.getElementById("currency-one");
    let currencyTwo = document.getElementById("currency-two");

    let temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;

    calculate();
}