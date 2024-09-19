//Search: form sumbit reloading the page

//step 1: set event handler
document.getElementById('button-login').addEventListener('click', function(event) {

    //step 2: prevent default behavior (reloading browser)
    event.preventDefault(); //IMPORTNT: form e data entry korar por submit click howar por page reload jeno na hoy ejonne form er jonne eta must use korte hobe
    // console.log('clicked')

    //step 3: get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    // console.log(phoneNumber)

})

