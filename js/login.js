document.getElementById('loginButton').addEventListener('click', function(event) {
    event.preventDefault(); 


    const email = document.getElementById('email').value;
    const password = document.getElementById('senha').value;

    
    fetch('https://reqres.in/api/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email,
            password: password
        })
    })
    .then(response => response.json()) 
    .then(data => {
        if (data.token) {
          
            localStorage.setItem('userEmail', email);

          
            window.location.href = './screens/home.html';
        } else {
            
            alert('Falha no login: ' + 'Digite email e senha válido');
        }
    })
    .catch(error => {
        console.error('Erro na requisição:', error);
        alert('Ocorreu um erro inesperado.');
    });
});
