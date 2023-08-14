let form = document.querySelector("form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.querySelector('.email').value;
    const password = document.querySelector('.password').value;

    let request = {
        email: email,
        password: password,
    };

    fetch('http://localhost/php_mini_project/registration/login.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(request)
    })
    .then(r => r.json())
    .then(function(data){
        console.log(data);
    })
});
