function criarTarefa() {
    let selectDias = document.getElementById("dias-semana").value
    let inputTarefa = document.getElementById("tarefa").value
    
    document.getElementById(selectDias).innerHTML += "<p>- " + inputTarefa + "</p>"
    document.getElementById("tarefa").value = ""
    document.getElementById("dias-semana").value = "segunda"
}