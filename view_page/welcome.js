let btn = document.querySelector("button");
let table = document.querySelector("table")
let user = document.querySelector("h2")
btn.addEventListener('click' ,function(){
    fetch('http://localhost/php_mini_project/registration/fetch.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then(r => r.json())
    .then(function(data){
        
                console.log(data);
                data.forEach(function(e,index){
                    table.innerHTML += `
                    <tr>
                    <td>${data[index].id}</td>
                    <td>${data[index].fname}</td>
                    <td>${data[index].sname}</td>
                    <td>${data[index].tname}</td>
                    <td>${data[index].famname}</td>
                    <td>${data[index].password}</td>
                    <td>${data[index].email}</td>
                    <td>${data[index].phone}</td>
                    <td>${data[index].signed}</td>
                    <td>${data[index].birth}</td>
                    <td>${data[index].login_date}</td>
                   
                    </tr>

                    `
                })
                
            })
        
         
    
    
    
} )
