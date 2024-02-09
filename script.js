document.getElementById('generateOtp').addEventListener('click',function(){
    var otp = Math.floor(1000 + Math.random() * 9000);
    document.getElementById('displayOtp').value=otp;
})

document.getElementById('calculator').addEventListener('click',function(event){
    const number = event.target.innerText;
    const inputNUmberField = document.getElementById('inputNumber');
    const currentNumber = inputNUmberField.value;

    if(isNaN(number)){
        if(number==='C'){
            inputNUmberField.value='';
        }
        else if(number === '<'){
            const digits = currentNumber.split('');
            digits.pop();
            inputNUmberField.value=digits.join('');
        }
    }
    else{
        inputNUmberField.value+=number;
    }
})

document.getElementById('verifyOtp').addEventListener('click',function(){
    console.log('submit');
    const givenOtp = document.getElementById('displayOtp').value;
    const inputOtp = document.getElementById('inputNumber').value;
    
    if(givenOtp === inputOtp){
        document.getElementById('success').style.display = 'block';
        document.getElementById('fail').style.display = 'none';
        console.log('submit');
    }
    else{
        document.getElementById('success').style.display = 'none';
        document.getElementById('fail').style.display = 'block';
    }
})