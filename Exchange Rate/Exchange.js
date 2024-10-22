const from_currency = document.getElementById('from-currency');
const from_amount = document.getElementById('from-amount');
const to_currency = document.getElementById('to-currency');
const to_amount = document.getElementById('to-amount');
const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

function calculate() {
  const from_currency = from_currency.value;
  const to_currency = to_currency.value;
  fetch("https://open.exchangerate-api.com/v6/latest")
    .then(res => res.json())
    .then(data => {

      const rate = data.rates[to_currency] / data.rates[from_currency];
      rateEl.innerText = `1 ${from_currency} = ${rate} ${to_currency}`;
      to_currency.value = (from_amount.value * (rate)).toFixed(2);
    });
}

from_currency.addEventListener('change', calculate);
from_amount.addEventListener('input', calculate);
to_currency.addEventListener('change', calculate);
to_currency.addEventListener('input', calculate);


calculate();




