const form = document.querySelector('.form');
const tarefa = document.querySelector('.tarefa')
const categoria = document.querySelector('.categoria')
const listaTarefas = document.querySelector('.lista-tarefas')



let id = 0

const AtividadesAdicionadas  = () => {
    const idAdicionados = document.querySelector('.id')
    
    id++

    idAdicionados.innerHTML = id

}

const AdicionadoLista = () => {
        
    const div = document.createElement('div')
    const p2 = document.createElement('p')
    const p1 = document.createElement('p')
    
    listaTarefas.appendChild(div)
    div.appendChild(p2)
    div.appendChild(p1)

    p1.classList.add('tarefa-escolida')
    p2.classList.add('categoria-escolida')

    div.style.display = 'block'

    p1.innerHTML = tarefa.value
    p2.innerHTML = categoria.value
    AtividadesAdicionadas()
}

form.addEventListener('submit', (event) => {
    event.preventDefault()
    AdicionadoLista()
});



//categoria 

const criarCategoria = document.querySelector('.criar-categoria')
const digiteCategoriCriar = document.querySelector('.digite-categori-criar')
const MessageCategoria = document.querySelector('.adicionar-tarefas  p')

const TempoMessageCategoria = () => {
    MessageCategoria.style.display = 'block'

    setTimeout( () => {
        MessageCategoria.style.display = 'none'
    } , 2000)
}

const  criadoCategoria = () => {
    const option = document.createElement('option')

    categoria.appendChild(option)

    option.innerHTML = digiteCategoriCriar.value
}

criarCategoria.addEventListener('submit' , (event) => {
    event.preventDefault()
    criadoCategoria()
    TempoMessageCategoria()
})

