// form inputs

const bill = document.querySelector('#bill');
const peoples = document.querySelector('#peoples');
const custom = document.querySelector('#custom');

const tips = document.querySelectorAll('input[name="percentage"]');
const customOveride = document.querySelector('#custom-override');

const resetBtn = document.querySelector('#reset');

// UI fields to populate

const tipAmount = document.querySelector('#tip-amount');
const total = document.querySelector('#total');

// Events listeners

bill.addEventListener('keyup', calculate);
peoples.addEventListener('keyup', calculate);
custom.addEventListener('keyup', addCustomTip);
tips.forEach((tip) => {
  tip.addEventListener('change', addSelectedTip);
});
resetBtn.addEventListener('click', reset);

// Function declarations

function calculate() {
  if (bill.value === '' || peoples.value === '') {
    return;
  }

  tipValue = (bill.value * (customOveride.value / 100)) / peoples.value;
  totalValue = bill.value / peoples.value + tipValue;

  tipAmount.value = `$${tipValue.toFixed(2)}`;
  total.value = `$${totalValue.toFixed(2)}`;
}

function addSelectedTip(event) {
  // set selected value in variable
  const selectedTip = parseInt(event.target.value);

  // remove custom override oncustom input
  custom.value = '';

  // set hidden checkbox value
  customOveride.value = selectedTip;

  calculate();
}

function addCustomTip() {
  // extract value into variable
  const customTip = parseInt(custom.value);

  // set hidden checkbox to true
  customOveride.checked = true;
  // set hidden checkbox value
  customOveride.value = customTip;

  calculate();
}

function reset() {
  bill.value = '';
  peoples.value = '';
  custom.value = '';
  customOveride.checked = true;
  customOveride.value = 0;
  tipAmount.value = '';
  total.value = '';
}
