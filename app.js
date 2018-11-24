const valueItem = document.getElementById('itemValue')
const cadastrar = document.getElementById('cadastrar')
const pontoValor = document.getElementById('pontoValor')
const divLista = document.getElementById('lista')
const itensRenderizados = document.getElementById('itensRenderizados')
const cor = document.getElementById('corValue')

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
        "pontos": pontoValor.value,
        "cor": cor.value,
    }
    componentList_v2(lista.todos)
    valueItem.value = ''
    valueItem.focus()

})



window.onload = () => componentList_v2(lista.todos)