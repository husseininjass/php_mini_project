let form = document.querySelector("form");
let fName = document.querySelector("#fname");
let sName = document.querySelector(".sname");
let tName = document.querySelector(".tname");
let famName = document.querySelector(".famname");
let birth = document.querySelector(".birth");
let password = document.querySelector(".password");
let cPassword = document.querySelector(".cpassword");
let phone = document.querySelector(".phone");


form.addEventListener('submit' , function(event){
    let phone_reg = /^\d{14}$/;
    let pwd_expression =/(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
    let letters = /^[A-Za-z]+$/;
    if(!letters.test(fName.value)){
        event.preventDefault();
        fName.nextElementSibling.textContent = "first name should only contain letters";
    }
    if(!letters.test(sName.value)){
        event.preventDefault();
        sName.nextElementSibling.textContent = "second name should only contain letters";
    }
    if(!letters.test(tName.value)){
        event.preventDefault();
        tName.nextElementSibling.textContent = "third name should only contain letters";
    }
    if(!letters.test(famName.value)){
        event.preventDefault();
        famName.nextElementSibling.textContent = "family name should only contain letters";
    }
    if(!pwd_expression.test(password.value)){
        event.preventDefault();
        password.nextElementSibling.textContent = "password should contain upper case , lower case,number and special character";
    }
    if(password.value !== cPassword.value){
        event.preventDefault();
        cPassword.nextElementSibling.textContent = "password must match";
    }
    if(!phone_reg.test(phone.value)){
        event.preventDefault();
        phone.nextElementSibling.textContent = "phone number must be a 14 digits";
    }
})

  