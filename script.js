let btn_toggle = document.querySelector("#btn_toggle");
btn_toggle.addEventListener('click', menu_toggle);
let menu = document.querySelector("#menu");
let tabela = document.getElementById("tabela");
let lista = document.querySelector(".lista");
function menu_toggle() {
    menu.classList.toggle("ativo");
}
let btn_salvar = document.getElementById("btn-salvar");
var lista_tarefas = [];
var posicao = '';
btn_salvar.addEventListener('click', cadastro_tarefa);
function listar_tarefas(lista) {
    let aux = '';
    lista.forEach((l, i) => {
        aux += '<tr>' +
            '<td>' + l + '</td>' +
            '<td>' + '<a href="#" class="btn button btnAlterar" rel="' + i + '">' + 'Alterar' + '</td>' +
            '<td>' + '<a href="#" class="btn button btnExcluir" rel="' + i + '">' + 'Excluir' + '</td>' +
            '</tr>';
    });
    return aux;
}

let t = document.getElementById("tarefa");
function cadastro_tarefa() {
    lista.style.display = 'block';
    var tarefa = document.getElementById("tarefa").value;
    if (tarefa != '' && isNaN(tarefa) == true) {
        if (lista_tarefas.includes(tarefa)) {
            alert('A tarefa informada já exista na lista.')
        }
        else {
            if (posicao == '') {
                lista_tarefas.push(tarefa);
            }
            else {
                lista_tarefas[posicao] = tarefa;
            }
        }
    }
    else {
        alert('Insira Valores Válidos!');
    }
    tabela.innerHTML = listar_tarefas(lista_tarefas);
    t.value = ' ';
    t.focus();





}
tabela.addEventListener('click', operacoes);

function operacoes(event) {
    posicao = event.target.rel;
    if (event.target.classList.contains("btnAlterar")) {
        document.getElementById("tarefa").value = lista_tarefas[posicao];
    }
    else if (event.target.classList.contains("btnExcluir")) {
        let confirmar = confirm('Deseja mesmo excluir a tarefa?');
        if (confirmar) {
            lista_tarefas.splice(posicao, 1);
        }
        tabela.innerHTML = listar_tarefas(lista_tarefas);
    }
}
