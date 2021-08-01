const currencyE1 = document.getElementById('currency-one');
const currencyE2 = document.getElementById('currency-two');
const amountE1 = document.getElementById('amount-one');
const amountE2 = document.getElementById('amount-two');

const swap = document.getElementById('swap');
const rate1 = document.getElementById('rate');


function calculate() {
    const currency1 = currencyE1.value
    const currency2 = currencyE2.value


    fetch(`https://v6.exchangerate-api.com/v6/867b8dcb65e5a50c756707e4/latest/${currency1}`)

    .then((res) => res.json())
        .then(data => {
            //  console.log(data);

            const rate = data.conversion_rates[currency2];
            rate1.innerText = `1 ${currency1}=${rate} ${currency2}`

            amountE2.value = (amountE1.value * rate).toFixed(2);
        });

    swap.addEventListener('click', () => {

        const temp = currencyE1.value;
        currencyE1.value = currencyE2.value;
        currencyE2.value = temp;
        calculate();
    });

}


currencyE1.addEventListener('change', calculate);
currencyE2.addEventListener('change', calculate);
amountE1.addEventListener('input', calculate);
amountE2.addEventListener('input', calculate);

calculate();