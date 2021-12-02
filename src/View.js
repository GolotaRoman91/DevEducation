class View {
    renderTask() {
        document.querySelector('.todo').innerHTML += `<li contenteditable="true">${new Model().addTask()}</li>`;
        document.querySelector('.message').value = '';
    }

    clearTasks() {
        new Model().clearTasks();
    }

    markAsDone(e) {
        if (e.target.id !== 'Done') {
            e.target.setAttribute('id', 'Done');
            e.target.style = 'text-decoration: line-through';
            return 
        }
        if (e.target.id === 'Done') {
            e.target.setAttribute('id', 'Not_Done');
            e.target.style = '';
            return
        }
    }

    removeOptionLine() {
        if (document.querySelector('.remove_option').id === 'Done') {
            document.querySelector('.remove_option').style = 'text-decoration: line-through';
        } else if (document.querySelector('.remove_option').id === 'NotDone') {
            document.querySelector('.remove_option').style = '';
        }
    }

    removeFromList(e) {
        if (document.querySelector('.remove_option').id === 'NotDone') {
            e.target.setAttribute('hidden', 'hidden');
        }
    }
};
