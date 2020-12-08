function criaTarefa() {
    console.log("this")

    const input = document.getElementById("tarefa")
    const inputVal = input.value
    const select = document.getElementById("tarefa")
    const selectVal = select.value
    const div = document.getElementById(selectVal)
    div.innerHTML += `<p>${inputVal}</p>`

   

}

