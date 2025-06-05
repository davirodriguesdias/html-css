var txtestado = document.getElementById('txtestado')

var txtpop = document.getElementById('txtpop')

var tabela = document.getElementById('tabela')


function add() {

    var linha = document.createElement('tr')

    var estado = document.createElement('td')

    var pop = document.createElement('td')

    estado.innerHTML = txtestado.value
    pop.innerHTML = txtpop.value

    // Ou Textcontent

    linha.appendChild(estado)
    linha.appendChild(pop)

    tabela.appendChild(linha)
}

// Colocar as seguintes funcionalidades:
// Ajeitar os estilos
// Conforme o estado ou pais solicitado, automaticamente adiconar a bandeira
//Melhorar o input
//Clcular populacao
//Conversão de valores