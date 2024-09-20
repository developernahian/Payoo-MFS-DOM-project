//STEP: 1: show the cash out form and hide the add money form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){
    // console.log('Show Cash Out Button Clicked')

    //by default cash out form is hidden. so cash out form theke hidden ta remove kore dite hobe and add money form e hidden add korte hobe
    
    //show the cash out form
    document.getElementById('cash-out-form').classList.remove('hidden')

    //hide the add money form
    document.getElementById('add-money-form').classList.add('hidden')

})



//STEP: 2: show add money form and hide the cash out form
document.getElementById('btn-show-add-money').addEventListener('click', function(){
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})