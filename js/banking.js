
function getInputValue(inputId) {
    const depositeWithdrawInput = document.getElementById(inputId);
    const amountOfInput = parseFloat(depositeWithdrawInput.value);
    depositeWithdrawInput.value = "";
    return amountOfInput;
}
function updateTotalField(totalInputValue, ammount) {
    const totalElement = document.getElementById(totalInputValue);
    const previousTotal = parseFloat(totalElement.innerText);
    totalElement.innerText = ammount + previousTotal;
}
function getCurrentBalance() {
    const balanceInputText = document.getElementById('total-balance');
    const previousBalanceAmount = parseFloat(balanceInputText.innerText);
    return previousBalanceAmount;
}
function updateBalance(amount, isAdd) {
    const balanceInputText = document.getElementById('total-balance');
    const previousBalanceAmount = getCurrentBalance();
    if (isAdd == true) {
        balanceInputText.innerText = previousBalanceAmount + amount;
    } else if (isAdd == false) {
        balanceInputText.innerText = previousBalanceAmount - amount;
    }
}

//handle deposit button event
document.getElementById('diposite-button').addEventListener('click', function () {
    const depositeAmmount = getInputValue('deposite-input');
    if (depositeAmmount > 0) {
        updateTotalField('total-Deposit', depositeAmmount);
        updateBalance(depositeAmmount, true);
    }
})

//handle withdraw button event
document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < currentBalance) {
        updateTotalField('withdrawn-balance', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }
})