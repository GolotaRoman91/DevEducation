const input = document.querySelector('.message');
const button = document.querySelector('.add');
const todo = document.querySelector('.todo');
const clear = document.querySelector('.clear');
const remove = document.querySelector('.remove_option');
let toDos;

button.addEventListener('click', addToList);
remove.addEventListener('click', markAsDone);
todo.addEventListener('dblclick', removeFromList);
todo.addEventListener('auxclick', markAsDone);
todo.addEventListener('input', ifInput);
clear.addEventListener('click', clearStorage);
