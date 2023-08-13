let form = document.querySelector("form");
let fName = document.querySelector("input[name='firstname']");
let sName = document.querySelector("input[name='secondname']");
let tName = document.querySelector("input[name='thirdname']");
let famName = document.querySelector("input[name='familyname']");
let birth = document.querySelector("input[name='birth']");
let password = document.querySelector("input[name='password']");
let cPassword = document.querySelector("input[name='cpassword']");
let phone = document.querySelector("input[name='phone']");


form.addEventListener('submit' , function(event){
    
    let input = document.querySelectorAll("input");
    input.forEach(function(e){
        if(e.value === ''){
            event.preventDefault()
            e.nextElementSibling.textContent = "this filed cannot be empty";
        }
    })
})