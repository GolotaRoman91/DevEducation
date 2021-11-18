function addToList () {
    todo.innerHTML += `<li contenteditable="true">${input.value}</li>`;
    toLocalStorage();
}