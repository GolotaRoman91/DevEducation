import {constants} from './constant'

export function dragStart():void {
    constants.draggableTodo = this;
    setTimeout(() => {
        this.style.display = "none";
    }, 0);
}

export function dragEnd():void {
    constants.draggableTodo = null;
    setTimeout(() => {
        this.style.display = "block";
    }, 0);
}

export function dragOver(e: Event):void {
    e.preventDefault();
}

export function dragEnter():void {
    this.style.border = "1px dashed #ccc";
}

export function dragLeave():void {
    this.style.border = "none";
}

export function dragDrop():void {
    this.style.border = "none";
    this.appendChild(constants.draggableTodo);
}
