class Model {
    addTask() {
        const newTask = document.querySelector('.message').value;
        return newTask
    }

    clearTasks() {
        document.querySelector('.todo').innerHTML = '';
        document.querySelector('.message').value = '';
    }

    stateRemover() {
       if (document.querySelector('.remove_option').id === 'Done') {
            document.querySelector('.remove_option').id = 'NotDone'; 
       }
       
       else if (document.querySelector('.remove_option').id === 'NotDone') {
            document.querySelector('.remove_option').id = 'Done'; 
       }
       new View().removeOptionLine();
    }
};
