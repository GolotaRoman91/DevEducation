function toLocalStorage () {
    toDos = todo.innerHTML;
    localStorage.setItem('toDos', toDos);
}

if (localStorage.getItem('toDos')) {
    todo.innerHTML = localStorage.getItem('toDos')
}