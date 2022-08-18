document.getElementById("btn-withdraw").addEventListener("click", function () {
    const WithdrawField = document.getElementById("Withdraw-field");
    const newWithdrewAmountString = WithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrewAmountString);

    WithdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('please provide a valid Number')
        return;
    }

    const withdrawTotalElement = document.getElementById("withdraw-total");
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);


    const balanceTotal = document.getElementById('total-balance');
    const previousBlanceString = balanceTotal.innerText;

    const previoBalanceTotal = parseFloat(previousBlanceString);

    // WithdrawField.value = '';

    if (newWithdrawAmount > previoBalanceTotal) {
        alert('tor baper bank e ato taka nai')
        return;
    }

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;

    const newBalanceTotal = previoBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal)

});
