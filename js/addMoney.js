//add money to the account

/*
step 1: add event handler
and make sure to preventDefault() so that page does't reloads

step 2: get the  money user wants to add
and aslo get pin number

step 3: verify pin number. for, wrong pin number ==>failed to add
for right pin number, allow to add the numbe to the acount balance

step 4: get the current balance

step 5: add money to be added with the current balance

step 6: displa/update the balance in the DOM/UI

*/

// STEP: 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function(event) {
    //prevent page reload after form submit
    //input box e data entry korar por submit click howar por page reload jeno na hoy tai eta use kora hoy
    event.preventDefault();
    // console.log('money ad button clicked')

    // STEP: 2: get money to be added to the account
    const addMoneyInput = document.getElementById('input-add-money').value
    // console.log(addMoneyInput)

    //get the pin number provided
    const pinNumberInput = document.getElementById('input-pin-number').value
    // console.log(pinNumberInput)


    // STEP: 3: verify teh pin number
    if(pinNumberInput === '1234') {
    // console.log('adding money to your account')

    //STEP: 4: get the current balance
    const balance = document.getElementById('account-balance').innerText
    // console.log(balance)

    // STEP: 5: add addMoneyInput with balance
    const newBalance = parseFloat(balance) + parseFloat(addMoneyInput)
    // console.log(newBalance)

    // STEP: 6: update the balance in the UI/DOM
    document.getElementById('account-balance').innerText = newBalance

    }
    else{
        alert('failed to add money! Please try again.')
    }
})