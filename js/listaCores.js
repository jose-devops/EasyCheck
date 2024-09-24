function buscarCores() {
    const tabela = document.getElementById('listaCoresTabela');
    
    tabela.innerHTML = '<tr><td colspan="3">Carregando as informações...</td></tr>';

    fetch('https://reqres.in/api/unknown')
    .then(response => response.json())
    .then(data => {
        setTimeout(() => {
            tabela.innerHTML = ''; 

            
            data.data.forEach(cor => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td>${cor.id}</td>
                    <td>${cor.name}</td>
                    <td style="background-color: ${cor.color}; color: white;">${cor.color}</td>
                `;
                tabela.appendChild(linha);
            });
        }, 2000); 
    })
    .catch(error => {
        console.error('Erro ao buscar as cores:', error);
        tabela.innerHTML = '<tr><td colspan="3">Erro ao carregar as cores</td></tr>';
    });
}


document.addEventListener('DOMContentLoaded', buscarCores);
