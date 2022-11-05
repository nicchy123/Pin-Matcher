function getPin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }else{
        return getPin();
    }
}

function generatePin(){
    const random = Math.round(Math.random()*10000);
    return random;
};
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();
    const pinField = document.getElementById('pin-field');
    pinField.value = pin;
})

document.getElementById('calculator').addEventListener('click', function(){
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('typed-numbers');
    const previousTypedNumber = typeNumberField.value;
if(isNaN(number)){
if(number === 'C'){
    typeNumberField.value = '';
}else if(number === '<'){
    const digits = previousTypedNumber.split('');
    digits.pop('');
    const remainingDigits = digits.join('');
    typeNumberField.value = remainingDigits;
}
}else{
const newTypedNumbers = previousTypedNumber + number;
typeNumberField.value = newTypedNumbers;
}
});
document.getElementById('btn-submit').addEventListener('click',function(){
    const displayPinField = document.getElementById('pin-field');
    const currentPin = displayPinField.value;
    const typeNumberField = document.getElementById('typed-numbers');
    const typeNumber = typeNumberField.value;
    const pinMatchedMessage = document.getElementById('pin-match');
    const pinUnsuccess = document.getElementById('pin-unsuccess');
    if(currentPin == typeNumber){
        pinMatchedMessage.style.display = 'block';
        pinUnsuccess.style.display = 'none';
    }else{
        pinUnsuccess.style.display = 'block';
        pinMatchedMessage.style.display = 'none';
    }
})