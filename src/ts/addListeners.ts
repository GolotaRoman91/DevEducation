import { constants } from './constant';
import * as drag from './dragable';
import { createTodo } from './createToDo';

export function activateListeners():void {
    constants.todos.forEach((todo) => {
        todo.addEventListener("dragstart", drag.dragStart);
        todo.addEventListener("dragend", drag.dragEnd);
    });
    
    constants.all_status.forEach((status: HTMLElement) => {
        status.addEventListener("dragover", drag.dragOver);
        status.addEventListener("dragenter", drag.dragEnter);
        status.addEventListener("dragleave", drag.dragLeave);
        status.addEventListener("drop", drag.dragDrop);
    });
    
    constants.btns.forEach((btn: HTMLButtonElement) => {
        btn.addEventListener("click", () => {
            document.querySelector(btn.dataset.targetModal).classList.add("active");
            constants.overlay.classList.add("active");
        });
    });
        
    constants.close_modals.forEach((btn: HTMLButtonElement) => {
        btn.addEventListener("click", () => {
            const modal = btn.closest(".modal");
            modal.classList.remove("active");
            constants.overlay.classList.remove("active");
        });
    });
        
    window.onclick = (event: MouseEvent) => {
        if (event.target == constants.overlay) {
            const modals = document.querySelectorAll(".modal");
            modals.forEach((modal) => modal.classList.remove("active"));
            constants.overlay.classList.remove("active");
        }
    };
    
    constants.todo_submit.addEventListener("click", createTodo);
}
