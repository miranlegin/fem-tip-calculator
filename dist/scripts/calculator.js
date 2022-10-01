// form inputs

const bill = document.querySelector('#bill');
const peoples = document.querySelector('#peoples');
const custom = document.querySelector('#custom');
const inputs = document.querySelectorAll('.input');
const tips = document.querySelectorAll('input[name="percentage"]');
const customOveride = document.querySelector('#custom-override');
const resetBtn = document.querySelector('#reset');

// UI fields to populate

const tipAmount = document.querySelector('#tip-amount');
const total = document.querySelector('#total');

inputs.forEach((input) => {
  //   input.addEventListener('keyup', calculate);
});

custom.addEventListener('keyup', addCustom);

tips.forEach((tip) => {
  tip.addEventListener('change', selectTip);
});

function selectTip(event) {
  const selectedTip = event.target.value;
  custom.value = '';
  calculate(selectedTip);
}

function addCustom() {
  amount = custom.value;
  customOveride.checked = true;
  customOveride.value = amount;
  calculate(amount);
}

function calculate(amount) {
  if (bill.value === '' || peoples.value === '') {
    return;
  }

  //   console.log(bill.value, peoples.value);

  tipValue = (bill.value * (amount / 100)) / peoples.value;
  totalValue = bill.value / peoples.value + tipValue;

  //   console.log(tipValue, totalValue);

  tipAmount.value = `$${tipValue.toFixed(2)}`;
  total.value = `$${totalValue.toFixed(2)}`;
}

resetBtn.addEventListener('click', reset);

function reset() {
  inputs.forEach((input) => {
    input.value = '';
  });

  customOveride.checked = true;
  customOveride.value = 1;
  total.value = '';
  tipAmount.value = '';
}
