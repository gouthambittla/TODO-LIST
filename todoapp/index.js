const inputbox = document.getElementsByClassName('task')[0];
const items = document.getElementsByClassName('task1')[0];
function addtask() {
    if (inputbox.value == "") {
        alert("enter task")
    } else {

        let li = document.createElement("li")
        li.innerHTML = inputbox.value;
        items.appendChild(li);
        span = document.createElement('button')
        span.innerHTML = "\u00d7"
        li.appendChild(span)
    }
    inputbox.value = ''
}
items.addEventListener('click', (e) => {
    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }
}, false);
