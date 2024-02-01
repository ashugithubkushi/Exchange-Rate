const currency_one = document.getElementById("currency-one");
const amount_one = document.getElementById("amount-one");

const currency_two = document.getElementById("currency-two");
const amount_two = document.getElementById("amount-two");

const swapBtn = document.getElementById("swap");
const result = document.getElementById("rate");

function calculate(){
let curreny_one_value = currency_one.value;
let curreny_two_value = currency_two.value;


fetch(`https://open.exchangerate-api.com/v6/latest`)
.then((res) => res.json())
.then((data) => {
    console.table(data);
    console.group(data.rates.USD);
    const rate = data.rates[curreny_one_value] / data.rates[curreny_two_value];
    console.log(rate);

    result.innerHTML = `1 ${curreny_one_value} = ${rate} ${curreny_two_value}`;
    amount_two.value = (amount_one.value * rate).toFixed(2); 
})
.catch((error) => {
    console.log(error.message);
});
}

currency_one.addEventListener("change" , calculate);
currency_two.addEventListener("change" , calculate);
amount_one.addEventListener("input" , calculate);
amount_two.addEventListener("input" , calculate);

swapBtn.addEventListener("click", () => {
    const temp = currency_one.value;
    curreny_one_value = curreny_two_value;
    curreny_two_value = temp;
    calculate();
});
