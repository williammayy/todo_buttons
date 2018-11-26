class Todo extends Store {
    constructor() {
        super();
    }

    renderItem(item) {

        let template = `

        <div class="columns" style="margin-top: 10px">
        <div class="column" style="background-color:#${item.cor}; height: 150px;padding: 2px">
            <div style="height: 100%; position: relative;">



                <div style="position: absolute; top:5%;left: 50%;margin-left:-50%;width: 100% ">
                    <input style="background-color: transparent;color: white;font-size: 30px;-webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: #000;" type="text " class="inputPontos input" disabled value="${item.nome}">
                </div>


                <div style="position: absolute; top:20%;left: 50%;margin-left:-50%;width: 100%  ">
                    <input style="background-color: transparent; color: white;font-size: 80px;-webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: #000;" class=" inputPontos input " type="number " disabled value="${item.pontos}">
                </div>

                <div class="menos inputPontos" style="position: absolute;top:5%;left:20%;border-color:#${item.cor};">
                    <a style="background-color: transparent;
                     color: white;font-size: 80px;-webkit-text-stroke-width: 1px;
                    -webkit-text-stroke-color: #000;border-color:#${item.cor};" class="inputPontos">—</a>
                </div>

                <div class="mais inputPontos" style="position: absolute;top:5%;right:20%;border-color:#${item.cor};">
                    <a style="background-color: transparent;
                         color: white;font-size: 80px;-webkit-text-stroke-width: 1px;
                        -webkit-text-stroke-color: #000;border-color:#${item.cor};" class="inputPontos">+</a>
                </div>

                <div style="position: absolute;top:5%;right:2%;">
                    <a class="button is-danger deletar ">
                        <span class="icon is-small ">
                            <i class="fas fa-times "></i>
                        </span>
                    </a>
                </div>

                <p style="position: absolute;top:5%;left:2%;">
                    <a class="button is-default editar ">
                        <span class="icon is-small ">
                            <i class="fas fa-edit "></i>
                        </span>
                    </a>
                </p>

            </div>
        </div>
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
                    valueItem.focus()
                    inputDesc.setAttribute('disabled', 'disabled')
                }
            })
        })




        let inputDesc = itemHTML.querySelector('.input')



        return itemHTML
    }
}