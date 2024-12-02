const campoEntrada = document.getElementById("campoEntrada");
const formTarefa = document.getElementById("formaTarefa");
const listaTarefa = document.getElementById("listaTarefas");

function novaTarefa () {

    function novaTarefa() {
        const nomeTarefa = campoEntrada.value.trim();

        if (nomeTarefa === "") {
            campoEntrada.classList.add("input-erro");
            setTimeout(() => campoEntrada.classList.remove("input-erro"), 1500);
            return;

        }

        const itemTarefa = document.createElement("li");
        const span = document.createElement("span");
        const btnExcluir = document.createElement("button");

        span.innerText = nomeTarefa;
        btnExcluir.innerHTML = "< i class= 'bi bi-trash'></i>";
        btnExcluir.setAttribute("aria-label", "Excluir tarefa");

        span,onclick = () => {
            EventCounts.target.classList.toggle("concluida");
           
        };

        btnExcluir.onclick = () => {
            listaTarefa.removeChild(itemTarefa);
        };


        itemTarefa.appendChild(span);
        

    }
}
