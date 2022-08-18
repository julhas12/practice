document.getElementById("btn-withdraw").addEventListener("click", function () {
    const WithdrawField = document.getElementById("Withdraw-field");

    const newWithdrewAmountString = WithdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrewAmountString);

    const withdrawTotalElement = document.getElementById("withdraw-total");

    const previousWithdrawTotalString = withdrawTotalElement.innerText;

    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);

    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;

    withdrawTotalElement.innerText = currentWithdrawTotal;

    const balanceTotal = document.getElementById('total-balance');

    const previousBlanceString = balanceTotal.innerText;

    const previoBalanceTotal = parseFloat(previousBlanceString);

    const newBalanceTotal = previoBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
    console.log(newBalanceTotal)



    WithdrawField.value = '';
});
