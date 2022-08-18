
document.getElementById('btn-Deposit').addEventListener('click', function () {
    const depositField = document.getElementById('Deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)

    const depositTotalElement = document.getElementById('deposit-total');

    const previousDepositTotalString = depositTotalElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositTotalString);

    const currentDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDepositTotal;

    // get balance
    const balanceTotalElement = document.getElementById('total-balance');
    const previousBlanceString = balanceTotalElement.innerText;
    const previoBalance = parseFloat(previousBlanceString);

    const currentTotalBalance = previoBalance + newDepositAmount;
    balanceTotalElement.innerText = currentTotalBalance;

    depositField.value = '';
})