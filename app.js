const container = document.querySelector('.container');
const billAmountElem = document.getElementById('bill-amount');
const tipPercentageElem = document.getElementById('tip-percentage');
const tipInputElem = document.getElementById('tip-input');
const splitValueElem = document.getElementById('split-value');
const splitInputElem = document.getElementById('split-input');
const totalPerPersonElem = document.getElementById('total-per-person');
const billPerPersonElem = document.getElementById('bill-per-person');
const tipPerPersonElem = document.getElementById('tip-per-person');

function updateValues() {
  let billAmount = Number(billAmountElem.value);
  let tipPercentage = tipInputElem.value;
  let persons = splitInputElem.value;
  let tipValue = (tipPercentage / 100) * billAmount;
  let tipEach = tipValue;
  let totalEach = (billAmount + tipValue) / persons;
  let billEach =  billAmount / persons;

  tipPercentageElem.innerHTML = `${tipPercentage}%`;
  splitValueElem.innerHTML = formatSplit(persons);
  totalPerPersonElem.innerHTML = formatMoney(totalEach);
  billPerPersonElem.innerHTML = formatMoney(billEach);
  tipPerPersonElem.innerHTML = formatMoney(tipEach);
}

function formatMoney(value) {
  value = Math.ceil(value * 100) / 100;
  value = value.toFixed(2);
  return `${value}`;
}

function formatSplit(value) {
  return `${value} People`;
}

container.addEventListener('input', updateValues);