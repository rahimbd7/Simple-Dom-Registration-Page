// All the input fields
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPhone = document.getElementById('phone');

// All the fields for showing Error msg
const nameErrMsg = document.getElementById('nameErrMsg')
const emailErrMsg = document.getElementById('emailErrMsg')
const phoneErrMsg = document.getElementById('phoneErrMsg')

// success || warning container
const result = document.querySelector('#result');


// For submit event
const btn = document.querySelector('button');
btn.addEventListener('click', function () {
    const userNameValue = userName.value || errName();
    const userEmailValue = userEmail.value || errEmail();
    const userPhoneValue = userPhone.value || errPhone();


    if (userNameValue && userEmailValue && userPhoneValue) {
        result.innerHTML = `<div class="alert alert-success flex justify-center">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Your Registration has been confirmed!</span>
</div>`
        setTimeout(function () {
            result.innerHTML = '';
            userName.value = '';
            userEmail.value = '';
            userPhone.value = '';
        }, 3000)

    }  else {
        result.innerHTML = `<div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Please fill up all the inputs....</span>
</div>`
    }


    // function for error handling
    function errName() {
        nameErrMsg.innerHTML = `<div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Please fill up the name</span>
</div>`;
        setTimeout(() => {
            nameErrMsg.innerHTML = ''; 
        }, 5000);
    }

    function errEmail() {
        emailErrMsg.innerHTML = `<div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Please fill up the email</span>
</div>`;
        setTimeout(() => {
            emailErrMsg.innerHTML = '';
        }, 5000);
    }

    function errPhone() {
        phoneErrMsg.innerHTML = `<div class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  <span>Please fill up the phone</span>
</div>`;
        setTimeout(() => {
            phoneErrMsg.innerHTML = '';
        }, 5000);
    }
    
});
