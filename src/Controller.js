class Controller {
    addEvents() {
        document.querySelector('.add').addEventListener('click', new View().renderTask);
        document.querySelector('.clear').addEventListener('click', new View().clearTasks);
        document.querySelector('.todo').addEventListener('auxclick', new View().markAsDone);
        document.querySelector('.todo').addEventListener('dblclick', new View().removeFromList);
        document.querySelector('.remove_option').addEventListener('click', new Model().stateRemover);
    }
};
