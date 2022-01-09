import { constants } from './constant';
import * as drag from './dragable';

export function createTodo(): void {
    const todo_div = document.createElement("div");
    const input = (<HTMLInputElement>document.getElementById("todo_input"));
    const toDoInput = (<HTMLInputElement>document.getElementById("todo_input"));
    const input_val = input.value;
    const txt = document.createTextNode(input_val);
    const span = document.createElement("span");
    const span_txt = document.createTextNode("\u00D7");
    
    todo_div.appendChild(txt);
    todo_div.classList.add("todo");
    todo_div.setAttribute("draggable", "true");
    span.classList.add("close");
    span.appendChild(span_txt);
    
    todo_div.appendChild(span);
    
    constants.no_status.appendChild(todo_div);
    
    span.addEventListener("click", () => {
        span.parentElement.style.display = "none";
    });
    //   console.log(todo_div);
    
    todo_div.addEventListener("dragstart", drag.dragStart);
    todo_div.addEventListener("dragend", drag.dragEnd);
    toDoInput.value = "";
    (<HTMLDivElement>document.querySelector('#todo_form')).classList.remove("active");
    constants.overlay.classList.remove("active");
}
