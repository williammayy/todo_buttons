const valueItem = document.getElementById('itemValue')
const cor = document.getElementById('corValue')
const cadastrar = document.getElementById('cadastrar')
const pontoValor = document.getElementById('pontoValor')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')

let lista = new Todo()

let componentList_v2 = (items) => {
    itensRenderizados.innerHTML = ''
    items.forEach((i, idx) => {
        let item = {
            nome: i.nome,
            pontos: i.pontos,
            cor: i.cor,
            idx
        }
        itensRenderizados.appendChild(lista.renderItem(item))
    })
}

cadastrar.addEventListener('click', (e) => {

    lista.novoItem = {
        "nome": valueItem.value,
        "cor": cor.value,
        "pontos": pontoValor.value
    }
    componentList_v2(lista.todos)
    valueItem.value = ''
    valueItem.focus()

})



window.onload = () => componentList_v2(lista.todos)
