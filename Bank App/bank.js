const depositfield = document.getElementById('deposit-field');
const withdrawfield = document.getElementById('withdraw-field');
const deposittotal = document.getElementById('deposit-total');
const withdrawtotal = document.getElementById('withdraw-total');
const balancetotal = document.getElementById('balance-total');
const btndeposit = document.getElementById('btn-deposit');
const btnwithdraw = document.getElementById('btn-withdraw');

let depositAmount = 0;
let withdrawAmount = 0;
let balanceAmount = 1240;

function displayUpdate(){
    deposittotal.textContent = depositAmount.toFixed(2);
    withdrawtotal.textContent = withdrawAmount.toFixed(2);
    balancetotal.textContent = balanceAmount.toFixed(2);
}

btndeposit.addEventListener('click', function(e){e.preventDefault();

    const amount = parseFloat(depositfield.value);

    if (isNaN(amount) || amount <=0){
        alert('Please enter a valid amount');
        depositfield.value = ' ';
        return;
    }

    depositAmount += amount;
    balanceAmount += amount;
    displayUpdate();
    depositfield.value = ' ';
})

btnwithdraw.addEventListener('click', function(e){
    e.preventDefault();

    const amount = parseFloat(withdrawfield.value);

    if (isNaN(amount) || amount <=0){
        alert("Please enter a valid amount");
        withdraw = ' '
        return;
    }

    if (amount > balanceAmount){
        alert("Insufficient Balance");
        withdrawfield = ' ';
        return;
    }

    withdrawAmount += amount;
    balanceAmount -= amount;
    displayUpdate();
    withdrawfield = ' ';
})

depositfield.addEventListener('keypress', function(e){
    if (e.key === 'Enter'){
        btndeposit.click();
        depositfield = '';
    }
})

withdrawfield.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        btnwithdraw.click();
        withdrawfield.value = '';
    }
})