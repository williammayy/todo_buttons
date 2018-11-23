class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `
    <div class="field is-grouped">

            <p class="control is-expanded">
            <input class="input is-large" style="min-width:150px" type="text" disabled value="${item.nome}">
            </p>


        <p class="control menos is-large"> <a class="button is-warning is-large">-</a></p>
            <p class="control is-expanded"> <input style="min-width:55px" class="input is-large" type="number" disabled value="${item.pontos}"></p>
            <p class="control mais "> <a class="button is-info is-large">+</a></p>
            <p class="control">
                <a class="button is-danger deletar">
                    <span class="icon is-small">
                        <i class="fas fa-times"></i>
                    </span>
                </a>
            </p>
            <p class="control">
                <a class="button is-default editar">
                    <span class="icon is-small">
                        <i class="fas fa-edit"></i>
                    </span>
                </a>
            </p>
        </div>
    `

        let itemHTML = document.createRange().createContextualFragment(template)

        itemHTML.querySelector('.deletar').addEventListener('click', () => {
            lista.excluirIndex = item.idx
            componentList_v2(lista.todos)
        })

        itemHTML.querySelector('.mais').addEventListener('click', () => {
            lista.aumentarPonto = item.idx
            componentList_v2(lista.todos)
        })

        itemHTML.querySelector('.menos').addEventListener('click', () => {
            lista.diminuirPonto = item.idx
            componentList_v2(lista.todos)
        })

        itemHTML.querySelector('.editar').addEventListener('click', (e) => {
            inputDesc.removeAttribute('disabled')
            inputDesc.focus()
            inputDesc.addEventListener('keyup', (f) => {
                if (f.keyCode === 13) {
                    lista.editarIndex(item.idx, inputDesc.value)
                    componentList_v2(lista.todos)
                    valueItem.value = ''
                    inputDesc.setAttribute('disabled', 'disabled')
                }
            })
        })




        let inputDesc = itemHTML.querySelector('.input')



        return itemHTML
    }
}
