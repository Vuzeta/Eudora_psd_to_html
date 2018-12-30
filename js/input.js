let inputEmail = document.getElementById('email');

inputEmail.value = 'WRITE YOUR E-MAIL ADRES';

inputEmail.addEventListener("focus", function () {
    
    if (inputEmail.value == 'WRITE YOUR E-MAIL ADRES') {
        inputEmail.value = '';
    }
    
});

inputEmail.addEventListener("blur", function () {
    if(!this.value.length > 0) {
        inputEmail.value = 'WRITE YOUR E-MAIL ADRES';
    }
});