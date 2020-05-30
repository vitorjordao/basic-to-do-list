function saveTask(event) {
    event.preventDefault();
    let tasks = document.getElementById("tasks");
    const taskValue = event.target.form[0].value;

    tasks.innerHTML +=
        `
    <div class="task">
        <input type="checkbox" class="" onclick="executeTask(event)"/>
        <span>${taskValue}</span>
        <button onclick="remove(event)">X</button>
    </div>
    `;

    event.target.form[0].value = "";
}

function executeTask(event) {
    const classes = event.target.parentElement.classList;

    classes.contains("done") ? classes.remove("done") : classes.add("done");

}

function remove(event) {
    event.target.parentElement.remove();
}