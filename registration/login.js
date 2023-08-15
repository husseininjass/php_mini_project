let form = document.querySelector("form");
form.addEventListener('submit', function(e) {
    
    // e.preventDefault();
    
    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;
    const wraning = document.querySelector('.text');
    let status = false;
   
    fetch('http://localhost/php_mini_project/registration/fetch.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    .then(r => r.json())
    .then(function(data){
        data.forEach(function(e,i){
            if(data[i].email === email && data[i].password === password){
                status = true;
                
                window.location.href = "../view_page/welcome.html";
            }
        })
        if(status === false){
            wraning.textContent = "invalid email or password";
        }

    })
    
});