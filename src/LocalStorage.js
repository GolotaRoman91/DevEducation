function toLocalStorage () {
    let toDos;
    toDos = document.querySelector('.todo').innerHTML;
    localStorage.setItem('toDos', toDos);
}

if (localStorage.getItem('toDos')) {
    document.querySelector('.todo').innerHTML = localStorage.getItem('toDos')
};
