document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const email = localStorage.getItem('userEmail');
        
        if (email) {
            
            document.getElementById('userEmail').textContent = email;

           
            document.getElementById('loadingMessage').style.display = 'none';
            document.getElementById('mainContent').style.display = 'block';
        } else {
            
            window.location.href = './login.html';
        }
    }, 1000); 
});
