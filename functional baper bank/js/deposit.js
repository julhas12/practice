
document.getElementById('btn-Deposit').addEventListener('click', function () {
    /* 
    1.  get the elemen bu id
    2. get the value from the element
    3. convert string value to a number
    */
    const newDepositAmount = getInputFieldValueById('Deposit-field');
    /* 
        1. get previous deposit total value by id
    */

    const previousDepositToatal = getTextElementValueById('deposit-total');

    // calculate new deposit total
    const newDepositTotal = previousDepositToatal + newDepositAmount;
    //  set deposit total value
    setTextElementvalueById('deposit-total', newDepositTotal);

    // get previous balance by using the function
    const previousBalanceTotal = getTextElementValueById('total-balance')
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementvalueById('total-balance', newBalanceTotal);

})