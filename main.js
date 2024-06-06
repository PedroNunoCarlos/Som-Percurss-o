    function som(seletorAudio) {
        const elemento = document.querySelector(seletorAudio)
        
        if (elemento != null && elemento.localName === 'audio') {
            elemento.play()
        } else {
            console.log('Elemento não encontrado ou selector inválido')
        }
    }

    const listaDeTeclas = document.querySelectorAll('.tecla')
    
for (let contador = 0; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    let idAudio = `#som_${instrumento}`

        tecla.onclick = function () {
            som(idAudio)
    }
    tecla.onkeydown = function (evento) {
        if (evento.code === 'Space' || evento.code === 'Enter' ) {
        tecla.classList.add('ativa'); 
        }
    }
    
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa'); 
    }
}

/*   

let contador = 0
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1]

    let idAudio = `#som_${instrumento}`

        tecla.onclick = function () {
            som(idAudio)
        }
        contador++
    }
    
*/