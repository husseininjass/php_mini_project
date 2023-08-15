let btn = document.querySelector("button");
let table = document.querySelector("table")
let user = document.querySelector("h2")
btn.addEventListener('click' ,function(){
    fetch('wlec.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        
    })
    .then(r => r.json())
    .then(function(data){
        
                console.log(data);
              
                    table.innerHTML += `
                    <tr>
                    
                    <td>${data.fname}</td>
                    <td>${data.phone}</td>
                    <td>${data.email}</td>

                    </tr>

                    `
             
                
            })
        
         
    
    
    
} )