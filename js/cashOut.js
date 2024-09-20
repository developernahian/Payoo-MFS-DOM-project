//set event handler (cash out button click)
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();

    // console.log('cash out button clicked')

    //get the cashout amount and pin
    const inputCashOut = document.getElementById('input-cash-out').value
    const inputCashOutPin = document.getElementById('input-cash-out-pin').value
    // console.log(inputCashOut, inputCashOutPin)

    //pin veriry
    if(inputCashOutPin === '1234'){
        // console.log('pin correct')

        const balance = document.getElementById('account-balance').innerText
        console.log(balance)

        //reduce the balance
        const newBalance = parseFloat(balance) - parseFloat(inputCashOut)

        //update the UI
        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('failed to add money! Please try again.')
    }



})