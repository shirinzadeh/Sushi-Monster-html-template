const form = document.querySelector(".login-form");
const pattern = /^[a-zA-Z0-9]{6,15}$/;
const feedback = document.querySelector(".feedback");

form.addEventListener("submit", e =>{
    e.preventDefault();

    const usernameValue = form.username.value;
    const passwordValue = form.password.value;
    if(pattern.test(usernameValue) && pattern.test(passwordValue) ){
        form.username.classList.add("trueValue")
        form.password.classList.add("trueValue")
    }
    else if(pattern.test(usernameValue) && pattern.test(passwordValue)==false){
        form.username.classList.add("trueValue");
        form.password.classList.add("falseValue")
        feedback.textContent = "invalid password"
        
    }
   
     else if(pattern.test(usernameValue)==false && pattern.test(passwordValue) ){
        form.password.classList.add("trueValue")
        form.username.classList.add("falseValue")
        feedback.textContent = "invalid username"
        usernameValue == ""
    }
    else{
        form.password.classList.add("falseValue")
        form.username.classList.add("falseValue")
        feedback.textContent = "invalid username and password"
        passwordValue == "";
        usernameValue == ""
    }
    
});

const btnRegisterLink = document.querySelector(".btn-register-link");
const loginForm = document.querySelector(".card-login");
const registerForm = document.querySelector(".card-register");
const btnLoginLink = document.querySelector(".btn-login-link");

btnRegisterLink.addEventListener("click", function(e){
    e.preventDefault();
    loginForm.style.display = "none";
    registerForm.style.display = "block"
});


// register form 
// const formRegister = document.querySelector(".signup-form");
// const mail = document.querySelector(".mail")
// const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/

// formRegister.addEventListener("submit", function(e){
//     e.preventDefault();


//     if(emailRgx.test(mail.value)){
//         return true;
//     }
//     else{
//         feedback.textContent = mail.value;
//     }
   
// })

