let form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    
    
    e.preventDefault();
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const wraning = document.querySelector('.text');
    let sendBack = {
        email: email,
        password: password,
    };

    fetch('http://localhost/php_mini_project/registration/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(sendBack)
    })
    .then(r => r.json())
    .then(function(data){
        console.log(data);
        data.forEach(function(e,i){
            if(data[i].email === email && data[i].password === password){
                console.log("yes");
                window.location.href = "../view_page/welcome.html";
            }
            else{
                wraning.textContent = "invalid email or password";
            }
        })
    })
    
});