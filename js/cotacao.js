function buscarCotacoes() {
    const tabela = document.getElementById('cotacaoTabela');
    tabela.innerHTML = '<tr><td colspan="3">Carregando as informações...</td></tr>';

    fetch('https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL')
    .then(response => response.json())
    .then(data => {
        
        setTimeout(() => {
            tabela.innerHTML = ''; 

            
            const moedas = [
                { codigo: 'USD', nome: 'Dólar', icone: 'https://cdn-icons-png.flaticon.com/512/555/555526.png', dados: data.USDBRL },
                { codigo: 'EUR', nome: 'Euro', icone: 'https://cdn-icons-png.flaticon.com/512/197/197615.png', dados: data.EURBRL },
                { codigo: 'BTC', nome: 'Bitcoin', icone: 'https://cdn-icons-png.flaticon.com/512/825/825541.png', dados: data.BTCBRL }
            ];

            moedas.forEach(moeda => {
                const linha = document.createElement('tr');
                linha.innerHTML = `
                    <td><img src="${moeda.icone}" alt="${moeda.nome}" width="32"> ${moeda.codigo}</td>
                    <td>${parseFloat(moeda.dados.bid).toFixed(4)}</td>
                    <td>${moeda.dados.pctChange}</td>
                `;
                tabela.appendChild(linha);
            });
        }, 2000); 
    })
    .catch(error => {
        console.error('Erro ao buscar as cotações:', error);
        tabela.innerHTML = '<tr><td colspan="3">Erro ao carregar cotações</td></tr>';
    });
}


document.addEventListener('DOMContentLoaded', buscarCotacoes);
