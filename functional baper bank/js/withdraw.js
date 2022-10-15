/* 
 1. add withdraw button handler
 2. get withdraw amount by using by get InputFieldValueById function
 3. previous withdraw amount by using getTextElementValueById function
 4. calculate new withdraw total and set the value
 4-5. set new withdraw total by using setTextElementValueById function
 5. get previous balance total by using  getElementValueById function
 6. calculate new balance total
 7. set balance total using setTextElementValueById function
*/


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueById('Withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawTotal +newWithdrawAmount ;
    setTextElementvalueById('withdraw-total', newWithdrawTotal);
    const previousbalanceTotal = getTextElementValueById('total-balance');
    const newBalanceTotal = previousbalanceTotal - newWithdrawAmount;
    setTextElementvalueById('total-balance', newBalanceTotal)

})