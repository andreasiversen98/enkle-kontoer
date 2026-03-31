function changeBalance(amount) {
  bankAccount.changeBalance(amount);
  updateView();
}

function addCustomAmount(inputValue) {
  const amount = Number(inputValue);
  bankAccount.changeBalance(amount);
  updateView();
}
